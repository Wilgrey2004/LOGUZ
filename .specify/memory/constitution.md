<!--
Sync Impact Report
- Version change: 0.0.0-template -> 1.0.0
- Modified principles:
	- [PRINCIPLE_1_NAME] -> I. Outcome-First Strategy (CEO Discipline)
	- [PRINCIPLE_2_NAME] -> II. Trust-Centered Funeral Brand Experience
	- [PRINCIPLE_3_NAME] -> III. Mobile-First Responsive UX (Non-Negotiable)
	- [PRINCIPLE_4_NAME] -> IV. SEO and Discoverability by Default
	- [PRINCIPLE_5_NAME] -> V. Performance, Accessibility, and Quality Gates
- Added sections:
	- Platform and Deployment Standards
	- Delivery Workflow and Compliance Checks
- Removed sections:
	- None
- Templates requiring updates:
	- ✅ updated: .specify/templates/plan-template.md
	- ✅ updated: .specify/templates/spec-template.md
	- ✅ updated: .specify/templates/tasks-template.md
	- ⚠ pending: .specify/templates/commands/*.md (directory not present)
- Follow-up TODOs:
	- TODO(RATIFICATION_DATE): Confirm original adoption date of this constitution.
-->

# LOGUZ Constitution

## Core Principles

### I. Outcome-First Strategy (CEO Discipline)

Every change MUST support a measurable business outcome for LOGUZ: more qualified
leads, stronger local visibility, or higher inquiry completion. Work that does not
map to one of these outcomes MUST NOT be prioritized. Each feature proposal MUST
name one primary metric and one owner metric check date.
Rationale: focus and compounding execution outperform broad, unfocused rework.

### II. Trust-Centered Funeral Brand Experience

The site MUST communicate seriousness, clarity, and professionalism in all content
and visuals. UI text MUST be empathetic, direct, and free of sensational language.
Visual decisions (typography, color, imagery, spacing) MUST preserve credibility and
emotional respect for families in sensitive moments.
Rationale: funeral services depend on trust first, aesthetics second.

### III. Mobile-First Responsive UX (Non-Negotiable)

All pages MUST be designed mobile-first and validated at common widths (320, 375,
428, 768, 1024, 1440). Primary actions MUST remain within comfortable thumb reach
on phones, tap targets MUST be at least 44x44 CSS px, and critical flows MUST be
completable one-handed. Desktop enhancements MAY be added only after mobile parity
is achieved.
Rationale: most local-service discovery and first contact starts on mobile.

### IV. SEO and Discoverability by Default

Every public page MUST include unique title, meta description, canonical URL,
semantic heading structure, descriptive alt text, and internal links that support
service discovery. Structured data (Organization/LocalBusiness/Service where valid)
MUST be present and kept consistent with contact and location information.
Rationale: discoverability is a core acquisition channel, not a post-launch task.

### V. Performance, Accessibility, and Quality Gates

Releases MUST pass baseline quality gates: zero broken internal links, no blocking
console errors, valid HTML landmarks, keyboard-accessible interactive elements, and
Core Web Vitals targets (LCP < 2.5s, CLS < 0.1, INP < 200ms on representative
mobile conditions). Changes that fail gates MUST be fixed before deploy.
Rationale: trust, ranking, and conversion all degrade when UX quality regresses.

## Platform and Deployment Standards

The production stack remains HTML, CSS, and vanilla JavaScript by default.
New dependencies MUST be justified by measurable value and maintenance impact.
Deployments MUST stay compatible with both GitHub Pages and Netlify. Any feature
requiring server-side execution MUST provide a static-safe fallback for Pages.
Analytics and consent mechanisms MUST avoid degrading page performance.

## Delivery Workflow and Compliance Checks

Each initiative MUST define: scope, target metric, responsive UX acceptance checks,
SEO acceptance checks, and rollback criteria. Reviews MUST include before/after
evidence for mobile layout, lighthouse or equivalent performance snapshots, and
search-preview validation (title/description/schema presence). Work is considered
done only when business outcome instrumentation and quality evidence are attached.

## Governance

This constitution is the source of truth for product and implementation decisions.
Amendments REQUIRE: documented rationale, impact analysis on templates/workflows,
and explicit semantic version bump (MAJOR for breaking governance changes, MINOR for
new principles/sections, PATCH for clarifications). Compliance reviews MUST happen
for every plan and release candidate. Non-compliant work MUST be remediated or
formally waived with a time-bound action plan approved by project owners.

**Version**: 1.0.0 | **Ratified**: TODO(RATIFICATION_DATE): original adoption date not recorded | **Last Amended**: 2026-04-29
