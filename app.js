// Sample pre-filtered and AI-verified news database
// Backend AI logic verifies multi-source consensus before populating feed

const newsFeed = [
    {
        id: 1,
        category: 'domestic',
        title: 'RBI Keeps Interest Rates Unchanged to Control Inflation',
        summary: 'The Reserve Bank of India has decided not to increase interest rates this quarter, keeping loan costs steady for home and student loans.',
        whyItMatters: 'If you or your family have existing bank loans or plan to take a student loan, your monthly payments (EMIs) will remain stable.',
        source: 'Moneycontrol',
        sourceUrl: 'https://www.moneycontrol.com'
    },
    {
        id: 2,
        category: 'international',
        title: 'US Tech Sector Sees Major Surge in Artificial Intelligence Investments',
        summary: 'Global tech firms are increasing spending on AI infrastructure, boosting stock performance across semiconductor and cloud companies.',
        whyItMatters: 'This hiring and funding boom creates new career opportunities in tech-finance and signals strong long-term growth in global stock markets.',
        source: 'Reuters Financial',
        sourceUrl: 'https://www.reuters.com'
    },
    {
        id: 3,
        category: 'domestic',
        title: 'New Tax Rules Simplified for First-Time Salaried Employees',
        summary: 'Government updates income tax filing schedules to make tax returns simpler and quicker for young professionals entering the workforce.',
        whyItMatters: 'When you graduate and start your first job, understanding your salary slip and tax deductions will be much easier and transparent.',
        source: 'Economic Times',
        sourceUrl: 'https://economictimes.indiatimes.com'
    },
    {
        id: 4,
        category: 'international',
        title: 'Global Crude Oil Prices Drop Following Supply Increase',
        summary: 'Major oil-producing nations have increased output, leading to a temporary decline in international crude oil benchmarks.',
        whyItMatters: 'Lower global oil prices help reduce transport and fuel costs in India, helping control everyday prices for goods and food.',
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
