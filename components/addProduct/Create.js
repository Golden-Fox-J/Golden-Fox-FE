import useResource from 'hooks/useResource'; // Adjust the import path as needed

import React, { useState } from 'react';


export default function CreateProductForm() {
  const [formData, setFormData] = useState({
    title: '',
    image: null,
    description: '',
    price: 0,
    contact_info: '',
    category: '',
  });

  
  const url = process.env.NEXT_PUBLIC_API_RESOURCE_URL
  const { createResource } = useResource(url); // Initialize the useResource hook with the API endpoint

  

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Create the product using the createResource function from useResource
      await createResource(formData); // This sends a POST request with formData
      console.log('Product created successfully!');
      // Clear the form data after successful creation if needed
      setFormData({
        title: '',
        image: null,
        description: '',
        price: 0,
        contact_info: '',
      
      });
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    const newValue = type === 'file' ? files[0] : value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };
  
  return (
    <div className='body_create'>
<section className="max-w-4xl p-6 mx-auto border border-green-600 rounded-2xl shadow-2xl mt-20 bg-gradient-to-br from-green-500  via-green-800 to-yellow-30">   
 <h1 className="text-2xl font-bold text-gold  text-white capitalize border-dashed rounded-m text-2xl"  style={{ width: "18.5rem", height:"3.00rem"}}>Create Product</h1>
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
     <div className=" dark:text-gray-200 ">
      <label className="font-bold text-xl  text-blue" htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        placeholder="Name of the product"
        required
        value={formData.title}
        onChange={handleChange}
        className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
      />
    </div>
    <div className=" dark:text-gray-200">
      <label className="font-bold text-xl " htmlFor="description">Description</label>
      <textarea
        id="description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
      />
    </div>
    <div>
      <label htmlFor="image" className="block font-bold text-xl  ">Image</label>
      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleChange}
        />
      </div>
    </div>
    <div className="dark:text-gray-200">
      <label className=" text-xl  font-bold" htmlFor="price">Price</label>
      <input
        type="number"
        id="price"
        name="price"
        value={formData.price}
        placeholder="Price"
        required
        onChange={handleChange}
        className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
      />
    </div>
    <div className=" dark:text-gray-200">
      <label className="font-bold text-xl " htmlFor="contact_info">Contact Info</label>
      <input
        type="text"
        id="contact_info"
        name="contact_info"
        value={formData.contact_info}
        placeholder="Contact Information"
        required
        onChange={handleChange}
        className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
      />
    </div>

   
    <div className="px-4 mt-10 flex justify-end">
    <button type="submit" className="px-24 mt-4 py-4 leading-2 text-2xl font-bold transition-colors duration-200 transform bg-rose-900 text-white rounded-2xl hover:bg-green-700 focus:ring dark:focus:border-blue-500 focus:bg-gray-300">Create</button>
      </div>
   
  </form>
</section></div>

);
}
