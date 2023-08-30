import useResource from 'hooks/useResource';
import Image from 'next/image'


function FeaturedProducts() {

//   async function fetchResource() {
//     const response = await fetch(process.env.NEXT_PUBLIC_API_RESOURCE_URL);
//     const jsonResponse = await response.json();
//     return jsonResponse; // Return the array directly
//   }
  // const orig = 'http://localhost:8000/'

  
  const { response, createResource, deleteResource } = useResource()
  

  const products = response

  return (

    <section className="featured-products">
      <h2>Products</h2>
      <div className="product-list">

        {/* {console.log(6666666,fetchResource().then(response=>{console.log(77777,response)}))} */}
        
        {products ? products.map(product => (
          <div key={product.id} className="product">
            <Image src={product.image} alt={product.Title} width='200' height='200' />
            <h3>{product.Title}</h3>
            <p>Price: {product.price}</p>
          </div>
        )) : ""}
        
      </div>

    </section>
  );
}


export default FeaturedProducts;


