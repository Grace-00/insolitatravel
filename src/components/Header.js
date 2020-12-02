import React, { useContext } from "react";
import { ContextAPI } from "../context/ContextAPI";
import AuthApi from "./AuthApi";
import Cookies from 'js-cookie';
function Header() {
    const resultsAPI = useContext(ContextAPI);

    // const logoImg = resultsAPI.agency.image;
    console.log("sono nel context --->", resultsAPI);
    const Auth= React.useContext(AuthApi)
    const handleOnChange=()=>{
        Auth.setAuth(false);
        Cookies.remove("user");
    }
    return (
        <header>
            
            <div
                className="vh-100 container-fluid background-image hero-img"
                style={{
                    backgroundImage: `url(${resultsAPI.images[0].image})`,
                }}
            >
                <img src={resultsAPI.agency.image} alt="ciao" />
                
                <div className="row">
                    <div className="overlay">
                        <div className="col-12 w-100 d-flex align-items-start justify-content-end text-right"> 
                            <button className="btn bg-blue text-white small-text rob text-uppercase " onClick={handleOnChange}>Logout</button>
                        </div>
                        <div className="col-10 h-100 offset-1 d-flex align-items-end  justify-content-end text-right">
                            <div className="pb-5">
                                <p className="rob text-uppercase text-white font-weight-bold title font-italic">
                                    {resultsAPI.customerName}
                                </p>

                                <p className="rob text-uppercase text-white font-weight-bold title">
                                    {resultsAPI.title}
                                </p>

                                <button className="btn bg-blue text-white small-text rob text-uppercase">
                                    scopri di più
                                </button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
