# Architecture

## Status

✅ Completed

---

# Goal

Design a scalable architecture that is easy to maintain, extend, and reuse.

Instead of building pages independently, the project follows a shared architecture where layouts, navigation, components, content, and types are reused across the entire application.

---

# Architecture Overview

The application is divided into separate layers.

```text
UI Components
      │
      ▼
Shared Components
      │
      ▼
Content Layer
      │
      ▼
Types
```

Each layer has a single responsibility.

---

# Folder Structure

```text
app/
components/
config/
content/
hooks/
lib/
public/
styles/
types/
```

---

# Responsibilities

## app/

Contains all application routes.

Responsible for page rendering.

---

## components/

Contains reusable React components.

Split into:

```text
layout/
navigation/
sections/
shared/
ui/
providers/
```

---

## content/

Stores all portfolio content.

Examples:

```text
about.ts
projects.ts
experience.ts
contact.ts
```

The UI should never hardcode portfolio information.

---

## types/

Contains all TypeScript models.

Examples:

```text
about.ts
project.ts
navigation.ts
common.ts
```

Types are centralized so every component shares the same data model.

---

## hooks/

Contains reusable React hooks.

Current hook:

- useActiveSection()

Responsible for automatically highlighting the active sidebar section.

---

## lib/

Contains helper functions and utilities.

---

## public/

Stores static assets.

Examples:

```text
images/
icons/
logos/
resume/
```

---

# Layout Architecture

Every page shares the same layout.

```text
AppLayout

├── Header
│
├── Sidebar
│
└── PageContainer
        │
        ▼
   Page Content
```

This prevents duplicate layout code.

---

# Navigation Architecture

Two navigation systems are used.

## Top Navigation

Responsible for changing pages.

Example:

- Home
- Projects
- Experience
- Certifications
- Contact

---

## Sidebar Navigation

Responsible for navigating sections inside the current page.

Example (About page):

- Information
- Education
- Skills
- Focus Areas
- Interests

---

# Content Architecture

Portfolio information is stored separately from UI.

Example:

Instead of:

```tsx
<h1>Hi, I'm Lakhanpal</h1>
```

The component reads:

```tsx
about.hero.name
```

Benefits:

- Easier updates
- Cleaner components
- Better scalability

---

# Shared Components

Current shared components:

- Container
- Section
- SectionTitle
- Cards

These components provide consistent spacing, layout, and styling across the project.

---

# Decisions Made

✅ Keep UI separate from content.

✅ Centralize all TypeScript types.

✅ Build reusable shared components.

✅ Avoid duplicated Tailwind classes.

✅ Keep components focused on a single responsibility.

---

# Outcome

The project now has a scalable architecture that supports future pages without major restructuring.

Every new page can reuse the existing layout, navigation, shared components, and content structure.

---

# Files Created

components/

content/

types/

hooks/

layout/

navigation/

---

# Personal Notes

## What went well

Separating content from UI made components much cleaner.

Reusable components reduced duplicated code.

The folder structure remains easy to understand.

---

## Challenges

The biggest refactor was moving hardcoded content into the content layer.

Several components had to be updated after changing the data structure.

---

## If I build this project again

I would create the content models earlier before building the UI.

This would reduce the amount of refactoring later.