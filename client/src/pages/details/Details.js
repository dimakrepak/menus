import Menu from '../../components/menu/Menu';
import './details.css';
import { useParams } from "react-router";
import Navbar from '../../components/navbar/Navbar';

export default function Details() {

    const id = useParams().id;
    const user = useParams().user;
    console.log(user);
    console.log(id);
    return (
        <div>
            <Navbar />
            <div className="details-container">
                <Menu
                    id={id}
                    admin={user === 'isAdmin=true'}
                />
            </div>
        </div>
    )
}
