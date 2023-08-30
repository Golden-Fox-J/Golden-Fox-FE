import React, { useState } from 'react';

const FavoriteList = () => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (item) => {
    if (!favorites.includes(item)) {
      setFavorites([...favorites, item]);
    }
  };

  const removeFromFavorites = (item) => {
    setFavorites(favorites.filter((favorite) => favorite !== item));
  };

  return (
    <div>
      <h2>Favorite List</h2>
      <ul>
        {favorites.map((item, index) => (
          <li key={index}>
            {item}{' '}
            <button onClick={() => removeFromFavorites(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addToFavorites('Item ' + (favorites.length + 1))}>
        Add Item
      </button>
    </div>
  );
};

export default FavoriteList;
