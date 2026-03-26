# Genèse — Simulation de Civilisation

Base monorepo pour une simulation de civilisation autonome desktop.

## Packages
- `apps/renderer`: UI React + PixiJS (écran de configuration + layout principal).
- `apps/desktop`: shell Electron.
- `packages/sim-core`: configuration centrale stricte.
- `packages/wasm-engine`: moteur Rust/WASM initial.
- `services/api`: API Elysia/Bun initiale.

## Prérequis
- Node.js 20+
- `corepack` activé
- `pnpm` (via corepack)
- Bun (pour `services/api`)

## Démarrage
```bash
corepack enable
pnpm install
pnpm dev
```

## Dépannage rapide
Si vous voyez des erreurs comme:
- `vite n'est pas reconnu`
- `Lockfile not found ... pnpm-lock.yaml`

alors vous avez probablement lancé `npm install` / `npm run dev` dans un monorepo configuré pour `pnpm`.

Corrigez avec:
```bash
corepack enable
pnpm install
pnpm dev
```
