import { useState,useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Image from 'next/image'


export default function CategoryProduct(){

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
    
    
    const [categoryId, setcategoryId] = useState()
    const [category_type, setcategory_type] = useState()
    useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            setcategoryId(JSON.parse(localStorage.getItem('categoryId')))
            setcategory_type(localStorage.getItem('category_type'))
        }
    }, []);



      
    function handleProductId(id){
      localStorage.setItem("productId",id)
      
    }
    
    
    return(
        
      
      <div className="categoryProducts">
      <h2>{category_type}</h2>
      <hr className="categoryProductsLine"/>
      <div className="product-list">
        {/* {console.log(6666666,fetchResource().then(response=>{console.log(77777,response)}))} */}
        {/* {console.log(555555,products)} */}
        {products ? products.map(product => product.category == categoryId ? ( 
          <Link className='productde' href="/productDetails">
          <div key={product.id} className="product" onClick={()=>handleProductId(product.id)}>
            <Image src={product.image}  width='200' height='200' />
            <h3>{product.Title}</h3>
            <p>Price: {product.price} J</p>
          </div>
          </Link>
        ) : '') : ""}
        
      </div>
      </div>

  
    )
}