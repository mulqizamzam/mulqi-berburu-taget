# Tool Compatibility, Installation, and Use

This repository contains an AI skill and reference material. It is not a deployed job-search service, scraper, job database, browser extension, or application-submission bot. Search quality depends on the host assistant's actual tools, permissions, and accessible sources.

## Capability matrix

| Host capability | What the skill can do | Required limitation statement |
|---|---|---|
| Search + page reader/browser | Discover public sources, inspect original pages, collect evidence, and produce a sourced report | State which sources were actually checked; tool output may still be incomplete or stale |
| Search only | Discover results and provide snippet-level leads; verify only claims visible in the results | Label snippet-only evidence; do not claim a page was opened or listing is active |
| Page reader only | Inspect user-supplied URLs and any pages actually reachable; no broad discovery unless a search feature exists | State that discovery scope was limited to supplied/reachable pages |
| Official API available | Use documented endpoint/features within terms, quotas, and permission | Identify API/source and limits; do not expose keys or use unauthorized endpoints |
| No live web access | Build query packs, source lists, evaluation criteria, and a verification checklist | Say no live search was performed; include no invented current vacancies |
| Auth wall, CAPTCHA, paywall, or blocked source | Record the limitation and continue with permitted alternatives | Never bypass or imply access succeeded |
| File reader for user CV | Extract relevant role evidence and match to stated requirements | Minimize personal data; never transmit without consent |

A named tool in another environment does not imply it is available in this session. Recheck current capabilities for each run.

## Installation

Copy the entire skill directory, including `references/`, into the skill directory supported by the host platform. Do not copy only `SKILL.md` if the host should use the full workflow references.

### Claude Code project-local installation

From the repository root:

```bash
mkdir -p .claude/skills &&
test ! -e .claude/skills/project-hunter &&
cp -R skills/project-hunter .claude/skills/project-hunter
```

### OMP user-level installation

```bash
mkdir -p ~/.omp/agent/skills &&
test ! -e ~/.omp/agent/skills/project-hunter &&
cp -R skills/project-hunter ~/.omp/agent/skills/project-hunter
```

For a project-local OMP setup, use the project skill directory supported by that OMP installation instead. If the host uses a different skill registry, follow its documented skill layout and preserve the directory structure.

Installation changes files in the destination. Check for an existing destination first; do not overwrite an existing skill without review. Reload/restart the host if its documentation requires it to discover new skills.

## Use

Try natural-language requests such as:

- `Find Finance Manager vacancies in Jakarta posted within the last 14 days; prioritize employer career pages.`
- `Check this public job posting for authenticity, application URL, date, active status, and scam indicators.`
- `Compare these roles with my CV. Use only the role-relevant information, show evidence for each match factor, and do not submit applications.`
- `Find public expansion signals for companies entering Indonesia and label any inferred roles as unconfirmed.`

Give the skill any hard constraints that materially affect eligibility: location, remote countries, work authorization, language, seniority, and salary requirements. Do not upload sensitive documents unless you intend the selected host to process them.

## Known limitations

- Search engines and public job platforms may omit, duplicate, stale-index, or restrict postings.
- Social posts and corporate growth signals are not proof of open roles.
- A listing can close after it was checked; `active` status is time-bound.
- Sponsorship, relocation, compensation, and country eligibility are often undisclosed; unknown stays unknown.
- CV matching is evidence-based guidance, not a hiring prediction or legal determination.
- The skill cannot guarantee platform-level enforcement, exhaustive global coverage, absence of fraud, or successful employment.
- No benchmark, production search integration, persistent database, alerting, or application automation is included in this repository.
