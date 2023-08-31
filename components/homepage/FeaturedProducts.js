import useResource from 'hooks/useResource';
import Image from 'next/image'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios';


function FeaturedProducts() {

//   async function fetchResource() {
//     const response = await fetch(process.env.NEXT_PUBLIC_API_RESOURCE_URL);
//     const jsonResponse = await response.json();
//     return jsonResponse; // Return the array directly
//   }
  // const orig = 'http://localhost:8000/'

  

  
  // const { response, createResource, deleteResource } = useResource()

  function handleProductId(title){
    localStorage.setItem("producTitle",title)
    
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
      <h2>Products</h2>
      <div className="product-list">

        {/* {console.log(6666666,fetchResource().then(response=>{console.log(77777,response)}))} */}
        {console.log(555555,products)}
        {products ? products.map(product => (
          <Link href="/productDetails">
          <div key={product.id} className="product" onClick={()=>handleProductId(product.Title)}>
            <Image src={product.image}  width='200' height='200' />
            <h3>{product.Title}</h3>
            <p>Price: {product.price}</p>
          </div>
          </Link>
        )) : ""}
        
      </div>

    </section>
  );
}


export default FeaturedProducts;


