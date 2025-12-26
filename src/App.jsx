import { useState } from "react";
import ProductList from "./components/ProductList.jsx";

export default function App() {
  const [showProducts, setShowProducts] = useState(true);
  const [name, setName] = useState("");

  function handleToggle() {
    setShowProducts((prev) => !prev);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  return (
    <div style={{ maxWidth: 600, margin: "40px auto", padding: 16 }}>
      <h1>React Product Dashboard</h1>

      <button onClick={handleToggle} style={{ marginBottom: 12 }}>
        {showProducts ? "Hide Products" : "Show Products"}
      </button>

      <div style={{ marginBottom: 12 }}>
        <label style={{ display: "block", marginBottom: 6 }}>Your name:</label>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Type your name..."
          style={{ width: "100%", padding: 8, boxSizing: "border-box" }}
        />
      </div>

      <p>Hello, {name}</p>

      {showProducts ? <ProductList /> : null}
    </div>
  );
}
