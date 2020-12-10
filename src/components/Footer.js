import React, { useContext } from "react";
import { ContextAPI } from "../context/ContextAPI";
import "../style/Footer.scss";

function Footer() {
    const resultsAPI = useContext(ContextAPI);
    return resultsAPI ? (
        <footer className="footer container-fluid">
            <div className="row h-100">
                <div className="footer-left col-12 col-md-6 d-flex align-items-center justify-content-center">
                    <div>
                        <p className="small-text text-white">
                            {resultsAPI.agency.name} | Sicily DMC & Travel
                            Agency (Licence nr. 2226/S2-Tur)
                        </p>
                        <p className="small-text text-white">
                            Viale della Gioventù, 26 A -95014 Giarre (Catania)
                        </p>
                        <p>
                            <img
                                className="image"
                                src="http://51.77.82.133:86/images/insolita.png"
                                alt="logo"
                            />
                        </p>
                    </div>
                </div>
                <div className="footer-right col-12 col-md-6 d-flex align-items-center justify-content-center">
                    <button type="button" className="btn btn-footer">
                        <i className="fas fa-download"></i>
                        <span className="small-text ">Download</span>
                    </button>
                </div>
            </div>
        </footer>
    ) : (
        <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    );
}

export default Footer;
