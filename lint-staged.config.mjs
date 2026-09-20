export default {
    "apps/client/**/*.{js,jsx,ts,tsx}": [
        "cd apps/client && npx eslint --fix",
        "cd apps/client && npx prettier --write",
    ],

    "apps/server/**/*.{js,ts}": [
        "cd apps/server && npx eslint --fix",
        "cd apps/server && npx prettier --write",
        () => "npm --prefix apps/server run typecheck",
        () => "npm --prefix apps/server test",
    ],
};