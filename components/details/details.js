import React from 'react';
import Image from 'next/image';
import { comment } from 'postcss';
import useResource from 'hooks/useResource';

export default function Details({ producTitle, response , comments ,decodedToken}) {

   
    const {createResource} = useResource("favourite_product")
    function handleAddToFav(productId){
        // console.log(1111111,decodedToken.user_id)
        // console.log(222222,productId)
        const body = {
            owner : decodedToken.user_id,
            Product : productId
        }
        createResource(body)
    }



    return (

        <div className='detailBody'>
            {/* {console.log(7777777,comments)} */}
            {/* {console.log(88888,decodedToken)} */}
            {response ? (response.map((product) => <div >{product.Title == producTitle ?
            <div className='detailCard'>

                <div className='detailImage'>
                    <Image className='detailImage' src={product.image} alt={product.Title} width='400' height='400' />
                </div>

                <div className='detailTexts'>
                    
                    <h2 className='detailTextss'>Title: {producTitle}</h2>
                    <p className='detailTextss'>Description: {product.description}</p>
                    <p className='detailTextss'>Price: {product.price} J</p>
                    <p className='detailTextss'>Contact Info: {product.contact_info}</p>
                    <p className='detailTextss'>Comments:</p>
                    {comments ? (comments.map((comment)=> comment.Product == product.id ? <p className='detailTextss'>{decodedToken.username}: {comment.body}</p> : <p></p>)) : <p></p>}
                    <div className='favButtonBody'><button className='favButton'>Add</button></div>
                    
                </div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <div className='detailHeart' key={product.id} onClick={()=>handleAddToFav(product.id)}><i class="fa fa-heart"></i></div>
                

            </div> : <p></p>}</div>)) : <p></p>}

        </div>



    )
}











