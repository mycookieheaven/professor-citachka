"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  PLAYER_START_RADIUS,
  createWorld,
  formatTime,
  isHandledKey,
  leaderboard,
  playerRank,
  restartWorld,
  startWorld,
  steeringFor,
  stepWorld,
  type LeaderEntry,
  type Vec,
  type World,
} from "@/lib/cookie-io";
import type { Dictionary } from "@/lib/i18n";
import { cameraFor, paint } from "./cookie-io-paint";
import styles from "./CookieIoGame.module.css";

/*
 * cookie.io — the small window beside the homepage.
 *
 * Three decisions are worth stating, because they are the difference between a
 * game someone plays and a game someone closes:
 *
 *   1. It never runs on its own. The canvas is not even mounted until the
 *      visitor presses Play, so arriving on the page costs nothing and the page
 *      is never playing at a reader who did not ask.
 *   2. It stops when it cannot be watched. Hiding the tab pauses it, so nobody
 *      comes back to a cookie that died while the phone was in a pocket.
 *   3. The keyboard is a first-class control, and the arrow keys do not scroll
 *      the page while the stage has focus.
 */

type Labels = Dictionary["game"];
type PlayState = "ready" | "playing" | "paused" | "over";

type Hud = { score: number; time: number; size: number; rank: number; best: number; board: LeaderEntry[] };

const BEST_KEY = "cookie-io-best";

function readBest(): number {
  try {
    const stored = Number(window.localStorage.getItem(BEST_KEY));
    return Number.isFinite(stored) && stored > 0 ? stored : 0;
  } catch {
    /* A browser that refuses storage is not a reason to refuse to play. */
    return 0;
  }
}

function writeBest(score: number): void {
  try {
    window.localStorage.setItem(BEST_KEY, String(score));
  } catch {
    /* Ignored on purpose: the score of this game is still on screen. */
  }
}

