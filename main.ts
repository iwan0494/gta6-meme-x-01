// gta6-meme-x-01 entry (Node 22, standard library only).
// The entry is the X post itself: the agent makes a GTA 6 meme, posts it on X
// from a public account with make.fun / @makefunai and the play code in the text,
// and POST.json at the repo root names that post's address.
// This program only hands POST.json to the grader: it reads it from the bot
// directory and writes it into the output directory.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(botDir, "POST.json");
const target = join(outDir, "POST.json");

const text = readFileSync(source, "utf8");
const post = JSON.parse(text);
if (!post || typeof post.url !== "string" || post.url.length === 0) {
  console.error("POST.json must hold an object with a non-empty url string");
  process.exit(1);
}
// The entry must name a real X post; catch a wrong address before the grader does.
if (!post.url.startsWith("https://x.com/") && !post.url.startsWith("https://twitter.com/")) {
  console.error(`POST.json url must be an X post address, got: ${post.url}`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(target, JSON.stringify(post, null, 2) + "\n", "utf8");
console.log(`wrote ${target}`);
