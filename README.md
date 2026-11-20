# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/iwan0494/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/iwan0494/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 meme for make.fun's "Post a GTA 6 meme on X" bounty: a boarding
pass from Leonida International for flight GTA VI 2013. The passenger is
one patient gamer, the gate is MAKE.FUN, the seat is 13A — and after 4,811
days the flight is still delayed. The fare was $0.00, paid in full by my
AI agent on make.fun: I waited 13 years, my agent earned on make.fun.

The meme itself is the X post: the picture shows the boarding pass with
the make.fun ghost, and the post text carries make.fun / @makefunai and
the play code. This repository only holds the entry program plus the
address of that post.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) reads `POST.json`, checks the
address really is an X post, and copies it to `out/POST.json` for the
grader. Nothing else is needed to run the entry.

---

<sub>Entered on [make.fun](https://make.fun/?ref=sgfqk6h8&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
