import { writeFile } from "node:fs/promises";

const targets = await fetch("http://127.0.0.1:9223/json").then((response) => response.json());
const page = targets.find((target) => target.type === "page");
if (!page) throw new Error("No Chrome page target found");

const socket = new WebSocket(page.webSocketDebuggerUrl);
await new Promise((resolve, reject) => {
  socket.addEventListener("open", resolve, { once: true });
  socket.addEventListener("error", reject, { once: true });
});

let nextId = 1;
const pending = new Map();
socket.addEventListener("message", (event) => {
  const message = JSON.parse(event.data);
  if (message.id && pending.has(message.id)) {
    const { resolve, reject } = pending.get(message.id);
    pending.delete(message.id);
    if (message.error) reject(new Error(message.error.message));
    else resolve(message.result);
  }
});

function send(method, params = {}) {
  const id = nextId++;
  return new Promise((resolve, reject) => {
    pending.set(id, { resolve, reject });
    socket.send(JSON.stringify({ id, method, params }));
  });
}

await send("Page.enable");
await send("Runtime.enable");
await send("Emulation.setDeviceMetricsOverride", {
  width: 390,
  height: 844,
  deviceScaleFactor: 1,
  mobile: true,
});
await send("Page.navigate", { url: "http://127.0.0.1:3000/subjects/russian/alphabet-foundations" });
await new Promise((resolve) => setTimeout(resolve, 1200));

const metrics = await send("Runtime.evaluate", {
  returnByValue: true,
  expression: `(() => {
    const width = document.documentElement.clientWidth;
    const offenders = Array.from(document.querySelectorAll('body *')).map((element) => {
      const rect = element.getBoundingClientRect();
      return { tag: element.tagName, className: element.className, left: rect.left, right: rect.right, width: rect.width };
    }).filter((item) => item.left < -1 || item.right > width + 1).slice(0, 20);
    return {
      innerWidth,
      clientWidth: width,
      scrollWidth: document.documentElement.scrollWidth,
      bodyScrollWidth: document.body.scrollWidth,
      title: document.title,
      heading: document.querySelector('h1')?.textContent,
      offenders,
    };
  })()`,
});

const screenshot = await send("Page.captureScreenshot", { format: "png", captureBeyondViewport: false });
await writeFile("lesson-mobile-cdp.png", Buffer.from(screenshot.data, "base64"));
console.log(JSON.stringify(metrics.result.value, null, 2));
socket.close();
