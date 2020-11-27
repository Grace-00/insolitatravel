import React, {useContext} from "react";
import { ContextAPI } from "../context/ContextAPI";
import "../style/Footer.scss"

function Footer() {
    const resultsAPI = useContext(ContextAPI);
    return resultsAPI ? (
            <footer className="footer">
                <div className="sec1">    
                {resultsAPI.agency.name} | Sicily DMC & Travel Agency (Licence nr. 2226/S2-Tur)
                <br/>
                Viale della Gioventù, 26 A -95014 Giarre (Catania)
                
                <div>
                    <img className="image" src="http://51.77.82.133:86/images/insolita.png" alt="logo"/>
                </div>
                </div>
                <div className="sec2">
                    <button className="bottoneMarcio">Downoad</button>
                </div>
            </footer>
        
    ):
    (
        <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    );
}

export default Footer;
