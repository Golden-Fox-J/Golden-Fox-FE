
import { useState } from 'react';

export default function CreateProductForm() {
  const [formData, setFormData] = useState({
    owner: '',
    title: '',
    image: null, 
    description: '',
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
   
    const newValue = type === 'file' ? files[0] : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

   
    const formDataToSend = new FormData();
    formDataToSend.append('owner', formData.owner);
    formDataToSend.append('title', formData.title);
    formDataToSend.append('image', formData.image);
    formDataToSend.append('description', formData.description);

    try {
      const response = await fetch('http://127.0.0.1:8000/Products/create/', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
      
        console.log('Product created successfully!');
      } else {
        
        console.error('Failed to create product.');
      }
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  return (
    <section className="max-w-4xl rounded-2xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20  ">

<h1 className="text-2xl font-bold text-gold capitalize bg-pink-500  border-dashed rounded-xl " style={{ width: "12.5rem" }}>Create Product</h1>    
 
  <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
        <div className="text-white dark:text-gray-200">
          <label className="font-bold" htmlFor="owner">Owner</label>
          <input
            type="text"
            id="owner"
            name="owner"
            value={formData.owner}
            placeholder="user name"
            required
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>
  
        <div className="text-white dark:text-gray-200">
          <label className="font-bold" htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Name of the product "
            required
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>
  
        <div className="text-white dark:text-gray-200">
          <label className="font-bold" htmlFor="description">Description</label>
          <textarea 
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
           
            className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>
  
        <div>
          <label  htmlFor="image" className="block font-bold  text-white">Image</label>
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
        
        <div className="flex flex-col">
 

  <div className="mt-2 ">
    <button type="submit"  className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
      >Create</button> 
  </div>
</div>

      </form>
    </section>
  );
  


  }
