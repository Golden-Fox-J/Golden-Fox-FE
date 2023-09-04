import axios from 'axios';
import { useState,useEffect } from 'react';





const ProfilePage = ({decodedToken,useResource}) => {

    const [token, setToken] = useState()
    useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            
            let token_pef = localStorage.getItem('token')
            // console.log(11111,token_pef)

            setToken(JSON.parse(localStorage.getItem('token')))

            // console.log(token)
        }
    }, []);
        
    
    
    
    const [proImage , setproImage] = useState(null)
    function handleImage(e){
        setproImage(e.target.files[0])
    }  

    const handleCreate = async (e) => {
        e.preventDefault();
        const formData = new FormData();
      
        formData.append("image", proImage);
        formData.append("owner", decodedToken.user_id);
        formData.append("owner_name", decodedToken.username);
        formData.append("Title", e.target.Title.value);
        formData.append("description", e.target.description.value);
        formData.append("price", e.target.price.value);
        formData.append("contact_info", e.target.contact_info.value);
        formData.append("category", e.target.category.value);
       

        const headers = {
          Authorization: `Bearer ${token.access}`, // Use template literals for interpolation
        };
      
        try {
          const response = await axios.post(
            process.env.NEXT_PUBLIC_API_RESOURCE_URL,
            formData,
            { headers }
          );
      
          console.log(222222, response.data);
        } catch (error) {
          console.error('Error:', error);
        }

    }


    return (
        <>
            <form id="imageUploadForm" onSubmit={handleCreate}>
                
                <label>Title<input type='text' name='Title'/></label>
                <label>Description<input type='text' name='description'/></label>

                <input onChange={handleImage} type="file"  name='image' />

                <label>Price<input type='number' name='price'/></label>
                <label>Contact info<input type='text' name='contact_info'/></label>
                <label for="cars">Choose a car:</label>
                <select name="category" id="category" >
                    <option value="1">cars</option>
                    <option value="2">houses</option>
                    <option value="3">phones</option>
                </select>
                <button type="submit">create</button>

            </form>
        </>
    )
};



export default ProfilePage;
