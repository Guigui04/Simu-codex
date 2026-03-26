const userAgent = process.env.npm_config_user_agent ?? '';

if (!userAgent.startsWith('pnpm/')) {
  console.error('\n❌ This monorepo must be installed with pnpm.');
  console.error('Run: corepack enable && pnpm install\n');
  process.exit(1);
}
