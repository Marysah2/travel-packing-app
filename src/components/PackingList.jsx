import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";

const PackingList = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [tripName, setTripName] = useState("");
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;
    const savedItems = localStorage.getItem(`packingItems_${user.id}`);
    if (savedItems) {
      setItems(JSON.parse(savedItems));
    }
  }, [user]);

  const saveItems = (newItems) => {
    if (user) {
      localStorage.setItem(`packingItems_${user.id}`, JSON.stringify(newItems));
      setItems(newItems);
    }
  };

  const addItem = () => {
    if (!newItem.trim() || !user) return;
    
    const newItemObj = {
      id: Date.now().toString(),
      name: newItem,
      packed: false,
      userId: user.id,
      tripName: tripName || "General",
      createdAt: new Date().toISOString()
    };
    
    const updatedItems = [...items, newItemObj];
    saveItems(updatedItems);
    setNewItem("");
  };

  const togglePacked = (id, currentStatus) => {
    const updatedItems = items.map(item => 
      item.id === id ? { ...item, packed: !currentStatus } : item
    );
    saveItems(updatedItems);
  };

  const deleteItem = (id) => {
    const updatedItems = items.filter(item => item.id !== id);
    saveItems(updatedItems);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addItem();
    }
  };

  const packedCount = items.filter(item => item.packed).length;
  const totalCount = items.length;

  if (!user) {
    return (
      <div className="card text-center">
        <h2>🎒 Packing List</h2>
        <p>Please log in to create and manage your packing lists.</p>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="flex justify-between align-center mb-1">
        <h2>
          🎒 Packing List
        </h2>
        {totalCount > 0 && (
          <div style={{fontSize: '0.9rem', color: '#666'}}>
            {packedCount}/{totalCount} packed
          </div>
        )}
      </div>

      <div className="mb-1">
        <div className="form-group">
          <input
            placeholder="Trip name (optional)..."
            value={tripName}
            onChange={(e) => setTripName(e.target.value)}
          />
        </div>
        <div className="flex">
          <input
            placeholder="Add packing item..."
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            onKeyPress={handleKeyPress}
            style={{flex: 1, borderRadius: '5px 0 0 5px'}}
          />
          <button 
            onClick={addItem}
            style={{borderRadius: '0 5px 5px 0', padding: '0.75rem 1.5rem'}}
          >
            Add
          </button>
        </div>
      </div>

      {totalCount > 0 && (
        <div className="progress-bar">
          <div className="progress-fill" 
               style={{ width: `${totalCount > 0 ? (packedCount / totalCount) * 100 : 0}%` }}>
          </div>
        </div>
      )}

      <div style={{maxHeight: '400px', overflowY: 'auto'}}>
        {items.length === 0 ? (
          <p className="text-center" style={{padding: '2rem 0', color: '#666'}}>No items yet. Add your first packing item!</p>
        ) : (
          items.map((item) => (
            <div
              key={item.id}
              className={`packing-item ${item.packed ? 'packed' : ''}`}
            >
              <div className="flex align-center" style={{flex: 1}}>
                <input
                  type="checkbox"
                  checked={item.packed}
                  onChange={() => togglePacked(item.id, item.packed)}
                  style={{marginRight: '0.75rem'}}
                />
                <span
                  style={{cursor: 'pointer', flex: 1}}
                  onClick={() => togglePacked(item.id, item.packed)}
                >
                  {item.name}
                </span>
                {item.tripName && item.tripName !== "General" && (
                  <span style={{fontSize: '0.75rem', backgroundColor: '#e3f2fd', color: '#1976d2', padding: '0.25rem 0.5rem', borderRadius: '3px', marginLeft: '0.5rem'}}>
                    {item.tripName}
                  </span>
                )}
              </div>
              <button
                className="btn-danger"
                onClick={() => deleteItem(item.id)}
                title="Delete item"
                style={{padding: '0.25rem', fontSize: '0.8rem'}}
              >
                🗑️
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PackingList;
