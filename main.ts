// the-joke-about-the-demo-20261121-0551 entry (Node 22, standard library only).
// Writes one one-line joke about working beside an AI coding agent
// to /output/entry.txt.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The joke: the agent does everything in the demo except the one thing
// only the human in the room can do — explain what just happened.
// Revision: the punchline lands harder in the agent's own whispered voice,
// handing the mic back to the human mid-demo.
const JOKE =
  'During the demo, my AI agent wrote perfect code, passed every test, ' +
  "then whispered: 'Great — now can you explain to the audience what I just did?'";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE);
