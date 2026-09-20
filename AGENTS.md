# AGENTS.md

## Repository Scope

These instructions apply to the entire repository.

This is a monorepo with:

- `apps/client` — frontend application.
- `apps/server` — backend application.

For frontend work under `apps/client`, also read and follow `apps/client/AGENTS.md` before editing files there.

## Working Agreements

- Use `npm`; do not introduce `pnpm` or `yarn`.
- Keep changes focused on the requested task.
- Do not perform unrelated refactors or cleanup.
- Inspect nearby code and existing patterns before introducing a new pattern.
- Prefer modifying existing abstractions over creating near-duplicates.
- Do not add production dependencies unless they are required by the task.
- Keep dependency changes scoped to the package that uses them.
- Do not modify lockfiles unless dependency metadata actually changed.
- Preserve existing public APIs and behavior unless the task explicitly requires a change.
- Do not change backend contracts, database behavior, authentication, or business logic during UI-only work.

## Validation

Run the relevant checks after making changes.

Frontend:

```sh
npm --prefix apps/client run lint
```

Backend:

```sh
npm --prefix apps/server run typecheck
npm --prefix apps/server test
```

Repository pre-commit checks are managed by Husky and lint-staged.

- Do not bypass hooks with `--no-verify`.
- Fix lint, formatting, typecheck, or test failures caused by your changes.
- If a check cannot run because of a pre-existing or environment issue, report that explicitly instead of hiding it.

## Git & Commit Rules

Do not create, amend, reset, rebase, or push commits unless explicitly requested.

When a commit is explicitly requested:

- Use Conventional Commits.
- Allowed types:
  - `feat`
  - `fix`
  - `chore`
  - `refactor`
- Format: `type: short description`
- Keep the subject short, specific, and lowercase where natural.
- Do not use unsupported commit types.
- Do not bypass Git hooks.
- Do not amend or rewrite existing commits unless explicitly requested.

Examples:

```text
feat: add dropdown component
fix: correct select styles
chore: update dependencies
refactor: simplify auth layout
```

## Change Safety

- Never delete user data, local databases, containers, volumes, or generated assets unless explicitly requested.
- Avoid destructive Git commands unless explicitly requested.
- Do not overwrite user-authored changes unrelated to the task.
- If the working tree contains unrelated changes, leave them untouched.
- Prefer the smallest safe change that fully solves the requested task.

## Final Response

When finishing a coding task:

- Summarize what changed.
- List the checks that were actually run and whether they passed.
- Mention any remaining warnings, failures, or assumptions.
- Do not claim a check passed unless it was actually run.
