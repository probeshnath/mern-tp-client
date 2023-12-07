import { Link, NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <header>
                <div className="container">
                    <div className="logo-brand">
                        <Link to="/">PROBESH DN</Link>
                    </div>
                    <nav>
                        <ul>

                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/conatct">Contact</NavLink></li>
                            <li><NavLink to="/services">Services</NavLink></li>
                            <li><NavLink to="login">Login</NavLink></li>
                            <li><NavLink to="/register">Register</NavLink></li>
                            
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Navbar