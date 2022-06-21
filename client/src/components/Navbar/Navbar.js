import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout, loadUser } from '../../action/authActions'

const Navbar = ({ isAuthenticated, logout, loadUser }) => {
    useEffect(() => loadUser(), []);
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
                            <li><button className="btn" onClick={logout}>Logout</button></li>
                        </>
                    }

                </ul>
            </nav>
        </header>
    )
}
const mapStateToProps = (state) => {
    return ({
        isAuthenticated: state.auth.isAuthenticated
    })
}
export default connect(mapStateToProps, { logout, loadUser })(Navbar);