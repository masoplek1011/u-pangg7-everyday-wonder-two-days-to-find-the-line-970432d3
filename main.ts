import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "For one second the dust in the afternoon sun had weather of its own, and the room I was standing in turned out to be a sky.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
