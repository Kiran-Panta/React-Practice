# Responsive Design Notes - Day 8

## Viewport Meta Tag
The viewport meta tag is needed because without it, mobile browsers assume the page is desktop width and zoom out, making text small. It tells browser to use device width.

## Breakpoints
Breakpoints are screen sizes where layout changes. I choose 768px for tablet (iPad), 480px for mobile (phones). These are common values from Bootstrap.

## Mobile-First vs Desktop-First
Mobile-first: start with mobile styles, then add media queries for larger screens. Pros: faster loading on mobile, easier to add features. Cons: more code for desktop.

Desktop-first: start with desktop, then override for smaller. Pros: familiar for desktop devs. Cons: mobile might have issues if not careful.

I prefer mobile-first because most users are on mobile.