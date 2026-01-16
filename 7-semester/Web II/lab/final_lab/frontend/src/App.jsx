import React, { useState, useEffect } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // URL of your Express API
  const API_URL = "http://localhost:5000/api/products";

  // TASK 3: Fetch products from Backend on load
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  // TASK 4: POST a new product to MongoDB via Backend
  const addProduct = async () => {
    const newProduct = { name, price: Number(price), category: "Jewelry" };

    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct)
    });

    if (response.ok) {
      // Refresh list after successful save
      const updatedData = await response.json();
      setProducts([...products, newProduct]); 
      setName(""); setPrice("");
    }
  };

  return (
    <div style={{ padding: '40px' }}>
      <h1>Jewelry Inventory Management</h1>
      
      <div className="form">
        <input placeholder="Product Name" value={name} onChange={e => setName(e.target.value)} />
        <input placeholder="Price" type="number" value={price} onChange={e => setPrice(e.target.value)} />
        <button onClick={addProduct}>Add to Inventory</button>
      </div>

      <hr />

      <h2>Current Stock</h2>
      <ul>
        {products.map((p, index) => (
          <li key={index}>{p.name} - ${p.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;