import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
// import './favorite.css';

const FavoriteListFetcher = ({ products, decodedToken }) => {
  const [favoriteData, setFavoriteData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API endpoint
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/v1/Products/Favourite_product');
        setFavoriteData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className='outDetail'>
      <div className='detailBody'>
        {favoriteData ? (
          favoriteData.map((x) => {
            if (x.owner === decodedToken.user_id) {
              return (
                <div key={x.id}>
                  {products ? (
                    products.map((i) => {
                      if (i.id === x.Product) {
                        return (
                          <div key={i.id}>
                            <div className='detailCard'>
                              <div className='detailImageC'>
                                <Image className='detailImage' src={i.image} alt={i.Title} width='400' height='400' />
                              </div>
                              <div className='detailTexts'>
                                <h2 className='detailTitle'>Title: {i.Title}</h2>
                                <p className='detailDescription'>Description: {i.description}</p>
                                <p className='detailPrice'>Price: {i.price} J</p>
                                <p className='detailContact'>Contact Info: {i.contact_info}</p>
                              </div>
                            </div>
                          </div>
                        );
                      } else {
                        return null;
                      }
                    })
                  ) : null}
                </div>
              );
            } else {
              return null;
            }
          })
        ) : null}
      </div>
    </div>
  );
};

export default FavoriteListFetcher;