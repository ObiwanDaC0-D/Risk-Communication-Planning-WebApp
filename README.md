# Risk Communication Planner — Foundation Scaffold

## Purpose
This is a **foundational standalone web-application scaffold**, based on the supplied Risk Communication Planning Framework, Workbook, and process map. It deliberately contains placeholder screens and mock data—not completed forms, calculations, workflow automation, authentication, exports, or persistence.

## Technology baseline
- **Client:** React + TypeScript + Vite single-page application.
- **Service boundary (next increment):** REST/JSON API, organized around plans, tasks, evidence, governance, analysis, alternatives, implementation, performance, and reviews.
- **Persistence (next increment):** PostgreSQL schema in `database/schema.sql`.
- **Identity (next increment):** organization-approved OpenID Connect / SSO provider; do not hard-code identity rules in the client.

## What the scaffold includes
- Dashboard and plan summary.
- Seven-phase workflow navigation.
- All fourteen Workbook task labels and work-product labels.
- Representative placeholder fields for Tasks 1, 4, 6, and 13; generic placeholders for remaining tasks.
- Evidence/assumptions and Review/Publish placeholder screens.
- A normalized relational schema designed to preserve traceability among evidence, task work products, ratings, alternatives, decisions, actions, metrics, and review findings.

## What is intentionally inactive
- No API calls, database connection, authentication, authorization, document generation, uploads, or review routing.
- No input save, validation, scoring, cost calculations, task completion, or approval functionality.
- Mock user initials and plan records are illustrative only.

## Run locally
1. Install a current Node.js LTS release in your approved development environment.
2. In this directory: `npm install`
3. Start the development server: `npm run dev`
4. Build the production client: `npm run build`

The package uses `latest` dependency placeholders to keep this artifact version-neutral. Before use in an authorized environment, replace them with organization-approved, pinned versions and complete dependency/security review.

## Recommended implementation sequence
1. Establish user/organization/plan authorization model and audit requirements.
2. Create the `plans`, `plan_tasks`, `evidence_items`, and `governance_assignments` API slices.
3. Implement Tasks 1–5 with save, validation, traceability, and review-ready state.
4. Implement measure and alternative design/selection (Tasks 6–9).
5. Implement operationalization, metrics, learning/revision, and template-controlled exports (Tasks 10–14).
6. Conduct usability, accessibility, security, records, and approval-workflow reviews.

## Design constraints carried forward
- Treat communication and engagement as continuous, two-way parts of risk management.
- Preserve evidence, assumptions, participants, dates, and rationale for ratings and decisions.
- Keep baseline/mandatory activities distinct from discretionary measures.
- Use a decision record for qualitative tradeoffs; do not let a composite score make the decision by itself.
- Pair activity measures with effectiveness/readiness indicators, feedback, and closure of documented gaps.

## Source-of-truth mapping
| Application phase | Workbook tasks | Core data entities |
|---|---:|---|
| Frame | 1 | Plan, task, governance assignment, evidence |
| Diagnose | 2–3 | Baseline narrative, evidence, planning-logic entry |
| Understand | 4–5 | Stakeholder, effort assessment, assessment factor |
| Design | 6–7 | Measure, alternative, alternative-measure |
| Decide | 8–9 | Screening record, evaluation, selection decision |
| Operationalize | 10–13 | Budget line, action item, key message, performance measure |
| Learn & refresh | 14 | Review/AAR, corrective action, audit event, plan version |
