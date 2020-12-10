import React, { useContext } from "react";
import { ContextAPI } from "../context/ContextAPI";
// import AuthApi from "./AuthApi";
// import Cookies from "js-cookie";

function Navbar({handleOnChange}) {
  const resultsAPI = useContext(ContextAPI);

  // const Auth = React.useContext(AuthApi);

  // const handleOnChange = () => {
  //   Auth.setAuth(false);
  //   Cookies.remove("user");
  // };

  return (
    <div className="NavBarContainer d-flex flex-row align-items-center justify-content-between">
      <img src={resultsAPI.agency.image} alt="insolitaTravelLogo" />
      <div className="d-flex flex-row justify-content-end align-items-center">
        
        <a href="#consulente">Consulente</a>
        <a href="#tappe">Le mie tappe</a>
        <a href="#tariffe">Tariffe</a>
        <a href="#documentazione">Documentazione</a>
       
          <button
            className="btn bg-blue text-white small-text rob text-uppercase "
            onClick={handleOnChange}
          >
            Logout
          </button>
      </div>

      {/* <button onChange={handleOnChange}></button> */}
    </div>
  );
}

export default Navbar;
