# Frontend (React + Vite)

This repository contains the frontend of the application: a React app built with Vite that provides UI for creating and viewing posts, navigation, and shared components.

## Overview

- **Purpose:** Client-side UI for managing and displaying posts, with form handling, client-side routing, and API integration hooks.
- **Primary libraries:** React, Vite, React Router, react-hook-form, Axios, Tailwind (partial), Font Awesome.

## Features

- Pages for creating posts and listing content.
- Reusable `Navbar` component and shared UI primitives under `src/component` and `src/ui`.
- Client-side routing via `react-router-dom`.
- Form validation using `react-hook-form` and `zod` (resolver available).

## Project structure (important files/folders)

- `src/` — application source
  - `assets/` — images and static assets
  - `component/` — shared components (e.g., `Navbar`)
  - `ui/` — small UI helpers (e.g., `pagination.jsx`)
  - `useContext/` — React contexts (e.g., `UserContext.jsx`)
  - `pages/` — top-level page components (`Home`, `CreatePost`, `Layout`, etc.)
- `index.html`, `vite.config.js`, `package.json` — project config and scripts

## Routes (high level)

- `/` — home/listing page (`Home.jsx`)
- `/create` — create post page (`CreatePost.jsx`)
- other pages are in `src/pages` and routed by `src/main.jsx`/`Layout.jsx`.

## Environment variables

- Use Vite-style env vars prefixed with `VITE_` (example: `VITE_API_URL`).
- Add an `.env.example` file to document required variables (I can add this if you want).

## How to install dependencies

1. Install Node.js (recommended v18+).
2. From project root, run:

```bash
npm install
```

## How to run locally

- Start dev server:

```bash
npm run dev
```

- Open `http://localhost:5173` in your browser.

## Scripts (from `package.json`)

- `npm run dev` — run dev server
- `npm run build` — create a production build
- `npm run preview` — preview production build
- `npm run lint` — run ESLint

## Development notes

- If the app communicates with a backend API, configure `VITE_API_URL` and ensure CORS is allowed from the dev origin.
- Components are plain JSX; consider centralizing API calls in a small `api/` helper folder.

## Suggested improvements

- Add `.env.example` to document environment variables.
- Add unit and integration tests (Jest + React Testing Library).
- Migrate to TypeScript for stronger types and better editor support.
- Add Prettier and stricter ESLint rules; enable formatting/linting in CI.
- Add Storybook for component documentation and visual testing.

## Contributing

- Fork the repo, create a branch, and open a PR. Run `npm install` and `npm run dev` to test your changes locally.

If you'd like, I can add an `.env.example`, a minimal CI workflow, or convert key components to TypeScript — tell me which and I'll implement it.
# Frontend (React + Vite)

This repository is the frontend of the project — a React application scaffolded with Vite. It includes common UI components, routing, form handling, and Tailwind/CSS utilities to build the app's user interface.

## What is the project about

- **Purpose:** Provide the client-side UI for the application, including pages for creating posts, listing pages, and a reusable `Navbar` component.
- **Stack:** React, Vite, Tailwind (partial), React Router, react-hook-form, Axios.

## How to install dependencies

1. Make sure you have Node.js installed (recommended v18 or newer).
2. From the project root, install dependencies:

```bash
npm install
```

## How to run the project locally

- Start the development server:

```bash
npm run dev
```

- Open your browser at `http://localhost:5173` (Vite default).

Other useful scripts (from `package.json`):

- `npm run build` — create a production build
- `npm run preview` — preview the built production bundle locally
- `npm run lint` — run ESLint

## Additional notes & improvements

- **Environment variables:** If the app talks to a backend, add an `.env.example` documenting variables like `VITE_API_URL`.
- **Node engine:** Consider adding an `engines` field to `package.json` to lock Node versions.
- **TypeScript:** Migrate to TypeScript to improve type-safety and developer experience.
- **Tests & CI:** Add unit/integration tests (Jest + React Testing Library) and a CI workflow (GitHub Actions) to run tests and lint on push/PR.
- **Formatting:** Add Prettier and enforce formatting in CI for consistent style.
- **Docs & Storybook:** Add component documentation or Storybook for UI previewing.
- **Accessibility & Performance:** Add accessibility checks (axe) and run Lighthouse audits; fix issues reported.

If you'd like, I can add a `.env.example`, a small CI workflow, or a `package.json` engines field next — tell me which and I'll implement it.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
