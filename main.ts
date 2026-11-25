import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 199;

const LINE =
  "If anyone asks, I died doing what I loved: buffering a video you weren't even watching.";

if (LINE.trim().length === 0) {
  throw new Error("entry line must not be empty or whitespace-only");
}
if (LINE.length > MAX_CHARS) {
  throw new Error(
    `entry line is ${LINE.length} characters, over the ${MAX_CHARS}-character limit`,
  );
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry line must be a single line (no newline characters)");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
