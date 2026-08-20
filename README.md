# ⚡ FinBites - Automated Live Finance News Hub 📰

An automated, interactive financial news aggregator that pools live economic headlines from top Indian and global news outlets into bite-sized, interactive 3D flip cards.

🔗 **[Live Demo](https://ng410782-cell.github.io/finance-news-bite/)**

---

## 🌟 Key Features

- **Automated Real-Time News Aggregation:** Connects directly to live RSS feeds via asynchronous API endpoints—no daily manual code updates required.
- **Multi-Source Outlet Pooling:** 
  - **🇮🇳 Indian Economy:** Aggregates live headlines from *The Economic Times*, *Moneycontrol*, and *Livemint*.
  - **🌍 Global Markets:** Aggregates global economic coverage from *CNBC* and *MarketWatch*.
- **3D Flip-Card UI:** Converts complex financial news into clean cards that flip to answer the essential question: *"Why Should I Care?"*
- **Direct Source Attribution & Article Links:** Displays source badges on each card with one-click links to read full stories on the publisher's site.
- **Smart Text Sanitization:** Strips raw HTML tags and truncates long RSS excerpts automatically for uniform, scannable cards.

---

## 🛠️ Architecture & Tech Stack

- **HTML5 & CSS3:** Custom 3D CSS `perspective` transform animations, responsive CSS Grid layout, and source badge styling.
- **JavaScript (ES6+):** 
  - `Promise.all()` for concurrent multi-feed fetching.
  - Asynchronous JSON fetching via `rss2json` API wrappers.
  - Client-side sorting algorithms to organize news chronologically across multiple sources.
- **GitHub Pages:** Automated deployment and hosting.

---

## 🚀 How to Run Locally

1. Clone this repository:
   ```bash
   git clone [https://github.com/ng410782-cell/finance-news-bite.git](https://github.com/ng410782-cell/finance-news-bite.git)
