# Contributing

Use Node.js 24. Run `npm ci`, `npx playwright install chrome`, `npm run check`, `npm test`, `npm run build`, and `npm run audit` before submitting a change. Browser checks use Chrome; on Linux install its dependencies with `npx playwright install --with-deps chrome`.

Preserve the root and project-subpath builds, draft exclusion, keyboard navigation, reduced-motion behavior and no-JavaScript fallback. Add a focused regression when changing these behaviors. Do not commit `.artifacts`, `.work`, credentials, generated output or personal blog content.
