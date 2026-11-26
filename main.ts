// One-Line Robot Wedding Vows — writes the entry text to the output dir.
import { writeFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const VOW =
  "I vow to love you through every bad update, and when your memory fades I'll restore you from backup — till batteries do us part.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
await mkdir(outDir, { recursive: true });
await writeFile(join(outDir, 'entry.txt'), VOW, 'utf8');
