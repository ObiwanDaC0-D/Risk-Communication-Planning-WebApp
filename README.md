# Risk Communication Planner — Working Development Release 1.0

A React + TypeScript + Vite planning workspace with REST/JSON, PostgreSQL persistence, structured records, fourteen guided tasks, dependency prompts, human review records and audit history.

> **Security and deployment status:** Development-only. Identity is an explicitly local, single-user development mode. The OIDC/SSO integration boundary is deliberately fail-closed: production identity and authorization are NOT implemented. Do not deploy to an organizational network or enter sensitive or operational data. Human review records in this development environment are not organizational approvals or release authorizations.

## Run locally

1. Copy `.env.example` to `.env`.
2. Install Docker Compose.
3. Run `docker compose up --build`.
4. Open http://localhost:5173.
5. Create a fictional plan. Add structured records, work through guided tasks and record human review.
6. API health endpoint: http://localhost:3001/api/health.

The database is initialized from `database/001_init.sql` on first startup. To reset **development data only**, run `docker compose down -v` and restart. Schema evolution requires a real migration runner before enterprise use.

## Local development without Docker

Run PostgreSQL 16 and apply `database/001_init.sql`. Set `DATABASE_URL` and `IDENTITY_MODE=development`. Run `npm install`, `npm run server` in one terminal and `npm run dev` in another. Build with `npm run build`; run contract tests with `npm test`.

## Architecture

- `src/main.tsx`: guided workspace and structured task editor.
- `shared/contracts.ts`: shared Zod contracts, task sequence, field specifications, dependency map.
- `server/index.ts`: REST API, scoped plan membership checks, audit writes, review routes.
- `database/001_init.sql`: PostgreSQL relational records, tasks, links, reviews, audit and dependency prompts.
- `docker-compose.yml`: database, API and web services.

## API

- `GET /api/health`
- `GET /api/plans`; `POST /api/plans`
- `GET /api/plans/:id`
- `PUT /api/plans/:id/tasks/:task`
- `GET /api/plans/:id/records?kind=evidence&limit=50`
- `POST /api/plans/:id/records/:kind`; `PUT /api/plans/:id/records/:record`
- `POST /api/plans/:id/links`
- `POST /api/plans/:id/reviews`
- `POST /api/plans/:id/prompts/:prompt/resolve`
- `GET /api/plans/:id/export` (review-gated JSON package)

The plan and record contracts are in `shared/contracts.ts`. Errors return JSON. Plan membership is checked server-side. Development identity is sourced only from server environment, never a browser-selected user.

## Implemented

Plan creation, 14 persisted tasks in seven phases, six-part guided task experience, structured repeatable work-product entries, evidence records, editable records, plan-scoped link endpoint, advisory downstream dependency prompts, task status, human-review record, audit history, and controlled JSON package gate.

## Not yet complete

This is **not** the fully accepted enterprise application. Required follow-on work includes: OIDC verification/JWKS and organization-defined role permissions; first-class specialized tables for each record kind rather than generic typed JSON records; full Framework/Workbook field-by-field reconciliation; evidence link UI and richer traceability; alternatives baseline enforcement, screening and weighted evaluation; budget rollups and metric validation; task-specific readiness checks; robust transactionally consistent audit/dependency writes; human reviewer routing and release controls; PDF/DOCX templates; pagination across all registers; API integration and browser E2E tests; accessibility/security testing; pinned dependency lockfile and approved supply-chain review.

The supplied Framework, Workbook, requirements, schema and generator are retained unchanged at repository root. Their content and organization-specific authority requirements must be reconciled before use.

## Troubleshooting

If the API cannot reach PostgreSQL, inspect `docker compose logs db api`. If `/api/health` fails, confirm `.env` exists and database initialization completed. If port 5173 or 3001 is occupied, stop the conflicting process. No actual organization data should be used in development mode.
