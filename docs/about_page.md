# About Page

## Status

✅ Completed

---

# Goal

Build the first complete page of the portfolio.

The About page introduces me, highlights my education, technical skills, current focus areas, and interests.

This page also established the content architecture that future pages will follow.

---

# Sections Built

The About page contains five sections.

## 1. Hero

Displays:

- Introduction
- Name
- Short biography
- Primary action button
- Resume button

---

## 2. Education

Displays:

- Degree
- Field of Study
- University
- Study Duration
- Expected Graduation
- CGPA

---

## 3. Skills

Skills are organized into categories.

Current categories:

- Languages
- Analytics
- Data Engineering
- Frontend

---

## 4. Focus Areas

Current focus areas:

- Data Engineering
- Data Analytics
- Business Intelligence
- Machine Learning

Each focus area contains:

- Title
- Description

---

## 5. Interests

Current interests include:

- Data
- Automation
- Open Source
- System Design

Each interest contains:

- Title
- Description

---

# Components Built

Shared components used:

- Container
- Section
- SectionTitle
- Cards

Navigation component:

- SidebarNavigation

Layout:

- PageContainer

---

# Refactoring

The About page went through several refactoring stages.

---

## Hero

### Before

Most text was hardcoded inside Hero.tsx.

### After

Hero content moved into:

```text
content/about.ts
```

Current structure:

```ts
hero
├── badge
├── greeting
├── name
├── role
├── location
├── bio
├── primaryButton
└── secondaryButton
```

Result:

The Hero component is now responsible only for rendering UI.

---

## Education

### Before

Education information was hardcoded.

### After

Education data moved into:

```ts
education
```

Current fields:

- degree
- field
- university
- duration
- graduation
- cgpa

Now all education content comes from the content layer.

---

## Focus Areas

### Before

```ts
focus: string[]
```

### After

```ts
focus: [
  {
    title,
    description
  }
]
```

This allows every focus area to contain richer information.

---

## Interests

### Before

```ts
interests: string[]
```

### After

```ts
interests: [
  {
    title,
    description
  }
]
```

The structure now matches the Focus Areas section.

---

# Content Architecture

The About page introduced a content-first approach.

Instead of storing information inside React components,

the application now stores data inside:

```text
content/about.ts
```

Components only display data.

This keeps UI and content independent.

---

# Type Improvements

Created:

```ts
ContentCard
```

Used by:

- Focus Areas
- Interests

This avoids duplicated interfaces.

---

# Files Updated

```text
content/

about.ts

types/

about.ts

components/

Hero.tsx

Education.tsx

Skills.tsx

FocusAreas.tsx

Interests.tsx

Cards.tsx

Container.tsx

Section.tsx

SectionTitle.tsx

SidebarNavigation.tsx
```

---

# Lessons Learned

Moving content outside the UI makes components significantly cleaner.

Structured objects are much more flexible than arrays of strings.

Reusable shared components reduce duplicated styling.

Building the page first and refactoring later proved to be a good approach.

---

# Outcome

The About page is now the foundation for every future page.

Future pages such as Projects, Experience, Certifications, and Contact will follow the same architecture.

---

# Personal Notes

## What went well

The separation between UI and content worked exactly as intended.

The About page became much easier to maintain after moving data into the content layer.

The shared component architecture reduced repeated code.

---

## Challenges

The largest refactor involved changing the data structure from simple strings to structured objects.

Several components required updates after the content model changed.

---

## If I build this again

I would design the content models before building the UI.

That would reduce later refactoring while keeping the same architecture.