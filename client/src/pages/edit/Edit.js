import Navbar from '../../components/navbar/Navbar';
import { useParams } from "react-router";
import { useEffect, useState } from 'react';
import axios from 'axios';
import './edit.css';
import EditInput from '../../components/EditInput/EditInput';

export default function Edit() {
    const [restaurant, setRestaurant] = useState(null);

    const id = useParams().id;
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
        <>
            <Navbar />
            <div className="edit-container">
                <h1>EDIT MENU</h1>

                {restaurant?.menu.map(m => (
                    <div key={m._id} >
                        <h3>{m.menuName}</h3>
                        {
                            m.dishes.map(d => (
                                <EditInput
                                    key={d._id}
                                    dish={d}
                                    menuId={m._id}
                                    restId={id}
                                />
                            ))
                        }
                    </div>
                ))}
            </div>
        </>
    )
}
