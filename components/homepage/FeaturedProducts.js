// components/ItemList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';

const ItemList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/v1/Products/');
                setItems(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            <h1>Item List</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <Image src={item.image} alt={item.name} width={200} height={200} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;
