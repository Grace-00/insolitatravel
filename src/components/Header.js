import React, { useContext } from "react";
import { ContextAPI } from "../context/ContextAPI";

function Header() {
    const resultsAPI = useContext(ContextAPI);

    // const logoImg = resultsAPI.agency.image;
    console.log("sono nel context --->", resultsAPI);

    return resultsAPI ? (
        // <div>
        //     {/* Vanlatum */}
        //     <h1>{resultsAPI.customerName}</h1>

        //     {/* test Tour Sicile Orientale Noto et Taormina */}
        //     <h2>{resultsAPI.title}</h2>
        // </div>

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
    ) : (
        <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    );
}

export default Header;
