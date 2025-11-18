import React from 'react'
import ReactDOM from 'react-dom/client'

/*
Header
    Logo
    NavBar
Body
    search
    cardcontainer
        cards
Footer
    Copyright
    Links
    Adddress
    Contact

 */
    const NavBar = () =>{

    }
    const HeaderComponent = () =>(
        <div className='heading'>
            <div className='logo-container'>
            <img className='logo' src='https://cdn2.f-cdn.com/contestentries/2426851/74260034/6689bc27dfb41_thumb900.jpg'/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>

            </div>
        </div>

    )
    
    const AppContainer = () =>{
        return (
            <div className='app'>
            <HeaderComponent/>
            </div>

        ) 

    }
    const root = ReactDOM.createRoot(document.getElementById('root'))

    root.render(<AppContainer/>)