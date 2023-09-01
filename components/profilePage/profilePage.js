import React, { useEffect, useState } from 'react';

function UserProfile() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem('access_token');
        const response = await fetch('http://127.0.0.1:8000/api/profile/', {
          headers: {
            Authorization: `Bearer ${token}`, // Include JWT token
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          console.error('Error fetching user profile:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div>
      <h1>User Profile</h1>
      {userData && (
        <div>
          <h2>{userData.user_profile.username}</h2>
          <h3>Favorite Products</h3>
          <ul>
            {userData.fav_products.map(product => (
              <li key={product.id}>{product.Product.Title}</li>
            ))}
          </ul>
          <h3>Comments</h3>
          <ul>
            {userData.comments.map(comment => (
              <li key={comment.id}>{comment.body}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
