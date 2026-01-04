import { logo } from '../utils/constants'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const HeaderComponent = () => {
    const [btnName, setBtnName] = useState("Login")
    console.log("Header rendered")
    return (

        <div className='heading'>
            <div className='logo-container'>
                <img className='logo' src={logo} />
            </div>
            <div className='nav-items'>
                <ul>
                    <li> <Link to="/" default>Home</Link></li>
                    <li><Link to="/about"> About Us </Link></li>
                    <li> <Link to="/contact">Contact</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                </ul>
                <button className='login' onClick={() => setBtnName(btnName == "Login" ? "Logout" : "Login") 
                  }>{btnName}</button>

        </div>
        </div >

    )}
export default HeaderComponent;