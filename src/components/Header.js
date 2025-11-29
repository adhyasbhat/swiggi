import { logo } from '../utils/constants'
import { useState } from 'react'
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
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
                <button className='login' onClick={() => setBtnName(btnName == "Login" ? "Logout" : "Login") 
                  }>{btnName}</button>

        </div>
        </div >

    )}
export default HeaderComponent;