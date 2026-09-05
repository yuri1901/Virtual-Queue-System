<!-- BEGIN:nextjs-agent-rules -->

# UI Guidelines

This file defines the visual rules for the frontend UI.

The goal is to keep the application visually consistent, minimal, modern, and easy to scan.

These rules apply only to UI and styling.

Do not introduce business logic, API logic, state-management logic, or backend concerns while working on UI tasks unless explicitly requested.

---

## General Style

Use a clean, modern SaaS-style interface.

Prefer:

- minimal layouts;
- clear hierarchy;
- generous spacing;
- soft borders;
- subtle shadows;
- rounded corners;
- restrained use of color;
- high readability.

Avoid:

- excessive gradients;
- multiple accent colors;
- overly colorful dashboards;
- glassmorphism everywhere;
- heavy shadows;
- neon colors;
- unnecessary animations;
- decorative elements without purpose.

---

## Color System

Use a mostly neutral palette with one primary accent color.

Primary accent:

```text
Indigo / Violet
```

Recommended values:

```text
Primary:        #6366F1
Primary Hover:  #4F46E5
Primary Soft:   #EEF2FF
Primary Border: #C7D2FE
```

Neutral palette:

```text
Background:     #F8FAFC
Surface:        #FFFFFF
Surface Muted:  #F1F5F9

Text Primary:   #0F172A
Text Secondary: #475569
Text Muted:     #94A3B8

Border:         #E2E8F0
Border Strong:  #CBD5E1
```

Dark mode:

```text
Background:     #0B1120
Surface:        #111827
Surface Muted:  #1E293B

Text Primary:   #F8FAFC
Text Secondary: #CBD5E1
Text Muted:     #64748B

Border:         #1E293B
Border Strong:  #334155
```

Do not add additional main colors unless there is a semantic reason.

---

## Semantic Colors

Semantic colors are allowed only for statuses.

Use them sparingly.

```text
Success: #16A34A
Warning: #D97706
Error:   #DC2626
Info:    #2563EB
```

Do not use semantic colors as decorative accents.

For example:

Bad:

```text
green card
purple card
blue card
orange card
```

Good:

```text
neutral cards
+
one shared primary accent
+
semantic color only for status
```

---

## Tailwind

Prefer Tailwind utility classes.

Avoid creating large custom CSS files unless necessary.

Prefer reusable design tokens through CSS variables.

Example concept:

```text
--background
--foreground
--card
--muted
--border
--primary
--primary-foreground
--destructive
```

Components should use design tokens instead of hardcoded random colors.

Avoid:

```text
bg-[#7367F0]
text-[#19202A]
border-[#CED3DB]
```

when an existing token can be used.

---

## Theme

Support both:

```text
light
dark
system
```

Theme switching should only affect visual presentation.

Do not duplicate components for light and dark mode.

Prefer:

```text
bg-background
text-foreground
border-border
```

instead of manually defining different colors in every component.

---

## Typography

Use a simple sans-serif font.

Recommended:

```text
Inter
Geist
```

Use consistent hierarchy.

Suggested scale:

```text
Page title:
text-2xl / font-semibold

Section title:
text-lg / font-semibold

Card title:
text-base / font-medium

Body:
text-sm

Secondary text:
text-sm / text-muted-foreground

Small metadata:
text-xs / text-muted-foreground
```

Avoid excessive use of:

```text
font-bold
text-3xl+
uppercase
letter-spacing
```

---

## Layout

Prefer centered layouts with predictable max widths.

Examples:

```text
max-w-7xl
max-w-6xl
max-w-4xl
```

Main pages should have consistent horizontal padding.

Recommended:

```text
px-4
sm:px-6
lg:px-8
```

Use spacing consistently.

Prefer values from the Tailwind spacing system.

Common gaps:

```text
gap-2
gap-3
gap-4
gap-6
gap-8
```

Avoid random values unless required.

---

## Cards

Cards should remain visually simple.

Default card style:

```text
background: surface
border: subtle
border-radius: medium/large
shadow: none or very subtle
```

Prefer:

```text
rounded-xl
border
bg-card
```

Use shadows only when they help distinguish layers.

Do not make every element a card.

---

## Borders

Prefer borders over strong shadows.

Default:

```text
1px subtle border
```

