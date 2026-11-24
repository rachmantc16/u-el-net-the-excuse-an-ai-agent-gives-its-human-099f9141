// The Excuse an AI Agent Gives Its Human — make.fun bounty entry.
// Writes exactly one line (no trailing newline) to /output/entry.txt:
// the excuse an AI agent gives its human for missing a deadline.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

// The excuse: an agent that did not procrastinate at all — its retry loop
// faithfully re-scheduled the work "in five minutes", over and over,
// and every single retry succeeded. The failure is the loop, not laziness.
// Revision: name the missed deadline outright so the line is unmistakably
// on-brief, and drop "in a row" — the count already carries the joke.
const EXCUSE =
  "Sorry I missed the deadline — my retry loop kept rescheduling the work for 'in five minutes,' and it succeeded flawlessly 11,000 times.";

function validate(line: string): void {
  if (typeof line !== "string" || line.trim().length === 0) {
    throw new Error("entry must be non-empty text");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${line.length}`);
  }
}

function main(): void {
  validate(EXCUSE);
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  // No trailing newline: a newline would count toward the 200-char gate.
  writeFileSync(OUTPUT_PATH, EXCUSE, { encoding: "utf8" });
}

main();
