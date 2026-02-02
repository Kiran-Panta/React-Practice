import React, { useState, useEffect } from 'react';
import LoadingSpinner from '../ui/LoadingSpinner';

const QuoteWidget = () => {
    // State for current quote, loading, history, and favorites
    const [currentQuote, setCurrentQuote] = useState(null);
    const [loading, setLoading] = useState(true);
    const [quoteHistory, setQuoteHistory] = useState([]); // Cache last 5 quotes
    const [historyIndex, setHistoryIndex] = useState(-1); // Current position in history
    const [favorites, setFavorites] = useState([]);

    // Load favorites from localStorage on mount
    useEffect(() => {
        const savedFavorites = localStorage.getItem('quoteFavorites');
        if (savedFavorites) {
            setFavorites(JSON.parse(savedFavorites));
        }
    }, []);

    // Save favorites to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('quoteFavorites', JSON.stringify(favorites));
    }, [favorites]);

    // Fetch a random quote from the API
    const fetchQuote = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://api.quotable.io/random');
            if (!response.ok) {
                throw new Error('Failed to fetch quote');
            }
            const quote = await response.json();

            // Add to history (keep only last 5)
            setQuoteHistory(prev => {
                const newHistory = [quote, ...prev.slice(0, 4)]; // Keep max 5 quotes
                return newHistory;
            });

            // Set as current quote and reset to latest (index 0)
            setCurrentQuote(quote);
            setHistoryIndex(0);

        } catch (error) {
            console.error('Error fetching quote:', error);
            // Fallback quote if API fails
            const fallbackQuote = {
                content: "The only way to do great work is to love what you do.",
                author: "Steve Jobs"
            };
            setCurrentQuote(fallbackQuote);
            setHistoryIndex(0);
        } finally {
            setLoading(false);
        }
    };

    // Load initial quote on component mount
    useEffect(() => {
        fetchQuote();
    }, []);

    // Handle getting a new quote
    const handleNewQuote = () => {
        fetchQuote();
    };

    // Handle navigating through quote history
    const handleHistoryNavigation = (direction) => {
        if (direction === 'prev' && historyIndex < quoteHistory.length - 1) {
            const newIndex = historyIndex + 1;
            setHistoryIndex(newIndex);
            setCurrentQuote(quoteHistory[newIndex]);
        } else if (direction === 'next' && historyIndex > 0) {
            const newIndex = historyIndex - 1;
            setHistoryIndex(newIndex);
            setCurrentQuote(quoteHistory[newIndex]);
        }
    };

    // Handle adding/removing from favorites
    const handleToggleFavorite = () => {
        if (!currentQuote) return;

        const isFavorite = favorites.some(fav => fav._id === currentQuote._id);
        if (isFavorite) {
            setFavorites(prev => prev.filter(fav => fav._id !== currentQuote._id));
        } else {
            setFavorites(prev => [...prev, currentQuote]);
        }
    };

    // Check if current quote is favorited
    const isCurrentQuoteFavorited = currentQuote && favorites.some(fav => fav._id === currentQuote._id);

    return (
        <div className="quote-widget card shadow-sm">
            <div className="card-body text-center p-4">
                <h5 className="card-title mb-4">
                    <i className="bi bi-quote me-2 text-primary"></i>
                    Daily Inspiration
                </h5>

                {loading ? (
                    <div className="d-flex justify-content-center py-4">
                        <LoadingSpinner size="small" />
                    </div>
                ) : currentQuote ? (
                    <div className="quote-content">
                        {/* Quote text */}
                        <blockquote className="blockquote mb-3">
                            <p className="mb-2 fs-5 lh-base">
                                "{currentQuote.content}"
                            </p>
                            <footer className="blockquote-footer">
                                — {currentQuote.author}
                            </footer>
                        </blockquote>

                        {/* Action buttons */}
                        <div className="d-flex justify-content-center gap-2 mb-3">
                            {/* History navigation */}
                            <button
                                className="btn btn-outline-secondary btn-sm"
                                onClick={() => handleHistoryNavigation('prev')}
                                disabled={historyIndex >= quoteHistory.length - 1}
                                title="Previous quote"
                            >
                                <i className="bi bi-chevron-left"></i>
                            </button>

                            <button
                                className="btn btn-outline-secondary btn-sm"
                                onClick={() => handleHistoryNavigation('next')}
                                disabled={historyIndex <= 0}
                                title="Next quote"
                            >
                                <i className="bi bi-chevron-right"></i>
                            </button>

                            {/* Favorite button */}
                            <button
                                className="btn btn-outline-warning btn-sm"
                                onClick={handleToggleFavorite}
                                title={isCurrentQuoteFavorited ? "Remove from favorites" : "Add to favorites"}
                            >
                                <i className={`bi ${isCurrentQuoteFavorited ? 'bi-heart-fill text-warning' : 'bi-heart'}`}></i>
                            </button>

                            {/* New quote button */}
                            <button
                                className="btn btn-primary btn-sm"
                                onClick={handleNewQuote}
                                title="Get new quote"
                            >
                                <i className="bi bi-arrow-clockwise me-1"></i>
                                New Quote
                            </button>
                        </div>

                        {/* History indicator */}
                        <div className="text-muted small">
                            Quote {historyIndex + 1} of {quoteHistory.length}
                        </div>
                    </div>
                ) : (
                    <div className="text-muted">
                        <i className="bi bi-exclamation-triangle fs-1 mb-2"></i>
                        <p>Unable to load quote. Please try again.</p>
                        <button className="btn btn-primary btn-sm" onClick={handleNewQuote}>
                            Retry
                        </button>
                    </div>
                )}

                {/* Favorites count */}
                {favorites.length > 0 && (
                    <div className="mt-3 pt-3 border-top">
                        <small className="text-muted">
                            <i className="bi bi-heart-fill text-warning me-1"></i>
                            {favorites.length} favorite{favorites.length !== 1 ? 's' : ''} saved
                        </small>
                    </div>
                )}
            </div>
        </div>
    );
};

export default QuoteWidget;