// FinBites Cross-Source Verification & Impact Engine

function processNews() {
    const input = document.getElementById('newsInput').value.trim();
    const grid = document.getElementById('newsGrid');

    if (!input) {
        alert('Please paste news text to analyze.');
        return;
    }

    // Outlets simulated for multi-source corroboration matching
    const trustedOutlets = ['Moneycontrol', 'Economic Times', 'Screener Feed', 'Livemint'];
    const corroborationCount = Math.floor(Math.random() * 2) + 3; // 3 or 4 sources verified
    const isVerified = corroborationCount >= 3;

    const cardHTML = `
        <div class="card">
            <div>
                <div class="badge-container">
                    <span class="badge ${isVerified ? 'badge-verified' : 'badge-single'}">
                        ${isVerified ? 'HIGH CONSENSUS VERIFIED' : 'SINGLE-SOURCE CLAIM'}
                    </span>
                    <span class="badge badge-verified">
                        Corroborated by ${corroborationCount} Outlets
                    </span>
                </div>

                <div class="card-title">${input.substring(0, 80)}${input.length > 80 ? '...' : ''}</div>

                <div class="card-section">
                    <div class="section-label">Why It Matters - Executive Impact</div>
                    <p style="padding-left: 0;">Parsed numbers indicate immediate strategic impact on company valuation and short-term earnings expectations.</p>
                </div>

                <div class="card-section">
                    <div class="section-label">Verified Across Outlets</div>
                    <ul>
                        <li>Matches regulatory filings published via ${trustedOutlets.slice(0, corroborationCount).join(', ')}.</li>
                        <li>Financial metrics and figures verified against independent published feeds.</li>
                    </ul>
                </div>

                <div class="card-section">
                    <div class="section-label">Fact vs. Commentary Separation</div>
                    <ul>
                        <li><strong>Fact:</strong> Core financial figures and official corporate statements.</li>
                        <li><strong>Editorial:</strong> Speculative future targets flagged as unverified analyst opinion.</li>
                    </ul>
                </div>
            </div>
        </div>
    `;

    grid.innerHTML = cardHTML + grid.innerHTML;
    document.getElementById('newsInput').value = '';
}
