CRUSH.md – Quickstart for agentic contributors

Build, run, test
- Install: npm ci (preferred) or npm install
- Start dev: npm start (runs CSS watcher + react-scripts start)
- Build prod: npm run build (build-css + build-js)
- Only JS build: npm run build-js
- Only CSS build: npm run build-css; watch: npm run watch-css
- Test (all): npm test
- Test watch by pattern: npm test -- --watch --env=jsdom --testPathPattern <regex>
- Test a single file: npm test -- --watchAll=false --env=jsdom src/path/Your.test.js
- Update snapshots: npm test -- -u
- Eject (avoid unless necessary): npm run eject

Lint/format
- This project uses create-react-app v1 (react-scripts 1.1.5) with no custom linter configured. If you add ESLint/Prettier, expose them via npm scripts and update this file.

Repo conventions
- Language: React 16, Redux 4, JS (no TypeScript)
- Styles: SCSS compiled with node-sass-chokidar; source in src/scss; output is emitted back into src so do not hand-edit generated CSS
- Routing: react-router-dom v4; dynamic breadcrumbs via react-breadcrumbs-dynamic
- State: co-locate actions/reducers under src/redux; keep action types in src/redux/actions/types.js
- Models: JSON data alongside minimal JS wrappers in src/models; keep data-driven additions as JSON when possible
- Imports: absolute from src is not configured; use relative imports; group external modules first, then internal modules; no default export re-exports unless existing pattern
- Naming: Components PascalCase; files match component names; non-components camelCase; constants UPPER_SNAKE_CASE
- Formatting: 2-space indent, semicolons present per current codebase; single quotes
- Error handling: favor graceful UI fallbacks; avoid console.log in production; prefer early returns; validate JSON shape before use
- Assets: place public assets in public/ when needed at runtime; otherwise import from src

CI/Deploy
- Deploy script: npm run deploy uses gh-pages to publish build/ to GitHub Pages. Ensure gh-pages is configured and remote permissions are available.

Editor/AI rules
- No Cursor or Copilot rule files were found (.cursor/rules, .cursorrules, .github/copilot-instructions.md). If added later, mirror key points here.
