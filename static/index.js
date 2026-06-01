document.addEventListener('DOMContentLoaded', () => {
    const queryInput = document.getElementById('query-input');
    const searchBtn = document.getElementById('search-btn');
    const searchBtnText = document.getElementById('search-btn-text');
    const resultsPanel = document.getElementById('results-panel');
    const loader = document.getElementById('loader');
    const errorBanner = document.getElementById('error-banner');
    const errorMessage = document.getElementById('error-message');
    const contentGrid = document.getElementById('content-grid');
    
    const aiResponseText = document.getElementById('ai-response-text');
    const reviewsAnalyzedMeta = document.getElementById('reviews-analyzed-meta');
    const reviewsCountBadge = document.getElementById('reviews-count-badge');
    const sourceReviewsList = document.getElementById('source-reviews-list');
    
    const suggestionLinks = document.querySelectorAll('.suggestion-link');

    // Suggestion queries triggers
    suggestionLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const query = link.getAttribute('data-query');
            queryInput.value = query;
            submitQuery(query);
        });
    });

    // Enter key support
    queryInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const query = queryInput.value.trim();
            if (query) {
                submitQuery(query);
            }
        }
    });

    // Button click support
    searchBtn.addEventListener('click', () => {
        const query = queryInput.value.trim();
        if (query) {
            submitQuery(query);
        }
    });

    // Main API Invocation Function
    async function submitQuery(question) {
        // Toggle view states
        resultsPanel.classList.remove('hidden');
        loader.classList.remove('hidden');
        errorBanner.classList.add('hidden');
        contentGrid.classList.add('hidden');

        // Update button state to show loading icon
        searchBtn.disabled = true;
        const originalBtnHTML = searchBtn.innerHTML;
        searchBtn.innerHTML = `<span class="material-symbols-outlined animate-spin text-[20px]">sync</span> <span>Thinking...</span>`;

        // Smooth scroll to results panel with offset for fixed header
        const yOffset = -100; // Offset of 100px to ensure search input/header are visible and not cut off
        const y = resultsPanel.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });

        try {
            const response = await fetch('/api/query', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ question: question })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.detail || 'Failed to retrieve review insights.');
            }

            // Render Results
            renderResults(data);

        } catch (err) {
            // Show error state
            loader.classList.add('hidden');
            contentGrid.classList.add('hidden');
            errorBanner.classList.remove('hidden');
            errorMessage.textContent = err.message || 'An unexpected error occurred while communicating with DineWise AI.';
        } finally {
            // Restore button
            searchBtn.disabled = false;
            searchBtn.innerHTML = originalBtnHTML;
        }
    }

    // Results Renderer
    function renderResults(data) {
        // 1. Hide Loader
        loader.classList.add('hidden');

        // 2. Set AI Header Meta & Response text
        reviewsAnalyzedMeta.textContent = `AI Synthesis Report • Analysis of matching reviews`;
        
        // Format AI markdown bold text (e.g. **pepperoni**) and formatting
        const paragraphs = data.answer.split('\n\n').filter(p => p.trim() !== '');
        aiResponseText.innerHTML = paragraphs.map(p => {
            let formattedText = escapeHtml(p);
            // Replace bold notation with strong tags
            formattedText = formattedText.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-primary">$1</strong>');
            return `<p class="mb-4">${formattedText}</p>`;
        }).join('');

        // 3. Clear and Render Source Reviews List
        sourceReviewsList.innerHTML = '';
        const reviewsCount = data.reviews ? data.reviews.length : 0;
        reviewsCountBadge.textContent = `${reviewsCount} found`;

        if (reviewsCount > 0) {
            data.reviews.forEach(review => {
                const card = document.createElement('div');
                card.className = 'bg-surface-container-lowest border border-outline-variant/60 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col gap-3';
                
                // Format rating star element
                const ratingValue = parseFloat(review.rating) || 5;
                const activeStars = Math.round(ratingValue);
                
                let starsHTML = '';
                for (let i = 0; i < 5; i++) {
                    const fill = i < activeStars ? 1 : 0;
                    starsHTML += `<span class="material-symbols-outlined text-secondary text-[16px]" style="font-variation-settings: 'FILL' ${fill};">star</span>`;
                }

                card.innerHTML = `
                    <div class="flex justify-between items-center">
                        <div class="flex text-secondary-container">
                            ${starsHTML}
                        </div>
                        <span class="text-label-sm font-label-sm text-outline">${formatDate(review.date)}</span>
                    </div>
                    <p class="text-body-md font-body-md text-on-surface-variant text-sm leading-relaxed">
                        ${escapeHtml(review.content)}
                    </p>
                `;
                sourceReviewsList.appendChild(card);
            });
        } else {
            sourceReviewsList.innerHTML = `
                <div class="bg-surface-container-low p-6 rounded-xl text-center border border-outline-variant/40">
                    <p class="text-label-md font-label-md text-on-surface-variant italic">No raw customer reviews directly match this exact query, but DineWise AI answered based on general context.</p>
                </div>
            `;
        }

        // 4. Reveal Content Grid
        contentGrid.classList.remove('hidden');
    }

    // Helper: Escape HTML to prevent injection
    function escapeHtml(unsafe) {
        return unsafe
             .replace(/&/g, "&amp;")
             .replace(/</g, "&lt;")
             .replace(/>/g, "&gt;")
             .replace(/"/g, "&quot;")
             .replace(/'/g, "&#039;");
    }

    // Helper: Format Date string nicely
    function formatDate(dateStr) {
        if (!dateStr) return 'Recent Review';
        try {
            const options = { year: 'numeric', month: 'short', day: 'numeric' };
            const date = new Date(dateStr);
            if (isNaN(date.getTime())) return dateStr;
            return date.toLocaleDateString('en-US', options);
        } catch {
            return dateStr;
        }
    }
});
