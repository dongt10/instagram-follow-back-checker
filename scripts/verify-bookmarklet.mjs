import { readFile } from "node:fs/promises";

const bookmarklet = await readFile(new URL("../bookmarklet.js", import.meta.url), "utf8");

if (!bookmarklet.startsWith("javascript:")) {
  throw new Error("bookmarklet.js must start with javascript:");
}

const source = bookmarklet.slice("javascript:".length).trim();

new Function(source);

console.log("bookmarklet syntax ok");
