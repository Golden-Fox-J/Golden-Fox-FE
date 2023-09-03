import useResource from 'hooks/useResource';
import Image from 'next/image'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios';


function FeaturedProducts() {



  function handleProductId(id){
    localStorage.setItem("productId",id)
    
  }


  
  const [products , setproducts] = useState()
  useEffect(() => {
      async function getProducts() {
          try {
              const response = await axios.get(process.env.NEXT_PUBLIC_API_RESOURCE_URL);
              setproducts(response.data);
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      }
      getProducts();
  }, []);
 
  

  

  return (

    <section className="featured-products">
      <h2 className='text1'>Featured Products</h2>
      <hr />
      <div className="product-list">

        
        {products ? products.slice(0,12).map(product => (
          <Link className='productde' href="/productDetails">
          <div key={product.id} className="product" onClick={()=>handleProductId(product.id)}>
            <Image src={product.image}  width='200' height='200' />
            <h3>{product.Title}</h3>
            <p>Price: {product.price} J</p>
          </div>
          </Link>
        )) : ""}
        
      </div>

    </section>
  );
}


export default FeaturedProducts;


