import './navbar.css'

export default function Navbar({ customer }) {
    return (
        <div className="navbar-container">
            {customer &&
                <span className="admin-false">Sorry only admins can edit menus !</span>}
        </div>
    )
}
