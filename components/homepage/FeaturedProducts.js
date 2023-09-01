
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
=======
// import image1 from '../../public/images/w1.jpg';
// import image2 from '../../public/images/w2.jpg';
// import image3 from '../../public/images/w3.jpg';
// import useResource from 'hooks/useResource';
// // import Image from 'next/image'

// const featuredProducts = [
//   { id: 1, name: 'Product 1', price: 19.99, image: image1 },
//   { id: 2, name: 'Product 2', price: 29.99, image: image2 },
//   { id: 3, name: 'Product 3', price: 14.99, image: image3 },
// ];


// function FeaturedProducts() {

//   // const orig = 'http://localhost:8000/'
//   const { response, createResource, deleteResource } = useResource()

//   const products = response

//   return (

//     <section className="featured-products">
//       {console.log(products)}
//       <h2>Featured Products</h2>
//       <div className="product-list">
//         {products ? products.map(product => (
//           <div key={product.id} className="product">
//             <img src={product.image} alt={product.Title} width='200' height='200' />
//             <h3>{product.Title}</h3>
//             <p>Price: {product.price}</p>
//           </div>
//         )) : ""}

        
//       </div>

//     </section>
//   );
// }



export default FeaturedProducts;

// export default FeaturedProducts;



