---
name: Claude Code rules organization preference
description: New rules go in .claude/rules/<topic>.md with paths: frontmatter, not in CLAUDE.md
type: feedback
---
Add new rules or checklists as `.claude/rules/<topic>.md` with `paths:` frontmatter. Keep CLAUDE.md under 50 lines — only stack and project structure.

**Why:** Path-scoped rules only load when relevant files are open, reducing context token usage per session.
**How to apply:** Never append rules to CLAUDE.md. Create a new topic file with appropriate `paths:` frontmatter instead.
