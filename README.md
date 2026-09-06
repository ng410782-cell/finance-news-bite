# ⚡ FinBites - Financial News for Students

FinBites is a student-focused financial news platform that breaks down complex domestic and international financial headlines into simple, jargon-free takeaways and actionable "Why It Matters" insights.

---

## Features

* **Domestic & International News Categorization:** Easily switch between Indian financial updates and global market headlines.
* **Jargon-Free Summaries:** Designed specifically for students to stay informed without getting bogged down by complicated financial language.
* **"Why It Matters to You":** Clear explanation of how macro-economic news directly impacts students, careers, and daily life.
* **Direct Source Links:** Each card provides an explicit link leading users straight to the original published article (e.g., Moneycontrol, Economic Times, Reuters).

---

## Backend News Verification Logic

To ensure news accuracy without compromising the clean student-facing user interface, **FinBites executes source authentication in the background**:

1. **Multi-Feed Ingestion:** Aggregates raw news from established, tier-1 financial publishers.
2. **Cross-Outlet Corroboration:** Behind the scenes, the AI checks if core figures and announcements match across at least 3 independent feeds before serving the article.
3. **Opinion vs. Fact Separation:** Extracts verified regulatory metrics while filtering out speculative reporter commentary.
