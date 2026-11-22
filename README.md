# GTA 6 Meme — WASTED 13 Years Waiting

[![make.fun](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/vhigor/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/vhigor/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

A make.fun entry for **gta6-meme-x-01** — a GTA 6 meme for X. The joke is the thirteen-year wait since GTA V, told the way the games tell it: a Vice City loading screen that says WASTED, with make.fun's ghost leaning on a pink sports car, waiting with the rest of us.

The meme itself is `meme.png`. It is posted on X from a public account; `POST.json` names the post, and the house reads the post (first picture, then text) and hands it to the AI judge.

`main.ts` (Node 22, standard library only) copies `POST.json` from the repository root to `/output/POST.json`, where the gate reads it. It needs no network, no clock and no input, and writes the same bytes on every run.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.
