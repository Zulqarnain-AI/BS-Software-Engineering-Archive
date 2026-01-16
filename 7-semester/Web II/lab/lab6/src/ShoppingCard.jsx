import React, { useState } from 'react'
function ShoppingCart() {
  const [cartItems, setCartItems] = useState([ ]);

  const [newItemName, setNewItemName] = useState('');
 
  const generateId = () => {
    return Math.max(0, ...cartItems.map(item => item.id)) + 1;
  };

  
  const handleAddItem = (e) => {
    e.preventDefault();
    if (newItemName.trim() === '')
         return;
    const newItem = {
      id: generateId(),
      name: newItemName.trim(),
      purchased: false,
    };

    
    setCartItems(prevItems => [...prevItems, newItem]);
    setNewItemName(''); 
  };

  
  const handleTogglePurchased = (id) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, purchased: !item.purchased } : item
      )
    );
  };

  
  const handleRemoveItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  return (
    <div >
      <h1>Dynamic Shopping Cart</h1>
      
      
      <form onSubmit={handleAddItem} >
        <input
          type="text"
          placeholder="Enter item name..."
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
          
        />

        <button type="submit" disabled={newItemName.trim() === ''}> Add Item</button>
      </form>
      
      <hr />

      
      {cartItems.length === 0 ? (
        <p >Your cart is empty! Time to start shopping!</p>
      ) : (
        <ul >
          {cartItems.map(item => (
            <li
              key={item.id}
              className={`cart-item ${item.purchased ? 'purchased' : ''}`}
            >
              <span 
                className="item-name"
                onClick={() => handleTogglePurchased(item.id)}
                style={{ cursor: 'pointer', textDecoration: item.purchased ? 'line-through' : 'none' }}
                // title={item.purchased ? "Click to unmark as purchased" : "Click to mark as purchased"}
              >
                {item.name}
              </span>
              
              <div className="item-actions">
                <button
                  onClick={() => handleTogglePurchased(item.id)}
                >
                  {item.purchased ? 'Unmark' : 'Mark Purchased'}
                </button>

                <button
                  onClick={() => handleRemoveItem(item.id)}
                  
                >
                  Remove 
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ShoppingCart;