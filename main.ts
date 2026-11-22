// gta6-meme-x-01 entry: the program hands the house the X post that carries
// the meme. The post itself is the entry — the judge reads its first picture
// and its text straight from X — so this program only has to deliver the
// post's address to the gate: it reads POST.json from the repository root
// and writes it, byte for byte, into the output directory.
//
// Run it the way the grader does (Node 22, standard library only):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// It prints nothing on success, uses no network and no clock, and the two
// runs of an entry always write the same bytes.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const postPath = join(BOT_DIR, 'POST.json');
const outPath = join(OUTPUT_DIR, 'POST.json');

const raw = readFileSync(postPath, 'utf8');

let post: unknown;
try {
  post = JSON.parse(raw);
} catch (err) {
  console.error(`POST.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}

if (typeof post !== 'object' || post === null || typeof (post as { url?: unknown }).url !== 'string') {
  console.error('POST.json must be a JSON object with a string "url" field');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(outPath, raw);
