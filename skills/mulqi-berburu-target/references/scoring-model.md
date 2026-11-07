# Scoring Model

Scores organize evidence; they do not turn uncertainty into certainty. Keep opportunity quality, candidate fit, and strategic career value separate. Every score must show factors, evidence, missing data, and coverage. Never use protected traits or inferred personal characteristics.

## Common calculation rule

For each applicable factor, assign a normalized value `m` from 0 to 1 using only observed evidence. Weighted score on a 0–100 scale:

`score = 100 × Σ(wᵢ × mᵢ) / Σ(wᵢ for applicable factors)`

The denominator includes only factors that can be meaningfully scored. Report `coverage = Σ(applicable weights) / Σ(all defined weights)`. If coverage is too low to support a useful comparison, mark `Not scored` instead of printing a number; explain the missing evidence. Do not treat missing as zero. Scores are decision aids, not calibrated probabilities.

Use one decimal at most; avoid false precision. State the rubric and evidence for non-obvious ratings. When comparing roles, apply the same rubric to each.

## A. Opportunity Quality Score

Assesses the quality and usability of the vacancy evidence, not the candidate's fit:

| Factor | Weight | Evidence considerations |
|---|---:|---|
| Authenticity/provenance | 30% | Employer/authorized source, attributable publisher, URL legitimacy |
| Source reliability | 20% | Original source versus reputable third party, corroboration |
| Vacancy clarity | 20% | Duties, requirements, location, type, and terms are clear |
| Freshness | 15% | Source publication/update date and recent status check |
| Application accessibility | 15% | Working, attributable, accessible application route; no suspicious intermediary |

If the listing is V5 Suspicious, do not present it as a recommended opportunity regardless of score. Keep the risk warning primary. Quality score does not mean the vacancy is active or suitable.

## B. Candidate Match Score

Use the user's supplied CV/profile and the vacancy's stated requirements. Compare responsibilities and evidence, not title alone.

| Factor | Weight |
|---|---:|
| Experience alignment | 25% |
| Skills alignment | 20% |
| Responsibility alignment | 15% |
| Seniority alignment | 10% |
| Industry alignment | 10% |
| Education and certification | 5% |
| Location compatibility | 5% |
| Compensation compatibility | 5% |
| Career direction | 5% |

For each factor, say what candidate evidence and role requirement support the rating. Unknown role or candidate criteria are inapplicable, not automatically a mismatch. If the user did not provide candidate evidence, report `Not scored — candidate profile not provided`.

Output: overall score and coverage; strengths; missing requirements; skill gaps; experience/qualification gaps; location/compensation constraints; risks; practical improvements; application priority. Do not infer readiness, legal eligibility, or likelihood of being hired.

## C. Strategic Opportunity Score

Use only when requested or useful to compare career value:

| Factor | Weight |
|---|---:|
| Career progression | 25% |
| Skill development | 20% |
| Industry relevance | 15% |
| Compensation attractiveness | 15% |
| International exposure | 10% |
| Leadership opportunity | 15% |

Assess each factor against the user's stated direction and publicly stated role terms. Compensation must be comparable by pay period, currency, and location; otherwise mark unavailable. Do not infer international exposure from company size or leadership scope from an inflated title.

## Priority labels

- **Priority 1 — Act soon:** verified active status, credible fit evidence, and a real deadline/recency reason.
- **Priority 2 — Review:** potentially relevant but one important requirement or status needs checking.
- **Priority 3 — Monitor:** credible lead or strategic signal without a confirmed active opening.
- **Do not recommend:** V5 suspicious or clear constraint conflict.

Priority is an explained action label, not another hidden score. Do not sort an unconfirmed signal above a confirmed posting as though it were an application opportunity.

## Calibration and uncertainty

A score should be reproducible from the displayed evidence. If two analysts might reasonably interpret a requirement differently, use a range or explain the judgment rather than claiming precision. Do not compare scores generated from materially different evidence coverage without calling out the difference. A score of 90 is not a 90% chance of interview or offer.
