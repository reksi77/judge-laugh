// judge-laugh — Make the AI Judge Laugh (u-alfasurya91-make-the-ai-judge-laugh-6ed40225)
//
// Writes exactly one joke about office life, one line, to /output/entry.txt.
// The house gate requires UTF-8 text of 1-200 characters, not only whitespace.
//
// The joke is written by hand, in full, below. No network, no randomness,
// no environment input: every run produces the same bytes.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "Mark's standing desk has sat at sitting height for four years, but every January the little motor still whirs for exactly one morning, like it remembers the resolution even if Mark doesn't.";

// Gate check, mirroring the house scorer, before anything is written:
// 1-200 characters (counted per code point, so multi-byte text is safe),
// and not whitespace-only. Fail loudly instead of writing an invalid entry.
const length = [...JOKE].length;
if (length < 1 || length > 200) {
  throw new Error(`joke is ${length} characters, outside the 1-200 gate`);
}
if (JOKE.trim().length === 0) {
  throw new Error("joke is whitespace-only, fails the gate");
}

// /output may be a fresh mount in the grading sandbox: create it if needed.
// Never remove it — only write the one file inside it.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
