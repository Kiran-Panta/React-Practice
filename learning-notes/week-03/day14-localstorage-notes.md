# LocalStorage Notes - Day 14

## localStorage
- Stores data with no expiration
- Data persists even after browser close
- Up to 5-10MB per domain
- Only strings, use JSON.stringify/parse for objects

## sessionStorage
- Stores data for session only
- Data lost when tab/window closed
- Same size limit as localStorage
- Good for temporary data

## Cookies
- Sent with every HTTP request
- Small size, 4KB
- Can set expiration
- Can be httpOnly for security
- Used for authentication, tracking

localStorage for persistent user data, sessionStorage for temp, cookies for server communication.