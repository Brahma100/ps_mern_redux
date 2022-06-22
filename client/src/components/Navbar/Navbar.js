import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout, loadUser } from '../../action/authActions'

const Navbar = () => {
    const dispatch = useDispatch();
    const { isAuthenticated } = useSelector(state => state.auth);
    useEffect(() => dispatch(loadUser()), [dispatch]);
    return (
        <header>
            <nav className="nav" style={{ textAlign: 'center' }}>
                <ul>
                    <li className="logo"><Link to='/'><span>PS Kart</span></Link></li>
                    <li><Link to='/'>Home</Link></li>
                    {
                        !isAuthenticated &&
                        <li><Link to='/auth'>Login</Link></li>

                    }
                    {
                        isAuthenticated &&
                        <>
                            <li><Link to='/addItem'>Add Item</Link></li>
                            <li><button className="btn" onClick={()=>dispatch(logout())}>Logout</button></li>
                        </>
                    }

                </ul>
            </nav>
        </header>
    )
}

export default Navbar;