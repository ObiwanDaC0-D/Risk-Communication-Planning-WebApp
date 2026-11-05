# Risk Communication Planner

A guided, interactive planning workspace for developing evidence-informed risk communication plans. Built with **React, TypeScript and Vite** and deployed as a **static site on GitHub Pages**.

**Live app (after Pages is enabled):** https://obiwandac0-d.github.io/Risk-Communication-Planning-WebApp/

## Getting started

Open the live app, create a plan and follow the seven-phase, fourteen-task workflow. Work products and evidence can be edited at any time. Review records document human judgment; they do **not** confer organizational approval.

The original planning documents in the repository are **reference materials**, not rigid software specifications.

## Features

- Guided seven-phase, fourteen-task planning journey
- Orient, Learn, Example, Build, Reflect and Review sections
- Structured planning records and evidence register
- Browser-local autosave and record search
- Human review and revision history
- Editable JSON backup/import and printable HTML export
- Responsive desktop/mobile layout

## Development

Requires Node.js 22 or later.

```bash
npm install
npm run dev
npm test
npm run build
```

There is **no server, database, Docker requirement or .env file**.

## GitHub Pages deployment

The workflow at `.github/workflows/deploy.yml` automatically tests, builds and deploys on pushes to `main`.

To enable deployment, go to **Settings → Pages → Build and deployment → GitHub Actions**. Monitor the **Actions** tab for build and deployment results.

The Vite configuration sets the GitHub Pages repository base path during the workflow build.

## Data and security

Drafts are saved in browser `localStorage`, **not** in GitHub or a central database. They are not encrypted, synchronized or backed up automatically. Clearing browser site data can delete drafts. Export a JSON backup regularly and keep it in an appropriate location.

This public static application does **not** implement authentication, multiuser permissions, official approval, controlled document release or secure records management. Do not enter sensitive, controlled or operational data without an approved environment and process. Reviewer names are entered manually and are not verified identities.

## Repository layout

| Location | Purpose |
| --- | --- |
| `src/main.tsx` | Application screens and guided planning |
| `src/storage.ts` | Browser-local persistence and export utilities |
| `src/styles.css` | Responsive interface styling |
| `shared/contracts.ts` | Planning tasks, phases, fields and data contracts |
| `src/*.test.ts`, `shared/*.test.ts` | Unit tests |
| `.github/workflows/deploy.yml` | GitHub Pages CI/CD |
| Root planning documents and `Instructions.txt` | Original reference materials |
| `Risk_Communication_Planner_Database_Schema.txt`, `Risk_Communication_Planner_Scaffold_Generator.txt`, `risk-communication-planner-file-manifest.txt` | **Historical references only** from the initial scaffold; not part of the live application |

## Current limitations and roadmap

The guided task editor currently uses general-purpose structured fields. Future releases can improve task-specific instruction, cross-record traceability, alternative comparisons, resource estimates, accessibility, and plan-quality checks. The historical schema and generator are retained solely for reference, not deployment.
