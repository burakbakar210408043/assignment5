# Assignment 5 - Simple Product Dashboard
Name: Burak Bakar-210408043

## File Organization
- `src/App.jsx`: Root component. Manages `showProducts` and `name` state. Renders the heading, toggle button, controlled input, greeting text, and conditionally renders `ProductList`.
- `src/components/ProductList.jsx`: Contains a static products array and renders the list using `.map()` with a stable unique `key`.
- `src/components/Product.jsx`: Presentational component that receives `title` and `price` via props and renders inside `Card`.
- `src/components/Card.jsx`: Layout wrapper component using `children` for composition.

## How to Run
```bash
npm install
npm run dev
