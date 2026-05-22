# Personal Portfolio

A dark-mode, fully animated personal portfolio website built with React + Vite on the frontend and an Express API backend, backed by PostgreSQL.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, Vite, TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | Lucide React, React Icons |
| API Hooks | TanStack React Query (auto-generated via Orval) |
| Routing | Wouter |
| Backend | Node.js, Express 5, TypeScript |
| Validation | Zod |
| ORM | Drizzle ORM |
| Database | PostgreSQL |
| Package Manager | pnpm (workspaces monorepo) |
| Build | esbuild (API), Vite (frontend) |

---

## Project Structure

```
.
├── artifacts/
│   ├── portfolio/          # React + Vite frontend
│   └── api-server/         # Express backend
├── lib/
│   ├── db/                 # Drizzle schema + DB client
│   ├── api-spec/           # OpenAPI spec + Orval codegen config
│   ├── api-zod/            # Auto-generated Zod schemas
│   └── api-client-react/   # Auto-generated React Query hooks
├── scripts/                # Utility scripts
├── pnpm-workspace.yaml
└── README.md
```

---

## Features

- Hero section with animated profile image card
- About section with stats
- Interactive solar system Skills section — click a planet to see its tech stack
- Projects section with 3D flip cards on hover
- Resume timeline (work + education)
- Contact form wired to the backend API (messages saved to PostgreSQL)
- Footer with social links

---

## Getting Started (VS Code / Local)

### Prerequisites

- [Node.js 20+](https://nodejs.org/)
- [pnpm](https://pnpm.io/) — `npm install -g pnpm`
- A running [PostgreSQL](https://www.postgresql.org/) database

### 1. Install dependencies

```bash
pnpm install
```

### 2. Set environment variables

Copy the example file and fill in your values:

```bash
cp .env.example .env
```

### 3. Push the database schema

```bash
pnpm --filter @workspace/db run push
```

### 4. Run the API server

```bash
pnpm --filter @workspace/api-server run dev
```

### 5. Run the frontend (separate terminal)

```bash
pnpm --filter @workspace/portfolio run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## API Endpoints

| Method | Path | Description |
|---|---|---|
| GET | `/api/healthz` | Health check |
| POST | `/api/contact` | Submit contact form message |
| GET | `/api/contact/messages` | Retrieve all contact messages |

---

## Regenerate API Hooks (after spec changes)

```bash
pnpm --filter @workspace/api-spec run codegen
```

---

## Hosting Options

### Recommended — Free tiers available

| Platform | What it hosts | Notes |
|---|---|---|
| **Vercel** | Frontend (React/Vite) | Best DX, instant deploys from GitHub |
| **Railway** | Backend (Express) + PostgreSQL | One-click Postgres, easy env vars |
| **Render** | Both frontend and backend | Free tier available, auto-deploy |
| **Fly.io** | Backend (Docker) | Great for full-stack, generous free tier |
| **Netlify** | Frontend (static) | Fast CDN, form handling add-ons |
| **Supabase** | PostgreSQL only | Free managed Postgres, no backend needed |
| **Replit** | Full-stack (this project) | Deploy directly with one click |

### Quickest path
1. Push this repo to GitHub
2. Deploy frontend to **Vercel** (connect GitHub repo, set `VITE_API_BASE_URL`)
3. Deploy API + DB to **Railway** (add a PostgreSQL plugin, set `DATABASE_URL` and `SESSION_SECRET`)

---

## Environment Variables

See `.env.example` for all required variables.

---

## Safe to Delete

The following files/folders are **not part of the portfolio** and can be removed:

| Path | Why it's safe to delete |
|---|---|
| `artifacts/mockup-sandbox/` | Design canvas sandbox used during development only |
| `attached_assets/` | Uploaded screenshots used during AI-assisted development |
| `scripts/src/hello.ts` | Auto-generated placeholder script |
| `artifacts/api-server/dist/` | Build output — auto-regenerated on build |
| `lib/*/dist/` | Build outputs — auto-regenerated |
| `lib/*/tsconfig.tsbuildinfo` | TypeScript build cache — auto-regenerated |

> After deleting `artifacts/mockup-sandbox/`, also remove its entry from `pnpm-workspace.yaml` if present, and delete its workflow from `.replit`.
