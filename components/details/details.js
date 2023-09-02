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
            Product: productId,
            owner_name: decodedToken.username,
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
        body.owner_name = decodedToken.username
        body.email = event.target.email.value
        body.body = event.target.comment.value
        createResource_comment(body)
    }






    return (
        <div className='outDetail'>

            <div className='detailBody'>
                {/* {console.log(7777777,comments)} */}
                {/* {console.log(88888, decodedToken)} */}
                {/* {console.log(99999,products)} */}
                {products ? (products.map((product) => <div >{product.Title == producTitle ?

                    <div>

                        <div className='detailCard'>

                            <div className='detailImageC'>
                                <Image className='detailImage' src={product.image} alt={product.Title} width='500' height='420' />
                            </div>

                            <div className='detailTexts'>

                                <h2 className='detailTitle'>{producTitle}</h2>
                                <p className='detailDescription'><p className='Details'>Details:</p>{product.description}</p>
                                <p className='detailPrice'>CURRENT PRICE: &nbsp;&nbsp;<p className='jo'>{product.price} J</p></p>
                                <p className='detailContact'><p className='ContactInfo'>Contact Info: &nbsp;</p><p className='number'>{product.contact_info}</p></p>
                                {decodedToken ? <button key={product.id} onClick={() => handleAddToFav(product.id)} className='button-24' role="button">Add To Fav</button> : <p></p>}




                            </div>

                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                            {/* {decodedToken ? <div className='detailHeart' key={product.id} onClick={() => handleAddToFav(product.id)}><i class="fa fa-heart"></i></div> : <p></p>} */}


                        </div>

                        <div className='commentSection'>
                            <p className='commentSection_1'>Comments:</p>
                            {comments ? (comments.map((comment) => comment.Product == product.id ? <p className='commentSection_2'>{comment.owner_name}:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{comment.body}<p>{comment.email}</p></p> : <p></p>)) : <p></p>}


                            {decodedToken ? (<form className='addCommentForm' onSubmit={handleAddComment}>

                                <div className="page">
                                    <div className="field field_v1">
                                        <label for="first-name" className="ha-screen-reader">Text</label>
                                        <input name="comment" id="first-name" className="field__input" placeholder=""/>
                                            <span className="field__label-wrap" aria-hidden="true">
                                                <span className="field__label">Text</span>
                                            </span>
                                    </div>
                                    <div className="field field_v2">
                                        <label for="last-name" className="ha-screen-reader">Email</label>
                                        <input name='email' id="last-name" className="field__input" placeholder=""/>
                                            <span className="field__label-wrap" aria-hidden="true">
                                                <span className="field__label">Email</span>
                                            </span>
                                    </div>
                                    
                                </div>
                                

                                <button class="button-36" role="button" type='submit' onClick={() => addComment(decodedToken.user_id, product.id)}>Add Comment</button>
                            </form>
                            ) : ''}
                        </div>

                    </div>


                    : <p></p>}</div>)) : <p></p>}

            </div>

        </div>



    )
}











