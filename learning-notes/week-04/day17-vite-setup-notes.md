# Vite Setup Notes - Day 17

## Why Vite is faster than CRA
Vite uses ES modules and native browser support, no bundling on dev server start. CRA bundles everything upfront, slow for large apps. Vite only transforms on demand.

## Config files
- package.json: project dependencies and scripts
- vite.config.js: Vite build tool config
- tailwind.config.js: Tailwind CSS config for content paths
- postcss.config.js: PostCSS config for Tailwind processing
- index.html: main HTML file with root div
- src/main.jsx: entry point, renders App into root
- src/App.jsx: main React component
- src/index.css: global styles with Tailwind directives</content>
<parameter name="filePath">d:\React-js(Practice)\learning-notes\week-04\day17-vite-setup-notes.md