#!/usr/bin/env python3
"""Generate word-free reference clips for six Russian phonemes."""

from __future__ import annotations

import math
import random
import struct
import wave
from pathlib import Path

RATE = 44_100
OUT = Path(__file__).resolve().parents[1] / "public/audio/russian/phonemes"


def fade(samples: list[float], milliseconds: int = 18) -> list[float]:
    edge = int(RATE * milliseconds / 1000)
    for index in range(min(edge, len(samples) // 2)):
        gain = index / edge
        samples[index] *= gain
        samples[-index - 1] *= gain
    return samples


def vowel(formants: tuple[int, int], duration: float = 0.72) -> list[float]:
    result: list[float] = []
    for index in range(int(RATE * duration)):
        time = index / RATE
        source = sum(math.sin(2 * math.pi * 125 * harmonic * time) / harmonic for harmonic in range(1, 7))
        resonance = 0.34 * math.sin(2 * math.pi * formants[0] * time) + 0.18 * math.sin(2 * math.pi * formants[1] * time)
        result.append(0.5 * source + resonance)
    return fade(result, 35)


def nasal_m(duration: float = 0.72) -> list[float]:
    result = []
    for index in range(int(RATE * duration)):
        time = index / RATE
        result.append(
            0.7 * math.sin(2 * math.pi * 120 * time)
            + 0.24 * math.sin(2 * math.pi * 240 * time)
            + 0.12 * math.sin(2 * math.pi * 360 * time)
        )
    return fade(result, 35)


def fricative_s(duration: float = 0.72) -> list[float]:
    rng = random.Random(17)
    raw = [rng.uniform(-1, 1) for _ in range(int(RATE * duration))]
    # A simple high-pass difference emphasizes the hiss of /s/ without a vowel.
    result = [raw[index] - 0.92 * raw[index - 1] if index else raw[index] for index in range(len(raw))]
    return fade(result, 28)


def plosive(seed: int, brightness: float) -> list[float]:
    rng = random.Random(seed)
    duration = 0.42
    result = [0.0] * int(RATE * duration)
    release = int(RATE * 0.045)
    start = int(RATE * 0.08)
    previous = 0.0
    for index in range(release):
        noise = rng.uniform(-1, 1)
        shaped = noise - brightness * previous
        previous = noise
        envelope = math.exp(-index / (RATE * 0.011))
        result[start + index] = shaped * envelope
    return fade(result, 8)


def write_clip(name: str, samples: list[float]) -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    peak = max(abs(value) for value in samples) or 1
    pcm = b"".join(struct.pack("<h", int(max(-1, min(1, value / peak * 0.78)) * 32767)) for value in samples)
    with wave.open(str(OUT / f"{name}.wav"), "wb") as output:
        output.setnchannels(1)
        output.setsampwidth(2)
        output.setframerate(RATE)
        output.writeframes(pcm)


def main() -> None:
    clips = {
        "a": vowel((800, 1_200)),
        "m": nasal_m(),
        "k": plosive(11, 0.35),
        "o": vowel((500, 900)),
        "t": plosive(23, 0.82),
        "s": fricative_s(),
    }
    for name, samples in clips.items():
        write_clip(name, samples)
        print(OUT / f"{name}.wav")


if __name__ == "__main__":
    main()
