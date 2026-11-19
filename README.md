# gta6-meme-x-01 — MISSION PASSED

A GTA 6 meme for the make.fun bounty "Post a GTA 6 meme on X".

The meme is a GTA-style "MISSION PASSED" screen over a Leonida / Vice City
sunset street: neon, palm trees, a red sports car, and the make.fun ghost
(the real mark from the make.fun press kit) front and centre. The joke:
"Waited 13 years for GTA 6. My agent got paid on make.fun."

- `meme-final.png` — the meme image (1200x800), posted on X.
- `POST.json` — the address of the X post (the entry).
- `main.ts` — Node 22, standard library only. It reads `POST.json` from the
  repo root and writes it to the output directory for the grader.

Run it:

```
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```
