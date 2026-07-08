# Mounting the potus-hex-sphere (Three.js) ball

The game currently ships with a **stand-in Ball3D**: a genuine
truncated icosahedron (12 pentagons + 20 hexagons) built in pure
canvas with quaternion spin, lambert shading, and backface culling.
Same silhouette as the real asset, zero dependencies.

It lives in `penalty.html`, section **2 · BALL3D** inside the
`/*PCG-CORE-BEGIN*/ … /*PCG-CORE-END*/` block.

## The interface (three calls)

Anything that implements these can replace the stand-in:

```js
Ball3D.draw(ctx, cx, cy, rPx)   // paint the ball at screen pos, radius in px
Ball3D.spinBy(axis, radians)    // rotate: axis = [x,y,z], render-space, y up, z toward viewer
Ball3D.reset()                  // orientation for a fresh kick / idle pose
```

The game calls `spinBy` every physics step:
- in flight: `axis [-1, spinSide*0.8, 0]`, rate `6 + speed*0.12` rad/s
  (forward tumble + side english)
- at rest (idle): slow `[0.15, 1, 0.1]` rotation, skipped under
  reduced-motion

## Recipe for the Three.js hex-sphere

1. Unzip `potus-hex-sphere` into this folder; load its bundled
   Three.js r137 (no CDN — PWA rule).
2. Create an **offscreen canvas** renderer, transparent background,
   sized ~2.2× the largest on-screen ball radius (rest ≈ 66 px →
   ~300 px square is plenty).
3. Keep the mesh in a `THREE.Group`; implement `spinBy` as
   `group.rotateOnWorldAxis(new THREE.Vector3(...axis), rad)`
   (note: render-space z toward viewer — flip z if the asset assumes
   the opposite).
4. Implement `draw` as
   `ctx.drawImage(offscreen, cx-rPx, cy-rPx, rPx*2, rPx*2)`.
5. Re-render the offscreen scene **only when the orientation changed**
   (derby lesson: don't run the full 3-D pipeline on frames where the
   ball is idle and reduced-motion is on).
6. Keep the contact shadow — the game draws it separately under the
   ball, so the asset itself should have no baked ground shadow.

Delete or ignore the canvas stand-in once mounted; nothing else
references its internals.