export function CookieIoGame({ labels }: { labels: Labels }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const worldRef = useRef<World | null>(null);
  const keysRef = useRef<Set<string>>(new Set());
  const pointerRef = useRef<Vec | null>(null);
  const frameRef = useRef(0);
  const lastRef = useRef(0);
  const seedRef = useRef(1);
  const stateRef = useRef<PlayState>("ready");
  const bestRef = useRef(0);

  const [armed, setArmed] = useState(false);
  const [state, setState] = useState<PlayState>("ready");
  const [hud, setHud] = useState<Hud>({ score: 0, time: 0, size: PLAYER_START_RADIUS, rank: 1, best: 0, board: [] });

  const goTo = useCallback((next: PlayState) => {
    stateRef.current = next;
    setState(next);
  }, []);

  /** Play, or play again. Both arrive here. */
  const begin = useCallback(() => {
    /* Read once, on the way into a game: a stored score is not needed before then. */
    bestRef.current = Math.max(bestRef.current, readBest());
    const current = worldRef.current;
    if (!current) {
      worldRef.current = startWorld(createWorld(seedRef.current));
    } else if (current.status === "over") {
      seedRef.current += 1;
      worldRef.current = restartWorld(current);
    } else {
      startWorld(current);
    }
    keysRef.current.clear();
    goTo("playing");
    setArmed(true);
  }, [goTo]);

  const togglePause = useCallback(() => {
    const current = worldRef.current;
    if (!current || current.status !== "playing") return;
    if (stateRef.current === "playing") {
      keysRef.current.clear();
      goTo("paused");
    } else if (stateRef.current === "paused") {
      goTo("playing");
    }
  }, [goTo]);

  /* Pausing when the tab is hidden is what keeps a game from being lost to a pocket. */
  useEffect(() => {
    const onVisibility = () => {
      if (document.visibilityState === "hidden" && stateRef.current === "playing") {
        keysRef.current.clear();
        goTo("paused");
      }
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, [goTo]);

  useEffect(() => {
    if (!armed) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    /* Without a 2D context there is nothing to drive, and nothing to break. */
    const context = canvas.getContext("2d");
    if (!context) return;

    let disposed = false;
    let hudClock = 0;

    const measure = () => {
      const ratio = Math.min(2, window.devicePixelRatio || 1);
      const width = Math.max(120, Math.round(canvas.clientWidth));
      const height = Math.max(120, Math.round(canvas.clientHeight));
      if (canvas.width !== Math.round(width * ratio) || canvas.height !== Math.round(height * ratio)) {
        canvas.width = Math.round(width * ratio);
        canvas.height = Math.round(height * ratio);
      }
      return { width, height, ratio };
    };
    measure();

    let observer: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      observer = new ResizeObserver(measure);
      observer.observe(canvas);
    }

    const loop = (now: number) => {
      if (disposed) return;
      frameRef.current = window.requestAnimationFrame(loop);
      const delta = lastRef.current ? Math.min(0.05, (now - lastRef.current) / 1000) : 0;
      lastRef.current = now;
      const world = worldRef.current;
      if (!world) return;
      if (stateRef.current === "playing" && world.status === "playing") {
        stepWorld(world, delta, {
          turnToward: steeringFor(keysRef.current, pointerRef.current, { width: canvas.clientWidth, height: canvas.clientHeight }),
          boost: keysRef.current.has("Space"),
        });
      }
      const size = measure();
      context.setTransform(size.ratio, 0, 0, size.ratio, 0, 0);
      paint(context, world, cameraFor(world, size.width, size.height), { minimap: size.width > 148 });
      hudClock += delta;
      if (hudClock >= 0.2) {
        hudClock = 0;
        if (world.status === "over" && stateRef.current === "playing") {
          goTo("over");
          if (world.score > bestRef.current) {
            bestRef.current = world.score;
            writeBest(world.score);
          }
        }
        setHud({
          score: world.score,
          time: world.time,
          size: world.player.radius,
          rank: playerRank(world),
          best: bestRef.current,
          board: leaderboard(world, 5),
        });
      }
    };

    frameRef.current = window.requestAnimationFrame(loop);
    canvas.focus();
    return () => {
      disposed = true;
      window.cancelAnimationFrame(frameRef.current);
      lastRef.current = 0;
      observer?.disconnect();
    };
  }, [armed, goTo]);

  const onKeyDown = (event: React.KeyboardEvent<HTMLCanvasElement>) => {
    if (isHandledKey(event.code)) event.preventDefault();
    if (event.code === "KeyP" || event.code === "Escape") {
      togglePause();
      return;
    }
    keysRef.current.add(event.code);
  };

  const onKeyUp = (event: React.KeyboardEvent<HTMLCanvasElement>) => {
    keysRef.current.delete(event.code);
  };

  const onPointer = (event: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    pointerRef.current = { x: event.clientX - rect.left, y: event.clientY - rect.top };
  };

  const onPointerUp = (event: React.PointerEvent<HTMLCanvasElement>) => {
    /* A lifted finger should not keep steering: it is not a mouse. */
    if (event.pointerType !== "mouse") pointerRef.current = null;
  };

  const live =
    state === "over"
      ? `${labels.over} — ${labels.score} ${hud.score}`
      : state === "paused"
        ? `${labels.paused}. ${labels.pausedHint}`
        : state === "playing"
          ? labels.playing
          : "";

  return (
    <section className={styles.window} aria-labelledby="cookie-io-title">
      <div className={styles.header}>
        <h2 className={styles.title} id="cookie-io-title">{labels.title}</h2>
        <span className={styles.badge} aria-hidden="true">{armed ? `${labels.score} ${hud.score}` : labels.play}</span>
      </div>

      <div className={styles.stage}>
        {armed ? (
          <canvas
            ref={canvasRef}
            className={styles.canvas}
            tabIndex={0}
            role="img"
            aria-label={`${labels.tagline} ${labels.keys}`}
            onKeyDown={onKeyDown}
            onKeyUp={onKeyUp}
            onBlur={() => keysRef.current.clear()}
            onPointerMove={onPointer}
            onPointerDown={onPointer}
            onPointerUp={onPointerUp}
          />
        ) : (
          <div className={styles.peek} aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/pixel-cookie.svg" alt="" width={92} height={92} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.peekSmall} src="/images/pixel-cookie.svg" alt="" width={92} height={92} />
          </div>
        )}

        {state !== "playing" ? (
          <div className={styles.overlay}>
            {state === "ready" ? (
              <>
                <p className={styles.overlayTitle}>{labels.tagline}</p>
                <p className={styles.overlayHint}>{labels.keys}</p>
                <button type="button" className={styles.button} onClick={begin}>{labels.play}</button>
              </>
            ) : null}
            {state === "paused" ? (
              <>
                <p className={styles.overlayTitle}>{labels.paused}</p>
                <button type="button" className={styles.button} onClick={togglePause}>{labels.resume}</button>
              </>
            ) : null}
            {state === "over" ? (
              <>
                <p className={styles.overlayTitle}>{labels.over}</p>
                <p className={styles.overlayHint}>{labels.overText}</p>
                <dl className={styles.finalStats}>
                  <div><dt>{labels.score}</dt><dd>{hud.score}</dd></div>
                  <div><dt>{labels.time}</dt><dd>{formatTime(hud.time)}</dd></div>
                  <div><dt>{labels.best}</dt><dd>{Math.max(hud.best, hud.score)}</dd></div>
                </dl>
                <button type="button" className={styles.button} onClick={begin}>{labels.restart}</button>
              </>
            ) : null}
          </div>
        ) : null}
      </div>

      {armed ? (
        <div className={styles.footer}>
          <dl className={styles.stats}>
            <div><dt>{labels.score}</dt><dd>{hud.score}</dd></div>
            <div><dt>{labels.time}</dt><dd>{formatTime(hud.time)}</dd></div>
            <div><dt>{labels.size}</dt><dd>{Math.round(hud.size)}</dd></div>
            <div><dt>{labels.best}</dt><dd>{Math.max(hud.best, hud.score)}</dd></div>
          </dl>
          <ol className={styles.board}>
            <li className={styles.boardTitle}>{labels.board}</li>
            {hud.board.map((row, index) => (
              <li key={row.id} className={styles.boardRow} data-player={row.player ? "true" : "false"}>
                <span className={styles.rank}>{index + 1}</span>
                <span className={styles.who}>{row.player ? labels.you : labels.names[row.nameIndex % labels.names.length]}</span>
                <span className={styles.girth}>{Math.round(row.radius)}</span>
              </li>
            ))}
          </ol>
          <p className={styles.legend}>
            <span className={styles.legendItem}>
              <span className={styles.swatchDanger} aria-hidden="true" />
              {labels.danger}
            </span>
            <span className={styles.legendItem}>
              <span className={styles.swatchSnack} aria-hidden="true" />
              {labels.snack}
            </span>
          </p>
          {/* One control at a time: the overlay owns Pause while it is showing,
              so a screen reader never meets two buttons with the same name. */}
          {state === "playing" ? (
            <button type="button" className={styles.pauseButton} onClick={togglePause}>
              {labels.pause}
            </button>
          ) : null}
        </div>
      ) : (
        <p className={styles.hint}>{labels.hint}</p>
      )}

      <p className={styles.live} role="status" aria-live="polite">{live}</p>
    </section>
  );
}
