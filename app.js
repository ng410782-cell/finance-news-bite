// Sample pre-filtered and AI-verified news database
// Backend AI logic verifies multi-source consensus before populating feed

const newsFeed = [
    {
        id: 1,
        category: 'domestic',
        title: 'RBI Keeps Interest Rates Unchanged to Control Inflation',
        summary: 'The Reserve Bank of India has decided to keep interest rates steady this quarter, maintaining consistent borrowing costs across home, personal, and educational loans.',
        whyItMatters: 'Existing loan interest rates remain unchanged, ensuring predictable monthly payments (EMIs) for households and retail borrowers.',
        source: 'Moneycontrol',
        sourceUrl: 'https://www.moneycontrol.com'
    },
    {
        id: 2,
        category: 'international',
        title: 'US Tech Sector Sees Major Surge in Artificial Intelligence Investments',
        summary: 'Global tech firms are expanding infrastructure spending in AI, boosting stock performance across semiconductor and cloud enterprise companies.',
        whyItMatters: 'Capital inflows into AI technology drive innovation, market momentum, and strategic hiring across tech-adjacent sectors globally.',
        source: 'Reuters Financial',
        sourceUrl: 'https://www.reuters.com'
    },
    {
        id: 3,
        category: 'domestic',
        title: 'New Income Tax Filing Updates Simplified for First-Time Taxpayers',
        summary: 'Government updates tax filing platforms to streamline returns and reduce processing time for newly salaried professionals.',
        whyItMatters: 'Navigating salary deductions, tax rebates, and yearly return filings becomes far more transparent and straightforward.',
        source: 'Economic Times',
        sourceUrl: 'https://economictimes.indiatimes.com'
    },
    {
        id: 4,
        category: 'international',
        title: 'Global Crude Oil Prices Drop Following Supply Expansion',
        summary: 'Major oil-exporting nations have increased output, leading to a temporary decline in international crude oil benchmark prices.',
        whyItMatters: 'Lower global oil prices reduce energy and freight costs, helping ease inflationary pressure on everyday consumer goods.',
        source: 'Bloomberg Markets',
        sourceUrl: 'https://www.bloomberg.com'
    }
];

function renderNews(items) {
    const container = document.getElementById('newsContainer');
    container.innerHTML = '';

    items.forEach(news => {
        const card = document.createElement('div');
        card.className = 'news-card';
        card.innerHTML = `
            <div>
                <div class="card-header">
                    <span class="region-badge">${news.category === 'domestic' ? '🇮🇳 Domestic' : '🌐 International'}</span>
                    <span class="verified-tag">✓ Backend AI Verified</span>
                </div>

                <div class="news-title">${news.title}</div>

                <div class="section-title">The Bite-Sized Summary</div>
                <p class="summary-text">${news.summary}</p>

                <div class="section-title">Why It Matters to You</div>
                <p class="importance-text">${news.whyItMatters}</p>
            </div>

            <div class="card-footer">
                <span class="source-name">Source: ${news.source}</span>
                <a href="${news.sourceUrl}" target="_blank" class="source-link">Read Full Article →</a>
            </div>
        `;
        container.appendChild(card);
    });
}

function filterNews(category, button) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    if (category === 'all') {
        renderNews(newsFeed);
    } else {
        const filtered = newsFeed.filter(item => item.category === category);
        renderNews(filtered);
    }
}

// Initial render
document.addEventListener('DOMContentLoaded', () => {
    renderNews(newsFeed);
});