Use stronger borders mainly for:

- active states;
- selected items;
- focus states;
- important controls.

---

## Border Radius

Use consistent radius values.

Recommended:

```text
Inputs:   rounded-lg
Buttons:  rounded-lg
Cards:    rounded-xl
Modals:   rounded-2xl
Avatars:  rounded-full
```

Avoid mixing many different radius values.

---

## Buttons

Primary button:

```text
primary background
white foreground
```

Secondary button:

```text
neutral background
border
```

Ghost button:

```text
transparent
subtle hover background
```

Destructive button:

```text
red only when action is destructive
```

Do not use multiple unrelated button colors.

Keep button heights consistent.

Recommended:

```text
h-9
h-10
```

---

## Inputs

Inputs should be simple and neutral.

Default style:

```text
neutral surface
subtle border
clear focus ring
consistent height
```

Focus state should use the primary accent color.

Avoid permanent bright borders.

---

## Tables

Tables should stay visually lightweight.

Prefer:

- subtle row separators;
- muted headers;
- minimal backgrounds;
- consistent alignment.

Avoid colorful cells unless representing semantic status.

---

## Status Badges

Use badges only for actual statuses.

Examples:

```text
Open
Closed
Waiting
Active
Completed
Cancelled
```

Keep badge backgrounds soft.

Example style:

```text
soft background
medium contrast text
small rounded pill
```

Avoid fully saturated badge backgrounds.

---

## Empty States

Empty states should include:

- short title;
- one-line explanation;
- optional primary action.

Do not over-design empty states.

Illustrations are optional.

---

## Loading States

Prefer:

```text
skeletons
```

for page content.

Use spinners only for short isolated actions.

Avoid full-page spinners when a skeleton is possible.

---

## Modals

Use modals only when the action requires temporary focus.

Do not use modals for normal navigation.

Keep modal content narrow and focused.

Recommended width:

```text
max-w-md
max-w-lg
```

---

## Navigation

Navigation should clearly show the active item.

Active state should use:

```text
primary soft background
primary text
```

Avoid adding large colored backgrounds to the entire sidebar.

Sidebar should remain mostly neutral.

---

## Icons

Use one icon library consistently.

Recommended:

```text
Lucide
```

Do not mix multiple icon styles.

Common icon sizes:

```text
16px
18px
20px
```

Avoid oversized icons unless used in an empty state.

---

## Responsive Design

Every new UI should work on:

```text
mobile
tablet
desktop
```

Start with mobile-friendly layouts.

Avoid fixed widths that break smaller screens.

Tables may become cards or horizontally scroll when necessary.

---

## Animations

Animations should be subtle and functional.

Allowed:

```text
fade
small translate
accordion expand
dropdown transition
hover transition
```

Typical duration:

```text
150ms–250ms
```

Avoid:

- bouncing elements;
- excessive spring animations;
- animated gradients;
- long transitions.

---

## Component Reuse

Before creating a new UI component, check whether an existing component can be reused.

Prefer shared components for:

```text
Button
Input
Card
Badge
Modal
Dropdown
Table
Tabs
Tooltip
Skeleton
```

Do not duplicate components that differ only slightly in styling.

---

## shadcn/ui

Prefer shadcn/ui components when an appropriate component already exists.

Customize them through:

- Tailwind classes;
- variants;
- design tokens.

Do not heavily rewrite shadcn internals without a reason.

---

## UI-Only Changes

When a task is explicitly UI-only:

Do not modify:

- API calls;
- backend contracts;
- business logic;
- validation rules;
- state management;
- authentication logic;
- database-related code;
- data transformations.

Only change what is required for presentation.

---

## Consistency Rule

When introducing a new component, first inspect nearby existing components.

Match existing:

- spacing;
- typography;
- border radius;
- colors;
- button sizes;
- icon sizes;
- card structure.

Do not introduce a new visual pattern when an existing one already solves the same problem.

---

## Final Visual Rule

The application should visually feel like one product.

The default visual language is:

```text
Neutral background
+
white/dark surfaces
+
subtle borders
+
indigo primary accent
+
semantic colors only for statuses
```

If a UI decision introduces another strong color without semantic meaning, prefer the primary accent or a neutral color instead.

<!-- END:nextjs-agent-rules -->
