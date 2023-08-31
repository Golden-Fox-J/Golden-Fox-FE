import React from 'react';
import Image from 'next/image';
import { comment } from 'postcss';
import useResource from 'hooks/useResource';
import { useState, useEffect } from 'react';

export default function Details({ producTitle, comments, decodedToken, products }) {



    const createResource_fav = useResource("Favourite_product").createResource
    function handleAddToFav(productId) {
        const body = {
            owner: decodedToken.user_id,
            Product: productId
        }
        createResource_fav(body)
    }



    let body = {}
    function addComment(ownerId, productId) {
        body.owner = ownerId
        body.Product = productId
    }
    const createResource_comment = useResource("comment").createResource
    function handleAddComment(event) {

        event.preventDefault()
        body.email = event.target.email.value
        body.body = event.target.comment.value
        createResource_comment(body)
    }






    return (
        <div className='outDetail'>

            <div className='detailBody'>
                {/* {console.log(7777777,comments)} */}
                {/* {console.log(88888,decodedToken)} */}
                {/* {console.log(99999,products)} */}
                {products ? (products.map((product) => <div >{product.Title == producTitle ?

                    <div>

                        <div className='detailCard'>

                            <div className='detailImageC'>
                                <Image className='detailImage' src={product.image} alt={product.Title} width='400' height='400' />
                            </div>

                            <div className='detailTexts'>

                                <h2 className='detailTitle'>Title: {producTitle}</h2>
                                <p className='detailDescription'>Description: {product.description}</p>
                                <p className='detailPrice'>Price: {product.price} J</p>
                                <p className='detailContact'>Contact Info: {product.contact_info}</p>
                                <p className='detailComment'>Comments:</p>
                                {comments ? (comments.map((comment) => comment.Product == product.id ? <p className='detailcommentText'>{comment.body}</p> : <p></p>)) : <p></p>}
                                
                                {decodedToken ? <div className='favButtonBody'><button className='favButton'>Add</button></div> : <p></p>}


                            </div>
                            
                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                            {decodedToken ? <div className='detailHeart' key={product.id} onClick={() => handleAddToFav(product.id)}><i class="fa fa-heart"></i></div> : <p></p>}


                        </div>



                        {decodedToken ? (<form className='addCommentForm' onSubmit={handleAddComment}>
                            <div><label>add your Email<input name='email' type='email' placeholder='add your Email'></input ></label></div>
                            <div><label>add your comment<input name='comment' type='text' placeholder='add your comment'></input></label></div>
                            <button className='favButton' type='submit' onClick={() => addComment(decodedToken.user_id, product.id)}>Add Comment</button>
                        </form>
                        ) : ''}

                    </div>


                    : <p></p>}</div>)) : <p></p>}

            </div>

        </div>



    )
}











