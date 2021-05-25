import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function EditInput({ dish, menuId, restId }) {
    const [inputEdit, setInputEdit] = useState({
        dishName: dish.dishName || '',
        price: dish.price || '',
    });

    const handleEditChange = (e) => {
        setInputEdit({
            ...inputEdit,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmitClick = async (e) => {
        try {
            const res = await axios.put(`/api/restaurant/update/${restId}/${menuId}/${dish._id}`, {
                ...inputEdit
            })
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div>
            <span>Name:</span>
            <input
                value={inputEdit.dishName}
                placeholder="Edit"
                type="text"
                name={'dishName'}
                onChange={handleEditChange}
            />
            <span>Price:</span>
            <input
                value={inputEdit.price}
                placeholder="Edit"
                type="text"
                name={'price'}
                onChange={handleEditChange}
            />
            <button onClick={handleSubmitClick}>Submit</button>
        </div >
    )
}
