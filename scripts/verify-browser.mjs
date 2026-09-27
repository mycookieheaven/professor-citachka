import { writeFile } from "node:fs/promises";

const target = (await fetch("http://127.0.0.1:9223/json").then((response) => response.json()))
  .find((item) => item.type === "page");
if (!target) throw new Error("No browser page target found");

const socket = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((resolve, reject) => {
  socket.addEventListener("open", resolve, { once: true });
  socket.addEventListener("error", reject, { once: true });
});

let nextId = 1;
const pending = new Map();
const runtimeErrors = [];
socket.addEventListener("message", (event) => {
  const message = JSON.parse(event.data);
  if (message.method === "Runtime.exceptionThrown") runtimeErrors.push(message.params.exceptionDetails.text);
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

async function navigate(url) {
  await send("Page.navigate", { url });
  await new Promise((resolve) => setTimeout(resolve, 900));
}

async function evaluate(expression) {
  const response = await send("Runtime.evaluate", { expression, returnByValue: true, awaitPromise: true });
  return response.result.value;
}

await send("Page.enable");
await send("Runtime.enable");
await send("Emulation.setDeviceMetricsOverride", { width: 1440, height: 1000, deviceScaleFactor: 1, mobile: false });
await navigate("http://127.0.0.1:3000");
const homeDesign = await evaluate(`(() => {
  const bodyStyle = getComputedStyle(document.body);
  const headingStyle = getComputedStyle(document.querySelector('h1'));
  const star = document.querySelector('.star-layer-near');
  return {
    bodyFont: bodyStyle.fontFamily,
    bodySize: bodyStyle.fontSize,
    bodyWeight: bodyStyle.fontWeight,
    headingFont: headingStyle.fontFamily,
    headingWeight: headingStyle.fontWeight,
    subjectIconCount: document.querySelectorAll('[data-subject-icon]').length,
    starLayerCount: document.querySelectorAll('.star-layer').length,
    starAnimation: getComputedStyle(star).animationName,
    horizontalOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
  };
})()`);
const homeScreenshot = await send("Page.captureScreenshot", { format: "png", captureBeyondViewport: false });
await writeFile("dashboard-accessible-celestial.png", Buffer.from(homeScreenshot.data, "base64"));

await send("Emulation.setDeviceMetricsOverride", { width: 390, height: 844, deviceScaleFactor: 1, mobile: true });
await navigate("http://127.0.0.1:3000");
const mobileHome = await evaluate(`(() => ({
  scrollWidth: document.documentElement.scrollWidth,
  clientWidth: document.documentElement.clientWidth,
  subjectIconCount: document.querySelectorAll('[data-subject-icon]').length,
  overflowCount: Array.from(document.querySelectorAll('body *')).filter((element) => {
    const rect = element.getBoundingClientRect();
    return rect.left < -1 || rect.right > document.documentElement.clientWidth + 1;
  }).length,
}))()`);
const mobileHomeScreenshot = await send("Page.captureScreenshot", { format: "png", captureBeyondViewport: false });
await writeFile("dashboard-mobile-celestial.png", Buffer.from(mobileHomeScreenshot.data, "base64"));

await navigate("http://127.0.0.1:3000/subjects/russian/alphabet-foundations");
await evaluate("localStorage.clear()");
await send("Page.reload");
await new Promise((resolve) => setTimeout(resolve, 900));

const mobileLayout = await evaluate(`(() => ({
  innerWidth,
  scrollWidth: document.documentElement.scrollWidth,
  heading: document.querySelector('h1')?.textContent,
  slowAudio: document.querySelector('[data-testid="slow-audio"]')?.getAttribute('src'),
  naturalAudio: document.querySelector('[data-testid="natural-audio"]')?.getAttribute('src'),
  overflowCount: Array.from(document.querySelectorAll('body *')).filter((element) => {
    const rect = element.getBoundingClientRect();
    return rect.left < -1 || rect.right > document.documentElement.clientWidth + 1;
  }).length,
}))()`);

const screenshot = await send("Page.captureScreenshot", { format: "png", captureBeyondViewport: false });
await writeFile("lesson-mobile-cdp.png", Buffer.from(screenshot.data, "base64"));

await evaluate(`document.querySelector('.lesson-finish button')?.click()`);
await new Promise((resolve) => setTimeout(resolve, 100));
const completion = await evaluate(`(() => {
  const button = document.querySelector('.lesson-finish button');
  return { text: button?.textContent.trim(), disabled: button?.disabled, stored: localStorage.getItem('professor-citachka:completed-lessons') };
})()`);

await navigate("http://127.0.0.1:3000/subjects/neuroscience");
const subjectRoom = await evaluate(`(() => ({
  heading: document.querySelector('h1')?.textContent,
  status: document.querySelector('.coming-soon-panel h2')?.textContent,
  horizontalOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
}))()`);

const assetChecks = {};
for (const path of [
  "/audio/russian/alphabet-foundations-slow.m4a",
  "/audio/russian/alphabet-foundations-natural.m4a",
]) {
  const response = await fetch(`http://127.0.0.1:3000${path}`);
  assetChecks[path] = { status: response.status, contentType: response.headers.get("content-type"), bytes: (await response.arrayBuffer()).byteLength };
}

console.log(JSON.stringify({ homeDesign, mobileHome, mobileLayout, completion, subjectRoom, assetChecks, runtimeErrors }, null, 2));
socket.close();
