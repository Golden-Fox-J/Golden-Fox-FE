import React, { useEffect, useState } from 'react';



const ProfilePage = ({decodedToken,useResource}) => {

    
        
    const createResource_product = useResource().createResource
    // function handleAddToFav() {
    //     console.log(handleCreate)
    //     const body = handleCreate
    //     createResource_product(body)

    // }

    // last version 

    function handleCreate(e){
        e.preventDefault()
        const pro_body = {
            owner : decodedToken.user_id,
            owner_name : decodedToken.username,
            Title : e.target.Title.value,
            image : e.target.image.value,
            description : e.target.description.value,
            price : e.target.price.value,
            contact_info : e.target.contact_info.value,
            category : document.getElementById("category").value
        }
        
        createResource_product(pro_body)
        
    }


    return (
        <>
            <form onSubmit={handleCreate}>
                {/* <label>ownerId<inpu/></label> */}
                {/* <label>ownerName<inpu/></label> */}
                <label>Title<input type='text' name='Title'/></label>
                <label>Description<input type='text' name='description'/></label>
                <input type="file" id="image" name="image" accept="image/*"/>
                <label>Price<input type='number' name='price'/></label>
                <label>Contact info<input type='text' name='contact_info'/></label>
                <label for="cars">Choose a car:</label>
                <select name="category" id="category" >
                    <option value="cars">cars</option>
                    <option value="houses">houses</option>
                    <option value="electronics">electronics</option>
                </select>
                <button>create</button>

            </form>
        </>
    )
};



export default UserProfile;
