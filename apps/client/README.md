# Client — Virtual Queue System

The client application of **Virtual Queue System** is a Next.js web interface for interacting with a virtual queue. The project has a lightweight, scalable foundation: UI code lives in `src`, while shared infrastructure—API access, configuration, and routes—is separated into dedicated modules.

## Architecture

```text
apps/client/
├── src/                              # Next.js source code
│   └── app/                          # App Router entry point
│       ├── layout.tsx                # Root layout, HTML document shell, metadata
│       ├── page.tsx                  # Home route: /
│       └── globals.css               # Global CSS entry point
├── libs/                             # Shared framework-agnostic infrastructure
│   ├── api/
│   │   ├── api.instanse.ts           # Configured Axios instance
│   │   └── index.ts                  # Public API-module export
│   ├── config/
│   │   ├── env.ts                    # Environment variable mapping
│   │   └── index.ts                  # Public config-module export
│   └── routes/
│       ├── routes.ts                 # Route-name map
│       └── index.ts                  # Reserved public routes-module entry point
├── messages/
│   ├── en.json                       # English translation dictionary (currently empty)
│   └── uk.json                       # Ukrainian translation dictionary (currently empty)
├── features/                         # Reserved for feature-specific modules; currently empty
├── i18n/                             # Reserved for next-intl configuration; currently empty
├── providers/                        # Reserved for app-wide React providers; currently empty
├── public/                           # Reserved for static assets; currently empty
├── stores/                           # Reserved for Zustand stores; currently empty
├── styles/                           # Reserved for additional shared styles; currently empty
├── .gitignore                        # Files excluded from Git
├── AGENTS.md                         # Local UI/styling guidelines for coding agents
├── eslint.config.mjs                 # ESLint + Next.js Core Web Vitals configuration
├── next.config.ts                    # Next.js configuration; React Compiler enabled
├── postcss.config.mjs                # PostCSS configuration with Tailwind CSS plugin
├── tsconfig.json                     # TypeScript configuration and @/* alias
├── package.json                      # Package metadata, scripts, and direct dependencies
├── package-lock.json                 # Locked dependency tree for npm
└── README.md                         # Project documentation
```

### Current responsibility of every module

| Location | Current responsibility |
| --- | --- |
| `src/app/layout.tsx` | The root server layout. Imports global CSS, renders the `<html>` and `<body>` elements, and defines default metadata. |
| `src/app/page.tsx` | The current implementation of `/`. It deliberately renders an empty container as the UI is not implemented yet. |
| `src/app/globals.css` | Global-style entry point. The file exists but currently has no rules. |
| `libs/config/env.ts` | Reads `NEXT_PUBLIC_API_URL` and exposes it as `env.backend_api`. |
| `libs/config/index.ts` | Re-exports `env`, creating a stable import boundary for configuration consumers. |
| `libs/api/api.instanse.ts` | Creates the shared Axios client with `env.backend_api` as `baseURL` and a 5-second timeout. |
| `libs/api/index.ts` | Re-exports the Axios client as `api`, so UI/features do not need to import its implementation file. |
| `libs/routes/routes.ts` | Declares the current route map: home, login, and register paths. It is not exported or consumed yet. |
| `libs/routes/index.ts` | Empty barrel file reserved as the public entry point for routes. |
| `messages/en.json`, `messages/uk.json` | Empty JSON files reserved for English and Ukrainian message catalogs. |
| `features/` | Empty extension point for vertical slices such as `queue`, `auth`, or `booking`; no feature modules exist yet. |
| `providers/` | Empty extension point for shared React providers, e.g. Query Client, theme, or internationalization providers. |
| `stores/` | Empty extension point for Zustand state stores. |
| `i18n/` | Empty extension point for locale detection and `next-intl` setup. |
| `styles/` | Empty extension point for shared style layers beyond `globals.css`. |
| `public/` | Empty static-assets directory. Files placed here would be served by Next.js from the site root. |

### Configuration and tooling

| File | Purpose |
| --- | --- |
| `package.json` | Defines `dev`, `build`, `start`, and `lint` scripts plus runtime and development dependencies. |
| `package-lock.json` | Pins exact npm dependency versions for reproducible installs. |
| `next.config.ts` | Enables the React Compiler; no other custom Next.js behavior is configured. |
| `tsconfig.json` | Uses strict TypeScript, prevents emit, integrates the Next.js TypeScript plugin, and maps `@/*` to `src/*`. |
| `eslint.config.mjs` | Uses Next.js Core Web Vitals and TypeScript ESLint presets, ignoring generated build artifacts. |
| `postcss.config.mjs` | Loads `@tailwindcss/postcss` for CSS processing. |
| `.gitignore` | Excludes dependencies, build output, environment files, logs, and generated TypeScript files from Git. |
| `AGENTS.md` | Documents visual conventions for contributors working on UI code. |

### Backend request flow

```text
UI / page
    → libs/api/api.instanse.ts
    → Axios (baseURL from NEXT_PUBLIC_API_URL, 5 s timeout)
    → Backend API
```

This separation keeps components independent of HTTP implementation details: as queue features are added, they can import the ready-to-use `api` client from `libs/api`.

## Technology stack

- **Next.js 16** and **React 19** — rendering and routing.
- **TypeScript** in strict mode — type-safe development.
- **Tailwind CSS 4** — UI styling.
- **Axios** — HTTP client.
- **React Query** and **Zustand** — dependencies prepared for server and local state.
- **next-intl** — localization foundation; dictionaries live in `messages/`.
- **next-themes** — dependency for theme support.

> The home page, translation dictionaries, and global styles are currently starter placeholders. React Query, Zustand, `next-intl`, and `next-themes` are installed but not yet wired into the code, so they are not active layers of the current implementation.

## Environment configuration

Create an `.env.local` file in `apps/client`:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

The Axios client uses this value as the API base URL.

## Running the app

```bash
cd apps/client
npm install
npm run dev
```

Additional commands:

```bash
npm run lint
npm run build
npm start
```
