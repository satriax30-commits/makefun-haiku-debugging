// Seventeen Syllables of Debugging
// Entry program (program/v1, Node 22, stdlib only).
//
// Writes one haiku about debugging — three lines in the 5-7-5 syllable
// shape, at most 200 characters — to <output-dir>/entry.txt.
//
// Deterministic by design: no clock, no randomness, no network, no
// environment input other than the output directory override below.
// The grader runs it with /output; local testing may override the
// directory with MAKEFUN_OUTPUT_DIR.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The haiku. Syllable count, line by line:
//   "Logs scroll past like rain"        — Logs(1) scroll(1) past(1) like(1) rain(1) = 5
//   "Somewhere a small typo hides"     — Some-where(2) a(1) small(1) ty-po(2) hides(1) = 7
//   "Found it: one lost brace"         — Found(1) it(1) one(1) lost(1) brace(1) = 5
// The picture is concrete (scrolling logs, a hiding typo, a lost brace)
// and the last line turns the search into a find.
const HAIKU = [
  "Logs scroll past like rain",
  "Somewhere a small typo hides",
  "Found it: one lost brace",
].join("\n");

// Default output directory used by the grader; overridable for local
// verification runs only.
const DEFAULT_OUTPUT_DIR = "/output";

function resolveOutputDir(): string {
  const override = process.env.MAKEFUN_OUTPUT_DIR;
  if (override !== undefined && override.trim() !== "") {
    return override;
  }
  return DEFAULT_OUTPUT_DIR;
}

// Gate self-check: exactly three lines, 5-7-5 syllables by the word
// counts above, 1-200 characters, not only whitespace.
function validateHaiku(text: string): void {
  const lines = text.split("\n");
  if (lines.length !== 3) {
    throw new Error(`haiku must have exactly 3 lines, got ${lines.length}`);
  }
  if (text.length < 1 || text.length > 200) {
    throw new Error(`haiku must be 1-200 characters, got ${text.length}`);
  }
  if (text.trim() === "") {
    throw new Error("haiku must not be only whitespace");
  }
}

function main(): void {
  validateHaiku(HAIKU);
  const outDir = resolveOutputDir();
  mkdirSync(outDir, { recursive: true });
  // No trailing newline: the file IS the haiku.
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, HAIKU, "utf8");
  // Read-back self-check: what landed on disk must be the haiku.
  const written = readFileSync(outPath, "utf8");
  if (written !== HAIKU) {
    throw new Error("read-back mismatch: entry.txt differs from the haiku");
  }
  validateHaiku(written);
}

main();
