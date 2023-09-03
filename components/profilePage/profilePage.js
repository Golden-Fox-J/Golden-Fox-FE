import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProfilePage = ({ decodedToken, useResource }) => {
  const [comments, setComments] = useState([]);
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  useEffect(() => {
    // Fetch user's comments
    axios.get('/api/user/comments/')
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user comments:', error);
      });

    // Fetch user's favorite products
    axios.get('/api/user/favorite_products/')
      .then((response) => {
        setFavoriteProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user favorite products:', error);
      });
  }, []);

  function handleCreate(e) {
    e.preventDefault()
    const pro_body = {
      owner: decodedToken.user_id,
      owner_name: decodedToken.username,
      Title: e.target.Title.value,
      image: e.target.image.value,
      description: e.target.description.value,
      price: e.target.price.value,
      contact_info: e.target.contact_info.value,
      category: document.getElementById("category").value
    }

    createResource_product(pro_body)

  }

  return (
    <div className="profile-container">
      {decodedToken ? (
        <div className="profile-info">
          <h2>Welcome, {decodedToken.username}</h2>
          <p>Email: {decodedToken.email}</p>
        </div>
      ) : (
        <div className="login-message">
          <p>Please log in to view your profile.</p>
        </div>
      )}
  
      {decodedToken ? (
        <>
          <div className="profile-section">
            <h2>Comments</h2>
            {comments.length > 0 ? (
              comments.map((comment) => (
                <div key={comment.id}>
                  <p>{comment.body}</p>
                </div>
              ))
            ) : (
              <p>No comments found.</p>
            )}
          </div>
  
          <div className="profile-section">
            <h2>Favorite Products</h2>
            {favoriteProducts.length > 0 ? (
              favoriteProducts.map((product) => (
                <div key={product.id}>
                  <p>{product.title}</p>
                </div>
              ))
            ) : (
              <p>No favorite products added.</p>
            )}
          </div>
  
          <form onSubmit={handleCreate} className="profile-section">
            <h2>Create a Resource</h2>
            <label>Title</label>
            <input type="text" name="Title" />
            <label>Description</label>
            <input type="text" name="description" />
            <label>Image</label>
            <input type="file" id="image" name="image" accept="image/*" />
            <label>Price</label>
            <input type="number" name="price" />
            <label>Contact Info</label>
            <input type="text" name="contact_info" />
            <label htmlFor="category">Choose a category:</label>
            <select name="category" id="category">
              <option value="cars">Cars</option>
              <option value="houses">Houses</option>
              <option value="electronics">Electronics</option>
            </select>
            <button>Create</button>
          </form>
        </>
      ) : null}
    </div>
  );
  }
  
  export default ProfilePage;
  