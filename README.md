# FUSION

**IoT & Robotics Club · GLA University**

Official website for FUSION — the IoT & Robotics Club of GLA University, Mathura. Built and maintained by the FUSION team.

## Core Domains

- **IoT** — Connected devices, sensors, embedded systems, and automation
- **Robotics** — Autonomous systems, control loops, and mechanical engineering
- **UAVs** — Flight systems, aerial platforms, and unmanned vehicle engineering

## Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI framework |
| React Router 7 | Client-side routing |
| Framer Motion 12 | Animations |
| Tailwind CSS 4 | Utility layout |
| Vite 8 | Build tooling |
| Oxlint | Linting |

## Development

```bash
npm install
npm run dev
```

Runs at `http://localhost:5173`.

## Production Build

```bash
npm run build
```

Output written to `dist/`.

## Project Structure

```
src/
  pages/        # Route-level page components
  components/   # Shared components (Navbar, Footer, BackgroundEffect)
  data/         # Content data files (team, projects, timeline, blogs)

public/
  team/         # Team member photos
  fusion-logo.png
  fusion-hero-logo.png
```

## Content

All content is managed through `src/data/`:

| File | Content |
|---|---|
| `team.js` | Member roster — names, roles, photos, socials |
| `projects.js` | Project records — descriptions, categories, tags |
| `timeline.js` | Journey events — chronological club milestones |
| `blogs.js` | Blog post metadata and article content |

Add real content by updating these files. No page redesign is needed.
