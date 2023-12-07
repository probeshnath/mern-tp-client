import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import { useAuth } from "../store/auth";

const Navbar = () => {
    const { isLoggedIn } = useAuth()
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
                            <li><NavLink to="/contact">Contact</NavLink></li>
                            <li><NavLink to="/services">Services</NavLink></li>
                            {
                                isLoggedIn ? <li><NavLink to="/logout">Logout</NavLink></li> :
                                    <>
                                        <li><NavLink to="login">Login</NavLink></li>
                                        <li><NavLink to="/register">Register</NavLink></li>
                                    </>
                            }



                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Navbar