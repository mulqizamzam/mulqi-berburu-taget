# Advanced Search Playbook

A search is a traceable sequence of hypotheses, queries, and source checks—not a pile of repeated keyword variants. Use the available search/browser tools, obey source access rules, and retain a concise query ledger whenever the user requests breadth or recency.

## 1. Build a search brief

Normalize the request into:

- Core role/function and work actually performed.
- Seniority, industry, employment type, and expected scope.
- Country/city, remote eligibility, relocation, time zone, and work authorization.
- Required skills/certifications and salary preference, if provided.
- Publication window and whether official-only sources are preferred.
- Candidate profile availability and desired output depth.

Do not assume that “remote” means worldwide. Check country eligibility, employment location, time zone, language, and contract type in each posting.

## 2. Expand the role responsibly

Use the role graph:

`title → duties → function → skills → industry → seniority → adjacent titles`

For each target title:

1. Preserve the exact title as one query.
2. Extract distinctive responsibilities and skills from the user's request or job family knowledge.
3. Generate close title variants (abbreviations, local spellings, common function names).
4. Generate adjacent roles only when responsibilities plausibly overlap; mark them as adjacent, not equivalent.
5. Add seniority terms, local-language terms, and industry context where useful.
6. Exclude misleading matches (e.g., same phrase, unrelated function) using negative terms only when the search engine supports them reliably.

Example: `Accounts Payable Manager` may justify searches for `AP Manager`, `P2P Manager`, or `Finance Operations Manager`, but compare actual scope; do not presume these titles are interchangeable.

## 3. Build a compact query set

Choose queries from relevant families rather than running every possible combination:

- **Direct:** `"Finance Manager" Jakarta vacancy`.
- **Employer-owned:** `site:company.example/careers "Finance Manager"` (replace with a verified domain).
- **Hiring language:** `"we are hiring" "Jakarta" finance` or Indonesian equivalents.
- **Role/skill:** `"accounts payable" manager Indonesia`.
- **Remote constraint:** `remote finance jobs "Indonesia" eligible`.
- **Public signal:** `company expansion Indonesia official announcement hiring`.
- **Alternative application:** `"talent pool" finance Indonesia` or `"open application" finance manager`.
- **Multilingual:** translate the role/function and recruitment terms for the target market, then validate title meaning on local employer/board pages.

Operators such as `site:`, quotes, minus terms, and date filters differ across search providers. Use only operators supported by the active engine; verify results rather than assuming the syntax worked.

## 4. Discover sources dynamically

Start with source families in `source-taxonomy.md`. Add sources based on:

- Target-country hiring practices and local language.
- Employer-owned career pages and their linked recruitment systems.
- Industry-specific boards, professional associations, university portals, and public institutions.
- Seniority (executive search firms for senior roles; graduate portals for early-career roles).
- Explicit constraints (remote-first, visa sponsorship, relocation, public-sector eligibility).

When a result points to a new domain, establish whether it is the employer, authorized applicant-tracking system, recruitment firm, aggregator, or repost. Do not assume a domain is official because its name resembles the employer.

## 5. Search social sources safely

Use public search or platform-supported discovery with combinations of role, employer, place, and hiring terms. Check author identity only through public, relevant evidence; avoid private data. Preserve the post URL, date as displayed, and whether the account is official/verified only when the source visibly supports that status. A recruiter post can be useful even if not verified, but its level must remain explicit.

## 6. Hidden opportunity signals

Search public company announcements for: facility opening, market entry, acquisition, investment, new business unit, product launch, hiring campaign, graduate intake, or leadership appointment. Use the event to generate job-family hypotheses. Then search separately for a posted vacancy. If none is found, report `Inferred hiring signal — no vacancy confirmed` and recommend a public verification route (careers page, official update, or user-approved inquiry).

Never convert a generic growth story or funding round into “the company is hiring.”

## 7. International and regional constraints

For each country, seek explicit evidence on:

- Applicant eligibility and required work authorization.
- Visa sponsorship and relocation support.
- Remote-work countries and employing entity.
- Language and time-zone requirements.
- Compensation currency, pay period, and location basis.

Use `Not stated` when the posting is silent. Do not infer sponsorship from an employer's global presence or from a remote label.

## 8. Freshness and source status

Capture publication date, update date, deadline, and last-checked time separately. Use a date only when source/tool evidence provides it. Search indexing dates may not equal publication dates; label them as search-engine observations, not source publication dates. Reopen the official application page before calling a vacancy active where page access allows.

## 9. Query ledger

Use this compact table for Deep/Global/Hidden hunts:

| Query | Tool/source | Checked (timestamp) | Result | Next action |
|---|---|---|---|---|
| Exact user search string | Search engine or named source | Actual observed time/time zone | Count or concise evidence; no result; access failure | Open original, broaden language, or stop |

Do not invent a search count. If a tool does not reveal when it ran, say `timestamp unavailable` rather than inventing one. Record failed queries when they affect coverage. Stop expanding when new queries only repeat already inspected sources or materially broaden away from the user's intent; explain the boundary.

## 10. Example query packs

### Finance Manager — Jakarta

- `"Finance Manager" Jakarta jobs`
- `"Finance Manager" Indonesia careers`
- `site:<verified-employer-domain>/careers "Finance Manager"`
- `"finance manager" rekrutmen Jakarta`
- Responsibility-based terms such as `financial planning`, `controlling`, `FP&A`, or `finance operations`, selected only if they match the target scope.

### Accounts Payable leadership — Indonesia

- `"Accounts Payable Manager" Indonesia`
- `"AP Manager" Jakarta recruitment`
- `"P2P Manager" Indonesia careers`
- `"procure to pay" manager Indonesia`
- `"shared services" finance manager Indonesia`

### German finance role

- Exact English title plus Germany and relevant city.
- Local equivalents such as `Finanzmanager` / `Finanzmanagerin` and `Stellenangebot`, checked against source language and duties.
- Employer's own `Karriere`/jobs page and local job boards.

### Companies expanding in Indonesia

- Search official company announcements for a named expansion event.
- Record original publication URL/date and exact event evidence.
- Search the company's own careers portal separately for active roles.
- Report potential job families as hypotheses only where no posting exists.
