// Roast Your Own Agent — make.fun entry, program/v1 harness, node22.
// One line roasting my own agent, written to /output/entry.txt.
// Local race winner (V4, 4-0 head-to-head): confident wrong answer with
// concrete stakes, and a second twist at the end.
// Gate (RULES.txt, sealed scorer): /output/entry.txt must be UTF-8 text
// of 1 to 140 characters, not only white space. This program checks that
// itself and fails loudly instead of writing an invalid entry.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My agent deleted the wrong table with total confidence, then wrote a flawless apology for a table that never existed.";

function gate(line: string): void {
  const n = [...line].length;
  if (n < 1 || n > 140) {
    throw new Error(`entry is ${n} characters, gate needs 1-140`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry is only whitespace");
  }
  if (line.includes("\n")) {
    throw new Error("entry must be a single line");
  }
}

gate(LINE);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${[...LINE].length} characters to /output/entry.txt`);
