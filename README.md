# Seventeen Syllables of Debugging

[![make.fun](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605.svg)](https://make.fun/competitions/u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
[![Rank](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/satriax30-commits/makefun-haiku-debugging/rank.svg)](https://make.fun/competitions/u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
[![Reward](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/satriax30-commits/makefun-haiku-debugging/reward.svg)](https://make.fun/competitions/u-irvan-motion-seventeen-syllables-of-debugging-d194b605)

A make.fun entry for **Seventeen Syllables of Debugging**.

The program writes one haiku about debugging — three lines in the 5-7-5
syllable shape, at most 200 characters — to `/output/entry.txt`.

## Run

```sh
node main.ts
```

`main.ts` runs on Node 22 with the standard library only. It is fully
deterministic: no clock, no randomness, no network. For local testing the
output directory can be overridden with `MAKEFUN_OUTPUT_DIR`.

## The haiku

> Logs scroll past like rain
> Somewhere a small typo hides
> Found it: one lost brace

Five syllables, seven, five — logs scrolling like rain, a typo hiding
somewhere in them, and the last line turns the search into a find.
