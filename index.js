/**
 * Mulqi Berburu Target - native DeepSeek Harness skill bundle.
 *
 * Ships one bundled skill (mulqi-berburu-target): an evidence-led
 * public-source hiring intelligence workflow - job discovery, employer
 * hiring-signal research, vacancy verification, scam-risk review,
 * duplicate grouping, CV-to-role matching, and a 13-phase research
 * workflow with the V1-V5 verification framework.
 *
 * Architecture: a Cordis plugin registers one SkillProvider on the
 * ctx.skills registry (@deepseek-ai/dsh-skill). The provider lists a
 * single candidate at the DSH bundled-skill rank and lazily loads the
 * skill body from the package's own skills/ directory; relative
 * resources (references, evals) resolve through resourceBase.
 *
 * No runtime dependencies (Node builtins only). The bundle registers no
 * tools: live research uses the search/browser/fetch tools available in
 * the host session.
 */

import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

/** Provider name; unique within the registry layer. */
const PROVIDER_NAME = 'mulqi-berburu-target'

/** Skill identifier exposed in the session skill catalog. */
const SKILL_NAME = 'mulqi-berburu-target'

/** DSH bundled-skill rank (platform constant BUNDLED_SKILL_RANK = 600). */
const BUNDLED_SKILL_RANK = 600

/** Catalog routing description for the bundled skill. */
const SKILL_DESCRIPTION = "Use whenever the user asks to search for jobs or public hiring signals, investigate an employer or recruitment activity, verify a vacancy or assess scam risk, compare opportunities, match a CV to roles, find remote or international work, or build an evidence-based career search. Expands job titles, researches public sources using only tools actually available, records provenance and uncertainty, separates confirmed vacancies from inferred leads, and turns findings into prioritized next steps. Not for scholarship searches, private-person investigations, or CV rewriting with no job-search or role-matching task.";

const SKILL_FILE_URL = new URL('./skills/mulqi-berburu-target/SKILL.md', import.meta.url)
const RESOURCE_BASE = {
  kind: 'directory',
  path: fileURLToPath(new URL('./skills/mulqi-berburu-target/', import.meta.url)),
}
const INVOCATION = { modelInvocable: true, userInvocable: true }

/**
 * Strip the leading YAML frontmatter block from a raw skill file.
 * Mirrors the DSH skill-filesystem algorithm (opening '---' first
 * line, closing '---' line, body after it) so the provider returns
 * the body only, without a YAML dependency. Falls back to the raw
 * text when no well-formed frontmatter fence pair is present.
 */
function stripFrontmatter(raw) {
  const firstLineEnd = raw.indexOf('\n')
  if (firstLineEnd < 0) return raw
  const firstLine = raw.slice(0, firstLineEnd).replace(/\r$/, '')
  if (firstLine !== '---') return raw
  let lineStart = firstLineEnd + 1
  while (lineStart <= raw.length) {
    const nextNewline = raw.indexOf('\n', lineStart)
    const lineEnd = nextNewline < 0 ? raw.length : nextNewline
    const line = raw.slice(lineStart, lineEnd).replace(/\r$/, '')
    if (line === '---') return nextNewline < 0 ? '' : raw.slice(nextNewline + 1)
    if (nextNewline < 0) return raw
    lineStart = nextNewline + 1
  }
  return raw
}

const CANDIDATE = {
  name: SKILL_NAME,
  description: SKILL_DESCRIPTION,
  invocation: INVOCATION,
  provider: PROVIDER_NAME,
  source: 'bundled',
  resourceBase: RESOURCE_BASE,
  rank: BUNDLED_SKILL_RANK,
  locator: SKILL_FILE_URL,
}

const provider = {
  name: PROVIDER_NAME,
  list: () => Promise.resolve([CANDIDATE]),
  async get(_candidate, _options) {
    const raw = await readFile(SKILL_FILE_URL, 'utf8')
    return {
      name: SKILL_NAME,
      description: SKILL_DESCRIPTION,
      invocation: INVOCATION,
      provider: PROVIDER_NAME,
      source: 'bundled',
      resourceBase: RESOURCE_BASE,
      content: stripFrontmatter(raw).trim(),
    }
  },
}

/** Cordis plugin name (diagnostic label). */
export const name = 'mulqi-berburu-target'

/** Services required by the plugin. */
export const inject = ['skills']

/**
 * Register the bundled skill provider on ctx.skills.
 * @param {import('@deepseek-ai/cordis').Context} ctx - host context.
 * @returns {() => void} disposer that unregisters the provider on fiber teardown.
 */
export function apply(ctx) {
  return ctx.skills.registerProvider(() => provider)
}
