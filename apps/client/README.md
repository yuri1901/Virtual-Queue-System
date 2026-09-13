# Client — Virtual Queue System

Next.js client for Virtual Queue System. The application uses a localized App Router and supports Ukrainian and English.

## Project structure

```text
apps/client/
├── src/
│   ├── app/[locale]/   # Localized routes and layout
│   ├── features/       # Feature components
│   ├── i18n/           # next-intl configuration and navigation
│   ├── libs/           # API, configuration, and routes
│   ├── messages/       # en/uk translations
│   ├── providers/      # Global React providers
│   └── proxy.ts        # Locale handling through next-intl
├── public/             # Static assets
├── package.json        # Dependencies and npm scripts
└── README.md
```

## Main modules

- `app/[locale]` — pages and root layout for localized routes.
- `i18n` and `messages` — locale routing and dictionaries for `uk` and `en`.
- `libs/api` — shared Axios client for backend API requests.
- `libs/config` — environment and metadata configuration.
- `providers` — TanStack Query provider and shared React providers.
- `features` — current and future feature components.

## Technology stack

- Next.js 16, React 19, TypeScript
- Tailwind CSS 4
- Axios
- TanStack React Query and Zustand
- next-intl and next-themes
- React Hook Form, Zod, Framer Motion, Lucide React, Sonner

## API

The application uses a shared Axios client available through `@/libs/api`. Its `baseURL` is configured with the `NEXT_PUBLIC_API_URL` environment variable, and its timeout is 5 seconds.

Create an `.env.local` file in `apps/client`:

```env
NEXT_PUBLIC_API_URL=''
```

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
