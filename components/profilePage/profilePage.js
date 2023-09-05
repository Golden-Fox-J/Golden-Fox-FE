import axios from 'axios';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { MagicSpinner } from "react-spinners-kit";

const ProfilePage = ({ decodedToken, useResource }) => {
    const [userProducts, setUserProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState()
    const [proImage, setproImage] = useState(null)

    useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage) {

            let token_pef = localStorage.getItem('token')
            // console.log(11111,token_pef)

            setToken(JSON.parse(localStorage.getItem('token')))

            // console.log(token)
        }
    }, []);

    function handleImage(e) {
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
            Authorization: `Bearer ${token.access}`,
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

    useEffect(() => {
        const fetchUserProducts = async () => {
            try {
                const response = await axios.get(process.env.NEXT_PUBLIC_API_RESOURCE_URL);
                const allProducts = response.data;
                const filteredProducts = allProducts.filter((product) => product.owner === decodedToken.user_id);

                setUserProducts(filteredProducts);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching user products:', error);
            }
        };

        if (decodedToken) {
            fetchUserProducts();
        }
    }, [decodedToken]);

    const handleDelete = async (productId) => {
        try {
            await axios.delete(process.env.NEXT_PUBLIC_API_RESOURCE_URL + `${productId}`, {
                headers: {
                    Authorization: `Bearer ${decodedToken.access}`,
                },
            });

            setUserProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId));
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    const handleProductId = (id) => {
        localStorage.setItem('productId', id);
    };



    

    if (loading) {
        const styles = {
            height: '100vh',
            background: 'linear-gradient(to bottom, #E5C27C, #02000E)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        };
    
        return (
            <div style={styles}>
                <MagicSpinner size={130} color="#00ff89" loading={loading} />
            </div>
        );
    }    

    return (
        <>

            <div className="profile-container">
                {decodedToken ? (
                    <div className="profile-info">
                        <h2>Welcome, {decodedToken.username}</h2>
                        <p>Email: {decodedToken.email}</p>
                    </div>
                ) : (
                    <div className="login-message">
                        <p>Please log in to view your profile.</p>
                    </div>
                )}

                <div className="user-products">
                    <h3>Your Products</h3>
                    {userProducts.length === 0 ? (
                        <p>You haven't added any products yet.</p>
                    ) : (
                        <ul>
                            {userProducts.map((product) => (
                                <li key={product.id}>
                                    <p>Title: {product.Title}</p>
                                    <p>Description: {product.description}</p>
                                    <p>Price: {product.price} J</p>
                                    <p>Contact Info: {product.contact_info}</p>

                                    <button onClick={() => handleDelete(product.id)}>Delete</button>

                                    <Link className='productde' href="/productDetails">
                                        Show Details
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

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
            </div>

        </>
    );
};



export default ProfilePage;

