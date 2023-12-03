import { Outlet } from "react-router"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"

export const IndexPage = () =>{

    return(
        <div className="initial-page">
            <div className="navbar-container">
                <Navbar/>
            </div>

            <div className="body-content-container">
                <div className="body-content">
                    <Outlet/>
                </div>
                
            </div>
           
           <div className="footer-container">
                <Footer/>
           </div>

        </div>
    )

}