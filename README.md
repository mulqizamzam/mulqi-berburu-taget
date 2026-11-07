# Mulqi Berburu Target

Native DeepSeek Harness skill bundle for **evidence-led public-source
hiring intelligence**. One bundled skill — `mulqi-berburu-target` —
guides the agent through a disciplined research workflow: discover,
investigate, verify, score, and report. Search wide, verify hard, act
with evidence.

This bundle is a skill and reference package, not a job aggregator,
live vacancy database, deployed search service, scraper, or
application bot. Live results depend on the search and page-reading
tools available in the host session.

## What it does

The skill runs a 13-phase workflow — interpret, plan, discover,
expand, search, extract, normalize, deduplicate, verify, match, score,
report, act — across twelve hunt modes:

| Mode | Use |
|---|---|
| Quick Hunt | Focused search for one role and location |
| Deep Hunt | Cross-category research with query/source coverage |
| Global Hunt | Multiple countries, work authorization, language, currency, time zones |
| Executive Hunt | Senior leadership roles and executive-search sources |
| Remote Hunt | Remote roles, per-posting country eligibility |
| Hidden Hunt | Public business/hiring signals, reported as leads — never as vacancies |
| Corporate Hunt | Target-employer careers/news investigation |
| CV Match Hunt | Match candidate evidence to confirmed or clearly labeled roles |
| Industry Hunt | Industry-specific title, skills, and source vocabulary |
| Verification Hunt | Audit supplied postings and URLs |
| Fresh Job Hunt | Recent-publication priority, active status checked separately |
| Strategic Career Hunt | Career value comparison and next steps |

Supporting material shipped with the skill:

- **Source taxonomy** — global, Indonesian, corporate, social, and
  institutional source families.
- **Search playbook** — query expansion, multilingual packs, coverage ledger.
- **Verification framework** — V1–V5 levels, fraud-signal triage, duplicate resolution.
- **Scoring model** — separate opportunity-quality, candidate-match, and strategic-value scores.
- **Report templates** — compact vacancy record and full intelligence report.
- **Ethical OSINT policy** — public-only boundaries, privacy, fairness, prompt-injection handling.
- **Tool-compatibility guide** — available-tool behavior and known limits.
- **Evaluation cases** — 12 scenario definitions (case, prompt, graders) for reviewing skill behavior.

## Operating contract (highlights)

- Reports only what the available tools and accessible public sources support.
- Three distinct states: **published vacancy**, **unconfirmed vacancy lead**, **inferred hiring signal**.
- Every material claim carries a source URL and a note on what that source actually proves.
- `Not disclosed` for unstated fields, `Unknown` for unverifiable facts — never inferred.
- No bypassing sign-in, paywalls, CAPTCHA, rate limits, or platform controls.
- No external actions (applying, contacting, uploading a CV) without a separate, explicit instruction for that exact action.

## Requirements

- DeepSeek Harness **0.2.1-rc.2** (exact `engines.dsh` pin).
- Node `^22.19.0 || >=24.0.0`.
- No runtime or peer dependencies; no build step.

## Install

**From GitHub (recommended):**

```bash
dsh plugin --profile <nama-profil> add github:mulqizamzam/mulqi-berburu-taget#main
```

**From a local directory:**

```bash
dsh plugin --profile <nama-profil> add /path/ke/mulqi-berburu-target
```

After install, the bundle appears in the profile's bundle inventory.
New bundles may activate via HMR without a restart; replacing an
already-installed package requires a host restart to load the fresh
module generation.

## Docs

- [Bahasa Indonesia](README-ID.md) — dokumentasi lengkap dalam bahasa Indonesia.
- [中文](README-ZH.md) — 完整中文文档。

## Use

The skill is routed automatically from the session skill catalog when
a request matches job searching, hiring-signal research, vacancy
verification, scam-risk review, opportunity comparison, or
CV-to-role matching. Direct invocation is also supported
(`mulqi-berburu-target`). No configuration surface is exposed.

## Real-world examples

Each prompt below is a complete, copy-paste-ready input. The skill
selects the narrowest matching mode automatically; name a mode
explicitly to override.

### 1. Targeted job search (Quick Hunt)

```text
Find Senior DevOps Engineer roles in Singapore posted in the last
14 days. Prioritize official company career pages. Show the source
URL, publication date, and active status for each result.
```

**What to expect:** A compact table of confirmed vacancies with
source URLs, publication dates, and verification level (V1–V5).
`Not disclosed` / `Unknown` where data is missing — no invented
salaries or deadlines.

### 2. Verify a specific posting (Verification Hunt)

```text
Check whether this job posting is authentic:
https://careers.example.com/jobs/12345
Verify: is the employer real, is the application URL official,
is the listing currently active, and are there any fraud indicators?
```

**What to expect:** Per-field verification (employer, listing, URL,
status) each with evidence and confidence level. Fraud signals
isolated in a risk section — never recommended as a valid vacancy.

### 3. Research employer hiring signals (Hidden Hunt)

```text
Research whether Acme Corp is expanding into Southeast Asia and
likely hiring. Use only public sources (news, filings, careers page
activity). Separate confirmed vacancies from inferred signals.
Do not report hypotheses as openings.
```

**What to expect:** Labeled hiring signals with source URL, date,
and a short evidence note. Each item marked
**Inferred hiring signal — no vacancy confirmed** unless a
separate current posting is found.

### 4. Match your CV to roles (CV Match Hunt)

```text
Compare this CV against the three roles you found:
[paste CV content]
Show evidence for the match score, list requirements the CV
covers and gaps, and flag missing fields. Do not submit anything.
```

**What to expect:** Per-role candidate-match score with factors,
weights, and evidence. `Not scored` when candidate data is
insufficient. No application is submitted without explicit
instruction.

### 5. Global remote search with constraints (Global Hunt)

```text
Search for remote Product Manager roles that explicitly accept
applicants based in Indonesia. Check work authorization, language
requirements, and time-zone overlap per posting. Currency and
salary where stated — no conversion without a sourced rate.
```

**What to expect:** Per-posting country-eligibility check, language
and timezone constraints, salary as stated with currency.
Unverifiable fields marked `Unknown`.

### 6. Scam-risk review (Verification Hunt)

```text
This job posting asks for an upfront training fee of $500 before
onboarding. Assess the scam risk level and what a legitimate
employer would do differently. Do not click the link.
```

**What to expect:** Risk level (Low/Moderate/High/Critical) with
concrete evidence. Safe verification steps. No instruction to
interact with the risky posting.

## Troubleshooting

- **Bundle skipped at boot** — the host version must be exactly
  0.2.1-rc.2; any other release refuses the `engines.dsh` pin
  (check `skippedBundles` diagnostics, or grant an exact-version
  exemption with `dsh plugin --profile <nama> allow-version`).
- **Skill not in the catalog** — confirm the host composition
  includes the skill services (`dsh-skill`, `dsh-tool-skill`) and
  restart the host after install.
- **No live results** — the skill is instruction-level: without
  search/page-reading tools in the session it delivers a ready-to-run
  query plan instead of results. That is expected behavior, not a bug.

## License

MIT. See `LICENSE`.
