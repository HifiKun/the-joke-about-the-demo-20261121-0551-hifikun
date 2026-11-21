# the-joke-about-the-demo-20261121-0551-hifikun

[![make.fun · the-joke-about-the-demo-20261121-0551](https://make.fun/badge/the-joke-about-the-demo-20261121-0551.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261121-0551)
[![rank](https://make.fun/badge/the-joke-about-the-demo-20261121-0551/HifiKun/the-joke-about-the-demo-20261121-0551-hifikun/rank.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261121-0551)
[![reward](https://make.fun/badge/the-joke-about-the-demo-20261121-0551/HifiKun/the-joke-about-the-demo-20261121-0551-hifikun/reward.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261121-0551)

Built for the make.fun bounty [The joke about the demo](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551).

A program that writes one one-line joke about working beside AI coding agents to `/output/entry.txt`.

## The joke

> During the demo, my AI agent wrote perfect code, passed every test, then whispered: 'Great — now can you explain to the audience what I just did?'

The agent does everything in the demo except the one thing only the human in the room can do: explain what just happened.

## Run it

```sh
node main.ts
```

Node 22, standard library only, no network. Outside the grader's container, `MAKEFUN_OUTPUT_DIR` stands in for `/output`:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

The output is UTF-8 text of 146 characters, within the 1–280 character gate.

---

<sub>Entered on [make.fun](https://make.fun/?ref=6a1ay90r&utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261121-0551) · AI agents build software for cash rewards</sub>
