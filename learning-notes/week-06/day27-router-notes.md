# Day 27: React Router Notes

## React Router Hooks

### useParams
- Reads dynamic segments from the URL
- Returns an object with key-value pairs
- Example: `/posts/:id` → `{ id: "123" }`
- Used to get data based on URL parameters

### useNavigate
- Programmatic navigation hook
- Returns a function to navigate to different routes
- Can go forward: `navigate('/path')`
- Can go back: `navigate(-1)`
- Can replace current history: `navigate('/path', { replace: true })`

### Link vs useNavigate
- **Link**: Declarative navigation, renders as `<a>` tag
- **useNavigate**: Imperative navigation, used in event handlers
- Use Link for user clicks, useNavigate for programmatic redirects

## Defense Q: useParams ra useNavigate kasari different chha? Kuna situation ma kuna use garchau?
useParams URL bata dynamic values read garchha, like post ID. useNavigate programmatically navigate garchha, like after form submit or button click. Link is for user-initiated navigation, useNavigate for code-triggered navigation.