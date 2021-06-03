import Navbar from '../../components/navbar/Navbar';
import Card from '../../components/restaurantCard/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './main.css';
import { Link } from "react-router-dom";

export default function Main({ customer }) {
    const [restaurants, setRestaurants] = useState([]);

    const fetchRestaurants = async () => {
        try {
            const res = await axios.get('/api/restaurant/getAll')
            console.log(res.data);
            setRestaurants(res.data)
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        fetchRestaurants();
    }, [])
    return (
        <>
            <Navbar customer={customer} />
            <div className="main-container">
                {restaurants.map(restaurant => (
                    <Link className="router-link" key={restaurant._id} to={`/details/${restaurant.slug}/customer`}>
                        <Card
                            res={restaurant}
                        />
                    </Link>
                ))}
            </div>
        </>
    )
}
