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

    //inner component
    const MenuNameEdit = ({ name, menuId }) => {
        const [menuName, setMenuName] = useState(name || '');

        const handleMenuNameSubmit = async () => {

            try {
                const res = await axios.put(`/api/restaurant/update/${id}/${menuId}/none`, {
                    menuName
                })
                console.log(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        return (
            <>
                <span>Menu name: </span>
                <input
                    value={menuName}
                    placeholder="Edit"
                    type="text"
                    name={name}
                    onChange={(e) => setMenuName(e.target.value)}
                />
                <button className="btn-submit" onClick={handleMenuNameSubmit}>Submit</button>
            </>
        )
    }

    return (
        <>
            <Navbar />
            <div className="edit-container">
                <h1>EDIT MENU</h1>

                {restaurant?.menu.map(m => (
                    <div key={m._id} >
                        <MenuNameEdit
                            name={m.menuName}
                            menuId={m._id}
                        />
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
