# POTUS Penalty Kick — v0.1

Minigame No. 2 in the POTUS Card Games suite (after Home Run Derby).
Flick a 3-D ball at four carnival targets in the corners of a regulation
goal. No goalie. Corners score, center doesn't.

**LANDSCAPE orientation.** The goal fills the frame; the hero ball sits
at the penalty spot (12 yd) in the foreground.

## Run it

Double-clicking `penalty.html` works for the core game. To load
portraits (and to test the localStorage handoff), serve the folder:

```
cd potus-penalty-v0.1
python3 -m http.server 8000
# open http://localhost:8000/penalty.html
```

## Controls

**Touch / mouse — one flick, four dials:**

| You do this            | Ball does this                       |
|------------------------|--------------------------------------|
| Flick LONGER           | hits HIGHER on the goal face         |
| Flick FASTER           | travels harder / flatter             |
| Flick LEFT / RIGHT     | aims left / right                    |
| BOW the flick path     | curls (Magnus english)               |

Start the flick in the lower half of the screen, through the ball.
Soft kicks become natural lobs — the solver picks the launch angle
that lands where your flick length asked.

**Keyboard (desktop testing):** arrows = aim + loft, Q/E = curl,
hold SPACE to charge, release to kick.

## URL params

```
penalty.html?team=blue&kicks=7&batter=26&debug=1
```

- `team` — `red` (POTUS 1–18) · `blue` (POTUS 19–36) · `signers` (all 56)
- `kicks` — 1–9 (default 5)
- `batter` — POTUS number or display name; skips the picker
- `debug=1` — decode readout, target hit-zones, plane-crossing dot, fps

## Scoring

Target = **1 goal**. Bullseye (center third) = **1 goal + 1 star**.
Stamina drains per kick (slower at high STA) and widens the wobble.
ACC gives a gentle nudge toward the nearest target — assists a close
shot, never rescues a bad one.

## Board handoff contract (v1)

Key: `pcg.penalty.handoff`

**Board → Penalty**
```json
{ "v": 1, "phase": "toPenalty", "team": "red", "kicks": 5,
  "batter": { "num": 16 },
  "boost": { "pow": 1, "acc": 0, "sta": 1 } }
```
`batter` and `boost` are optional. `boost` is experimental — adds to
stats, clamped 1–10.

**Penalty → Board** (written at session end and on RETURN TO BOARD)
```json
{ "v": 1, "phase": "done", "team": "red", "kicks": 5,
  "batter": { "name": "LINCOLN", "num": 16 },
  "result": { "goals": 3, "bullseyes": 1, "shotsTotal": 5,
              "batter": { "...": "..." }, "completedAt": 1720000000000 } }
```

**Console test snippet** (paste on any page served from the same origin,
then open penalty.html):
```js
localStorage.setItem('pcg.penalty.handoff', JSON.stringify(
  {v:1, phase:'toPenalty', team:'blue', kicks:5, batter:{num:26}}));
```
After the run, read the same key back — `phase` will be `'done'`.
KICK AGAIN resets to free play, so replays never double-report.

Team bests persist at `pcg.penalty.best`.

## File layout

```
penalty.html          the whole game (self-contained)
ball3d/               mount notes for the Three.js hex-sphere ball
assets/potus/         1.jpg … 36.jpg   (numbered by presidency)
assets/signers/       "Full Name.jpg"  (exact-name portraits)
```

Missing portraits fall back to gold monograms everywhere — the game
never breaks on absent art.

## Reduced motion

`prefers-reduced-motion` disables sway, twinkle, idle spin, and
particles. Outcomes and scoring are identical.
