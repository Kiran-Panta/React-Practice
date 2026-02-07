// Custom hook to set document title dynamically
// This hook updates the browser tab title based on the current page
// Useful for better UX and SEO

import { useEffect } from 'react';

function useDocumentTitle(title) {
    useEffect(() => {
        // Store the original title to restore it later
        const originalTitle = document.title;

        // Set the new title
        document.title = title;

        // Cleanup function: restore original title when component unmounts
        return () => {
            document.title = originalTitle;
        };
    }, [title]); // Re-run when title changes
}

export default useDocumentTitle;

// Defense Q: Custom hooks kasari banau? Why useful?
// Answer: Custom hooks extract reusable logic from components.
// They start with 'use', can use other hooks inside, return values/objects.
// Useful for: code reusability, separation of concerns, testing easier,
// sharing logic between components without prop drilling.