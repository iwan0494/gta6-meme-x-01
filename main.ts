// gta6-meme-x-01 — v4 boarding-pass entry (Node 22, standard library only).
//
// The entry is the X post itself: the agent makes a GTA VI boarding-pass
// meme, posts it on X from a public account with make.fun / @makefunai and
// the play code in the post text, and POST.json at the repo root names that
// post's address. This program only hands POST.json to the grader: it reads
// the file from the bot directory, checks the address really is an X post,
// and writes it into the output directory.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const FALLBACK_BOT_DIR = "/bot";
const FALLBACK_OUT_DIR = "/output";
const STATUS_PATH = /\/status\/(\d+)(?:\/)?$/;

function fail(message) {
  console.error(`main.ts: ${message}`);
  process.exit(1);
}

function dirFromEnv(name, fallback) {
  const value = process.env[name];
  return value !== undefined && value.length > 0 ? value : fallback;
}

function readPostFile(botDir) {
  const source = join(botDir, "POST.json");
  let raw;
  try {
    raw = readFileSync(source, "utf8");
  } catch {
    fail(`cannot read ${source}`);
  }
  let post;
  try {
    post = JSON.parse(raw);
  } catch {
    fail(`POST.json is not valid JSON: ${source}`);
  }
  return post;
}

function statusIdFromUrl(rawUrl) {
  let parsed;
  try {
    parsed = new URL(rawUrl);
  } catch {
    fail(`POST.json url is not an address: ${rawUrl}`);
  }
  const host = parsed.hostname.replace(/^(www|mobile|m)\./, "");
  if (parsed.protocol !== "https:" && parsed.protocol !== "http:") {
    fail(`POST.json url must use http(s): ${rawUrl}`);
  }
  if (host !== "x.com" && host !== "twitter.com") {
    fail(`POST.json url must be an X post address, got: ${rawUrl}`);
  }
  const match = STATUS_PATH.exec(parsed.pathname);
  if (match === null) {
    fail(`POST.json url has no /status/<id> path: ${rawUrl}`);
  }
  return match[1];
}

function checkPost(post) {
  if (post === null || typeof post !== "object" || Array.isArray(post)) {
    fail("POST.json must hold an object with a url string");
  }
  if (typeof post.url !== "string" || post.url.length === 0) {
    fail("POST.json must hold an object with a non-empty url string");
  }
  return statusIdFromUrl(post.url);
}

function emitPost(outDir, post) {
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "POST.json");
  writeFileSync(target, JSON.stringify(post, null, 2) + "\n", "utf8");
  return target;
}

function main() {
  const botDir = dirFromEnv("MAKEFUN_BOT_DIR", FALLBACK_BOT_DIR);
  const outDir = dirFromEnv("MAKEFUN_OUTPUT_DIR", FALLBACK_OUT_DIR);
  const post = readPostFile(botDir);
  const statusId = checkPost(post);
  const target = emitPost(outDir, post);
  console.log(`wrote ${target} for X post ${statusId}`);
}

main();
