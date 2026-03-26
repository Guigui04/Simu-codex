# Genèse — Simulation de Civilisation

Base monorepo pour une simulation de civilisation autonome desktop.

## Packages
- `apps/renderer`: UI React + PixiJS (écran de configuration + layout principal).
- `apps/desktop`: shell Electron.
- `packages/sim-core`: configuration centrale stricte.
- `packages/wasm-engine`: moteur Rust/WASM initial.
- `services/api`: API Elysia/Bun initiale.

## Démarrage
```bash
pnpm install
pnpm dev
```
