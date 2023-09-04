import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import useResource from 'hooks/useResource';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';


const FavoriteListFetcher = ({ products, decodedToken }) => {
  const [favoriteData, setFavoriteData] = useState([]);
  const [loading, setLoading] = useState(true);


  const { response, createResource, deleteResource } = useResource(`Favourite_product/`)
  function handleRemoveFromFavorites (id){
      deleteResource(id)
  }

  function handleProductId(id){
    localStorage.setItem("productId",id)
    
  }

 

  

  useEffect(() => {
    // Fetch data from the API endpoint
    const fetchData = async () => {
      try {
        const response = await axios.get(process.env.NEXT_PUBLIC_API_RESOURCE_URL+'Favourite_product');
        setFavoriteData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [favoriteData]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="favourite_product">
      <h2 className='ftext1'>Favourite List</h2>
      <hr />
      <div className="product-list">
      
        {favoriteData ? (
          favoriteData.map((x) => {
            if (x.owner === decodedToken.user_id) {
              return (
                <div key={x.id}>
                  {products ? (
                    products.map((i) => {
                      if (i.id === x.Product) {
                        return (
                          <div className="product-list">
                          <div key={i.id} className="product" onClick={()=>handleProductId(i.id)}>
                          
                          <Link className='productde' href="/productDetails">
                            <Image src={i.image}  width='200' height='200' />
                            <h3>{i.Title}</h3>
                            <div className='p_r_f'><p>Price: {i.price} J</p></div>
                            
                          </Link>
                          <button className="remove_buttonf" key={x.id} onClick={() => { handleRemoveFromFavorites(x.id); }}>
                            <FontAwesomeIcon icon={faTrashAlt} /> {/* Font Awesome trash icon */}
                            </button>
                          
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