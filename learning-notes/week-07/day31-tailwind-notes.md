# Day 31: Tailwind CSS Personal Cheatsheet

## Most Used Utilities

### Layout
- `flex` - display: flex
- `grid` - display: grid
- `block` - display: block
- `hidden` - display: none

### Spacing
- `m-4` - margin: 1rem
- `p-4` - padding: 1rem
- `mx-auto` - margin-left/right: auto
- `space-x-4` - space between children horizontally

### Colors
- `bg-blue-500` - background-color: rgb(59 130 246)
- `text-gray-700` - color: rgb(55 65 81)
- `border-red-300` - border-color: rgb(252 165 165)

### Typography
- `text-lg` - font-size: 1.125rem
- `font-bold` - font-weight: 700
- `text-center` - text-align: center
- `uppercase` - text-transform: uppercase

### Sizing
- `w-full` - width: 100%
- `h-16` - height: 4rem
- `max-w-md` - max-width: 28rem

### Borders & Shadows
- `rounded-lg` - border-radius: 0.5rem
- `border` - border-width: 1px
- `shadow-lg` - box-shadow: large

### Responsive
- `md:flex` - @media (min-width: 768px) { display: flex }
- `lg:grid-cols-3` - @media (min-width: 1024px) { grid-template-columns: repeat(3, minmax(0, 1fr)) }

### Hover & Focus
- `hover:bg-blue-600` - &:hover { background-color: rgb(37 99 235) }
- `focus:ring-2` - &:focus { box-shadow: 0 0 0 2px }

### Flexbox
- `justify-center` - justify-content: center
- `items-center` - align-items: center
- `flex-col` - flex-direction: column

### Grid
- `grid-cols-3` - grid-template-columns: repeat(3, minmax(0, 1fr))
- `gap-4` - gap: 1rem

## Custom Classes I Often Create
- `.btn-primary` - @apply bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600
- `.card` - @apply bg-white rounded-lg shadow-md p-6
- `.input` - @apply border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500

## Tips
- Use `@apply` in CSS for reusable component classes
- Use `@responsive` for custom breakpoints
- Use `@screen` for media queries in CSS
- Remember: p-4 = 1rem = 16px at default font size