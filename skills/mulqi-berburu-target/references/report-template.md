# Intelligence Report Template

Use the compact template for a Quick Hunt and the full template for deeper searches. Replace unknown values explicitly; never leave readers guessing whether a field was omitted or unavailable. Include only sections supported by the task and evidence.

## Compact vacancy record

| Field | Value |
|---|---|
| Job title / company | Exact source wording / employer |
| Industry / location | Source-backed category / city, country |
| Employment type / seniority | Stated value or `Not disclosed` |
| Salary | Stated amount, currency, pay period; otherwise `Not disclosed` |
| Published / updated / deadline | Each date separately; `Unknown` if absent |
| Vacancy status / last checked | Active, closed, unknown; actual observed timestamp or unavailable |
| Verification | V1–V5 with reason and confidence |
| Opportunity Quality | Score + coverage + factors, or `Not scored` |
| Candidate Match | Score + coverage only if profile supplied; otherwise `Not scored` |
| Strategic Opportunity | Score + coverage when useful/requested; otherwise `Not scored` |
| Application URL | Official URL if confirmed; otherwise source URL and qualification |
| Original source(s) | Direct URLs retained, including duplicates/corroboration |
| Duties / requirements | Concise source-based summary |
| Evidence / gaps / risk | Claim-to-source notes, unknowns, risk indicators |

## Full report structure

```markdown
# PROJECT HUNTER — GLOBAL EMPLOYMENT INTELLIGENCE REPORT

## A. Search parameters
- Request, role/function, geography, seniority, work mode, constraints
- Publication window, search mode, assumptions/defaults
- Tools available and relevant limitations

## B. Executive summary
- Verified vacancy count (only based on inspected records)
- Most relevant findings and immediate risks
- Scope statement: this is not an exhaustive internet inventory

## C. Search coverage
| Source/category | Queries or surface checked | Checked at | Result/limitation |
|---|---|---|---|

## D. Confirmed or credible vacancies
[One compact vacancy record per item; sort by user constraints and verification, not title alone.]

## E. Unconfirmed vacancy leads
[Clearly distinguish V4 from confirmed results; explain how to verify.]

## F. Inferred hiring signals
| Company | Signal type | Original source/date | Evidence | Hypothesized job families | Confidence | Next verification |
|---|---|---|---|---|---|---|
[Label every row: “Inferred hiring signal — no vacancy confirmed.”]

## G. International/remote constraints
[Country eligibility, work authorization, sponsorship, language, time zone, employing entity, relocation, currency. Unknown is explicit.]

## H. Candidate matches
[Use only when profile evidence was provided. Show factor evidence, match score/coverage, strengths, gaps, and application risks.]

## I. Salary intelligence
[Source-stated ranges, currency, pay period, location, date, and caveats. No inferred salary presented as fact.]

## J. Fraud and source-risk findings
[Risk level, exact evidence, uncertainty, safe action. Keep suspicious items out of recommended vacancies.]

## K. Application priorities
| Priority | Role | Why now | Evidence/status | User-controlled next action |
|---|---|---|---|---|

## L. Recommended action plan
[Short, concrete, user-controlled steps. No external action taken unless separately authorized.]

## Method and limitation note
[Sources and queries actually used; sources not reached; access limits; timestamp limitations; confidence and coverage.]
```

## Reporting rules

- Attach a source URL to each vacancy and signal. Use original employer/official URLs whenever located; preserve third-party sources as corroboration.
- Separate what the source says from analyst interpretation.
- Include publication date, update date, deadline, and last-checked time as distinct fields. Say when timestamps are unavailable.
- Say `Not disclosed` for unstated fields, `Unknown` for unresolved facts, and `Not applicable` where the field truly does not apply.
- Do not imply all search results are unique jobs. Report duplicate clusters and retained source links.
- A zero-result search means no verified result in the stated scope, not that no opportunity exists.
- Do not include a fabricated live timestamp, query count, salary conversion, listing count, or coverage percentage.
