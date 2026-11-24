import { writeFileSync } from "node:fs";
import { join } from "node:path";

// Make the AI Judge Laugh: the Office Joke Open
// Entry: one single-line office joke, at most 200 characters.
// Judge brief: specific office detail, a turn that pays off in the
// last few words, fresh, and tight enough to read in one pass.
const JOKE =
  "My out-of-office says I'm on annual leave, but my calendar just invited me to a meeting — apparently I'm haunting the office now, and HR still wants my status update.";

// Gate guard: the sealed scorer requires UTF-8 text of 1 to 200
// characters, not only white space, on a single line.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  throw new Error(`Entry is ${JOKE.length} characters; gate requires 1-200.`);
}
if (JOKE.includes("\n")) {
  throw new Error("Entry must be a single line.");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set.");
}

writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
