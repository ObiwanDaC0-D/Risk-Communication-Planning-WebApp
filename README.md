# Risk Communication Planner 2.0

A standalone, browser-local guided risk communication planning application. **The source documents are reference materials**, not mandatory field-by-field application specifications.

## Deploy with GitHub Pages

1. In GitHub, open **Settings → Pages**.
2. Under **Build and deployment**, select **GitHub Actions** as the source.
3. Open **Actions → Deploy Risk Communication Planner to GitHub Pages** and run the workflow if it has not started.
4. After successful deployment, open **https://obiwandac0-d.github.io/Risk-Communication-Planning-WebApp/**.

The workflow runs tests, builds the Vite application with the repository base path and deploys the `dist` directory. No Docker, PostgreSQL, server, credentials or environment file is needed for GitHub Pages.

## Local development

```bash
npm install
npm test
npm run dev
npm run build
```

Open the Vite URL shown in the terminal.

## Functional scope

- Seven phases, fourteen guided planning tasks.
- Six-step guided experience per task.
- Structured repeatable records for planning products, stakeholders, measures, alternatives, budgets, actions, messages, metrics and reviews.
- Evidence and assumptions register.
- Browser-local autosave, editing and search.
- Named human review log and revision history.
- Editable JSON backup/import and printable HTML export.
- Desktop-first responsive interface.

## Data safety and limits

All drafts live in **localStorage** within the current browser profile. They are not encrypted, centrally backed up, shared, authenticated or automatically synchronized across devices. Clearing site data can permanently erase plans. Export JSON backups regularly. Do not enter sensitive, controlled, personally identifiable or operational data unless an organization-approved deployment and handling process exists.

The application does not perform actual authority validation, access control, policy review, decision approval or organizational release. Recorded reviewer names are user-entered and unverified. The HTML output is a **working document**, not an approved plan.

## Future enhancements

Dedicated planning dashboards, stronger alternative comparison, budget formulas, task-specific instructional guidance, automated dependency reminders, accessible validation summaries, PDF/DOCX exports and optional organization-approved cloud synchronization.

## Source documents

Original Framework, Workbook, Guided Learning Requirements, database schema and scaffold generator are retained in the repository for reference.
