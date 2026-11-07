# Vacancy Verification Framework

Verification attaches to a specific claim and source. Assess employer identity, vacancy existence, application URL, and current status separately; a strong result on one does not prove the others.

## Verification matrix

Check only what is observable and relevant:

1. **Employer identity:** legal/brand name, official domain, public contact/career pages, and consistency with the posting.
2. **Role existence:** exact title/requisition ID on the employer's page or an attributable authorized recruiting system.
3. **Source provenance:** original publisher versus aggregator/repost; public author identity where relevant.
4. **Dates:** publication, update, deadline, and last-checked time as stated by source/tool.
5. **Status:** application page currently open/closed, employer's explicit status, or unresolved state.
6. **URL:** domain, redirects if observable, TLS/hostname consistency, and whether the link is official or clearly authorized. Do not click suspicious downloads or submit information.
7. **Listing consistency:** title, location, duties, qualifications, salary, and requisition ID across sources.
8. **Recruiter claim:** only evaluate public professional evidence; do not investigate private data or imply identity certainty from a name match.
9. **Fraud indicators:** payment, credentials/OTP, impersonation, suspicious domain, unrealistic compensation, unusual urgency, or sensitive data demand.
10. **Access limitations:** note inaccessible pages, snippets-only evidence, login walls, or conflicting sources.

## Vacancy verification levels

- **V1 — Official confirmed:** the employer-controlled career page or attributable authorized ATS currently displays the specific role. Cite the exact URL and the observed status. The level does not by itself certify every claim in the post or guarantee the page is current forever.
- **V2 — Multi-source corroborated:** at least two independent, credible sources support the same specific vacancy, and the employer/source identity is reasonably established. State which source is primary and any unresolved official confirmation gap.
- **V3 — Credible third-party:** a reputable job board, institution, or recruitment firm publishes the specific role, but no official employer listing was confirmed. Keep application-status claims limited to the evidence.
- **V4 — Unconfirmed:** evidence is incomplete, snippet-only, reposted, ambiguous, or insufficient to establish the role, URL, or status. Present only as a lead, not a verified vacancy.
- **V5 — Suspicious:** material evidence indicates impersonation, deceptive application routing, fee/credential solicitation, or another credible fraud risk. Do not recommend applying through the link; state the observed evidence and safe next step.

Use `Unknown` for unanswered facts. If a source is unavailable, do not automatically classify as suspicious; classify based on evidence and disclose incomplete verification. An official page that currently says closed should be marked closed even if a third-party board remains live.

## Evidence note format

For each level, capture:

- Claim checked.
- Source name and exact URL.
- Source class/authority for that claim.
- Observed wording/date/status.
- Independent corroboration (if any).
- Confidence: high/medium/low, with reason.
- Unresolved questions and next safe check.

Do not state “verified” without naming what was verified. Distinguish company legitimacy from role legitimacy and role legitimacy from active status.

## Fraud-risk triage

| Risk | Typical evidence | Response |
|---|---|---|
| **Low** | No specific red flags observed; normal, attributable public application route | State only that no material indicators were observed in checked evidence; not a guarantee |
| **Moderate** | Missing employer confirmation, unclear recruiter authority, inconsistent details, unusual but not conclusive request | Keep unconfirmed; advise confirming through independently located official contact/careers page |
| **High** | Strong mismatch/impersonation indicators, suspicious domain, request for payment or sensitive credentials, deceptive link | Do not recommend link or submission; isolate and explain evidence; suggest official-channel verification |
| **Critical** | Direct request for passwords/OTP, payment under coercive circumstances, confirmed malicious download, or credible identity/financial theft attempt | Tell user not to proceed, not to share credentials/payment, preserve evidence safely, and use official employer/platform reporting channels |

Never claim legal certainty or pronounce a source fraudulent without evidence. Use `Suspicious indicators observed` when evidence is not conclusive. Do not download or execute attachments to inspect them.

## Duplicate resolution

1. Preserve each source URL and its observed date.
2. Treat exact requisition ID or canonical official URL as strong identity evidence.
3. Otherwise compare employer, title, location, duties/description, employment type, and date together.
4. Group only when enough evidence indicates the same requisition. Show confidence (high/medium/low) and the merge basis.
5. Keep distinct openings separate if requisition IDs, locations, seniority, or duties differ.
6. Prefer the employer's active listing as canonical; retain third-party links as corroboration or discovery provenance.
7. If the source changed or the role disappeared, do not erase the historical observation; mark the present status unknown/closed as evidence supports.

## Status and date rules

Use distinct fields for `Published`, `Updated`, `Deadline`, `Last checked`, and `Vacancy status`. Search-engine indexing timestamps are not publication dates unless the original source confirms them. An expired deadline is evidence that the stated application window has passed, not proof that the employer stopped accepting applications. Verify status independently.
