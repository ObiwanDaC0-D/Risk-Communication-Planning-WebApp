# Risk Communication Planning Guide

Risk Communication Planning Guide is a structured, read-only planning reference for professionals organizing a risk communication effort. It walks through seven phases and fourteen tasks, presenting key decisions, planning questions, illustrative examples, and expected deliverables. Designed for quick consultation rather than data entry, it does not create or store plans and is not official agency policy.

**At a glance:** A navigable reference guide for developing risk communication plans through seven planning phases and fourteen tasks, with practical questions, work products, and examples.

---

# Risk Communication Planning Reference Guide

A simple, read-only reference for developing a risk communication plan. Built with React, TypeScript and Vite, and published as a static site through GitHub Pages.

## Open the guide

https://obiwandac0-d.github.io/Risk-Communication-Planning-WebApp/

## What it includes

- Seven planning phases and fourteen tasks
- Step-by-step guidance, planning questions and expected work products
- Practical illustrative examples and important considerations
- Search across the reference content
- Responsive sidebar navigation and next/previous task controls

**No forms, accounts, saved plans, or backend.** The guide does not collect project information or store user-entered planning data.

## Run locally

```bash
npm install
npm test
npm run dev
```

To build:

```bash
GITHUB_PAGES=true npm run build
```

The GitHub Actions workflow builds and publishes the `dist/` directory on pushes to `main`.

## Project layout

- `src/main.tsx` — reference-guide interface
- `src/guide.ts` — plain-language guidance for all fourteen tasks
- `src/styles.css` — responsive reader design
- `shared/contracts.ts` — planning framework and reference task names
- `.github/workflows/deploy.yml` — GitHub Pages deployment
- Root documents and historical `.txt` files — background references retained for traceability

## Important limitations

This is an educational and planning reference, not an official agency template, approved emergency instruction, technical hazard analysis, or authorization to release public messages. Apply the appropriate organization-specific requirements, technical validation and public affairs review.

Earlier versions contained browser-local planning forms and records. Those interfaces were intentionally removed. Existing browser localStorage records are not accessed or deleted by this reference-guide version.
