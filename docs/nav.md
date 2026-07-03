# Navigation

## Status

✅ Completed

---

# Goal

Build a navigation system that is simple, responsive, and easy to extend.

The portfolio uses two different navigation systems because they solve two different problems.

---

# Navigation System

The application contains:

1. Top Navigation
2. Sidebar Navigation

Both work independently.

---

# Top Navigation

## Purpose

Used for navigating between pages.

Current navigation items:

- Home
- Projects
- Experience
- Certifications
- Contact

---

## Components Built

- Logo
- DesktopNavigation
- MobileNavigation
- Header
- HeaderActions
- ThemeToggle

---

## Features

- Responsive
- Sticky header
- Active page highlighting
- Theme toggle
- Mobile menu

---

# Sidebar Navigation

## Purpose

Navigate between sections inside the current page.

Current About page sections:

- Information
- Education
- Skills
- Focus Areas
- Interests

---

## Features

- Sticky sidebar
- Active section highlighting
- Smooth scrolling
- Responsive layout
- Automatically updates while scrolling

---

# Active Section Detection

The sidebar automatically detects which section is currently visible.

Implemented using:

- IntersectionObserver
- useActiveSection hook

This removes the need for manually updating the active navigation item.

---

# Navigation Flow

```text
Header
│
├── Home
├── Projects
├── Experience
├── Certifications
└── Contact

↓

Current Page

↓

Sidebar

↓

Current Section
```

---

# Components Created

## Navigation Components

- Logo
- Header
- DesktopNavigation
- MobileNavigation
- HeaderActions
- ThemeToggle
- SidebarNavigation

---

# Decisions Made

### Why Two Navigation Systems?

Top navigation changes pages.

Sidebar navigation changes sections inside the current page.

Keeping these responsibilities separate makes navigation easier to understand and easier to scale.

---

### Why Sticky Navigation?

The header and sidebar remain visible while scrolling.

This improves usability because important navigation is always available.

---

### Why useActiveSection Hook?

Instead of manually tracking scroll position, the hook automatically updates the active sidebar item.

Benefits:

- Cleaner code
- Better user experience
- Easier maintenance

---

# Files Created

```text
components/navigation/

Logo.tsx
Header.tsx
DesktopNavigation.tsx
MobileNavigation.tsx
HeaderActions.tsx
ThemeToggle.tsx
SidebarNavigation.tsx

hooks/

useActiveSection.ts
```

---

# Outcome

The navigation system is complete.

It is responsive, reusable, and designed to support future pages without additional architectural changes.

---

# Personal Notes

## What went well

Using two navigation systems made the application much easier to organize.

The sidebar works independently from page routing.

The useActiveSection hook keeps the UI synchronized with scrolling automatically.

---

## Challenges

Implementing automatic active section detection required careful handling of scrolling behavior.

Responsive navigation also required separate desktop and mobile implementations.

---

## If I build this again

I would still use the same navigation architecture.

The separation between page navigation and section navigation keeps the project clean and scalable.

## As the recruiter interacts:

👋 When the page loads → the character waves.
👀 After 5 seconds of inactivity → looks toward your text.
👉 When the recruiter hovers "Projects" → points toward the button.
📜 While scrolling → walks a few steps or leans as if following the page.
😊 When reaching the Projects section → celebrates or gives a thumbs up.
💻 While idle → subtle breathing animation, blinking, shifting weight.
🌙 When dark mode is enabled → switches to a white outline version.

That creates personality without becoming distracting.
