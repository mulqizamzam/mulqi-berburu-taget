# Project Hunter Evaluation Cases

This folder contains 12 `claude plugin eval`-compatible scenario cases covering search, title expansion, global eligibility, hidden signals, verification, duplicate handling, scam defense, CV matching, source failure, multilingual search, stale postings, and prompt injection.

Each case contains a user-style prompt, a YAML success description, and one or more evidence-focused graders. These are test definitions, not recorded execution results. They have not been run by this repository setup; do not treat expected outcomes as a pass report.

From a compatible Claude Code environment, run the CLI only after reviewing its current options and tool permissions:

```bash
claude plugin eval skills/project-hunter --allow-tools Read,Glob,Grep,Skill,Write,Edit,Bash
```

Live searches require an appropriate search/page-reading integration in that environment. Do not add a permission to bypass access controls or transmit candidate data. The CLI may perform real model runs and incur usage charges; the toolset and runtime behavior depend on the installed version.
