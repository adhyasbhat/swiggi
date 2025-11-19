import React from 'react'
import ReactDOM from 'react-dom/client'
import HeaderComponent from './src/components/Header.js'
import BodyComponent from './src/components/Body.js'
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
 const AppContainer = () =>{
        return (
            <div className='app'>
            <HeaderComponent/>
            <BodyComponent/>
            </div>
        ) 
    }
    const root = ReactDOM.createRoot(document.getElementById('root'))

    root.render(<AppContainer/>)