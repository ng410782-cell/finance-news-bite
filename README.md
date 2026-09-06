# ⚡ FinBites - Automated Financial News & Cross-Verification Engine

FinBites is a web-based financial news aggregator that parses live economic feeds, performs multi-source cross-referencing, and extracts concise "Why It Matters" takeaways while separating objective data from publisher commentary.

---

## Key Features & Solution

* **Multi-Source Cross-Corroboration:** Aggregates coverage of market events across independent financial feeds (e.g., Moneycontrol, Economic Times, Screener).
* **Consensus Scoring Engine:** Evaluates whether numerical claims (EBITDA margins, revenue metrics, policy changes) are reported consistently across multiple sources.
* **Fact vs. Editorial Separation:** Isolates verified regulatory figures from reporter speculation, tagging opinionated commentary as unverified sentiment.
* **Bite-Sized Actionable Summaries:** Converts complex news articles into structured key points for non-finance professionals.

---

## Verification Methodology

1. **Feed Aggregation:** Ingests headlines and article texts from news feeds.
2. **Metric Extraction:** Identifies hard numerical data (percentages, revenue, debt metrics).
3. **Cross-Source Matching:** Validates if identical figures appear across at least 3 independent media sources.
4. **Source Ratings:**
   * **High Consensus:** Claim appears consistently across multiple major outlets.
   * **Single-Source Claim:** Claim appears in only one source and is flagged for manual verification.

---

## How to Run

1. Open `index.html` in any web browser or view via GitHub Pages.
