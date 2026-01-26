# Technical Decisions Log — nouvie-web

For shared decisions (database, design tokens), see also `nouvie-sales/.claude/docs/DECISIONS.md`

---

## Template
```
## YYYY-MM-DD: Decision title [SHARED if applicable]

**Context**: Why this came up
**Options considered**: What alternatives existed
**Decision**: What you chose
**Trade-off**: What you gave up
```

---

## 2026-01-23: Supabase Connection Pooler for Vercel [SHARED]

**Context**: Database connections failed in Vercel production with `Can't reach database server` and `prepared statement does not exist` errors.

**Options considered**:
1. Direct connection URL (port 5432) — doesn't work with serverless
2. Transaction pooler URL (port 6543) without pgbouncer flag
3. Transaction pooler URL with `?pgbouncer=true`

**Decision**: Use Supabase Transaction Pooler URL with `?pgbouncer=true` parameter:
```
postgresql://postgres.xxx:[PASSWORD]@aws-0-us-east-1.pooler.supabase.com:6543/postgres?pgbouncer=true
```

**Trade-off**: Must use pooler URL (cannot use direct connection for serverless). The `pgbouncer=true` flag disables prepared statements which Prisma uses by default.

---

## 2026-01-23: Distinct Category Layouts for Products Page

**Context**: Hogar and Institucional categories used a generic layout while Capilar had a special editorial design.

**Options considered**:
1. Single unified layout for all categories
2. Distinct layouts per category with different themes

**Decision**: Implement distinct layouts:
- **Hogar**: Rose/pink warm tones, family-friendly badges, soft hover effects
- **Institucional**: Sky/blue professional theme, dark header, use-case strip (hospitals, hotels, offices)
- **Capilar**: Keep existing editorial/catalog style

**Trade-off**: More code to maintain (3 different render functions), but better user experience and brand alignment per audience.

---

## 2026-01-23: SEO Strategy with JSON-LD Structured Data

**Context**: Site needed comprehensive SEO for better search visibility in Colombia.

**Options considered**:
1. Basic meta tags only
2. Meta tags + OpenGraph + Twitter Cards
3. Full implementation with JSON-LD structured data

**Decision**: Full SEO implementation:
- Metadata with keywords per page
- OpenGraph and Twitter Cards
- JSON-LD for Organization and LocalBusiness schemas
- Dynamic sitemap.ts and robots.ts
- Canonical URLs on all pages

**Trade-off**: More complexity in layout.tsx, but significantly better SEO potential and rich search results.

---

## 2026-01-23: YouTube Video Embeds with Lazy Loading

**Context**: Testimonios page needed to display 8 YouTube videos without impacting performance.

**Options considered**:
1. Direct iframe embeds
2. Lite-youtube-embed library
3. Native iframes with lazy loading

**Decision**: Native iframes with `loading="lazy"` attribute for simplicity. Videos organized by category with horizontal scroll on mobile.

**Trade-off**: Slightly heavier than lite-youtube-embed, but no additional dependency and simpler implementation.

---