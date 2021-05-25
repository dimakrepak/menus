import './menu.css';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';

export default function Menu({ id, admin }) {
    const [restaurant, setRestaurant] = useState(null);
    const history = useHistory();

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
            {admin &&
                <button className="btn" onClick={() => { history.push(`/edit/${restaurant._id}`) }}>Edit</button>
            }
        </div>
    )
}
