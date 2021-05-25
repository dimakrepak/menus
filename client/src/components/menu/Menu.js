import './menu.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Menu({ id }) {
    const [restaurant, setRestaurant] = useState(null);

    const fetchRestaurant = async () => {
        try {
            const res = await axios.get(`/api/restaurant/getRest/${id}`)
            console.log(res.data);
            setRestaurant(res.data);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        fetchRestaurant();
    }, [id])
    return (
        <div className='menu'>
            <h1>Menu:</h1>
            <h2>{restaurant?.name}</h2>

            {restaurant?.menu.map(m => (
                <div className='menu-wrapper' key={m._id}>
                    <h3>{m.menuName}</h3>
                    <ul className='dishes'>
                        {m.dishes.map(d => (
                            <li
                                key={d._id}
                                className='menu-list'
                            >{d.dishName}: {d.price}
                            </li>

                        ))}
                    </ul>
                </div>

            ))}
        </div>
    )
}
