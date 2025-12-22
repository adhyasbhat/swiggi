import React from 'react'
import ReactDOM from 'react-dom/client'
import HeaderComponent from './src/components/Header.js'
import BodyComponent from './src/components/Body.js'
import {createBrowserRouter} from 'react-router-dom'
import Error from './src/components/Error.js'
import About from './src/components/About.js'
import contact from './src/components/Contact.js'
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
const AppRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppContainer/>,
        errorElement:<Error/>
    }
])
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