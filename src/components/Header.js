import React, { useContext } from "react";
import { ContextAPI } from "../context/ContextAPI";

function Header() {
    const resultsAPI = useContext(ContextAPI);

    return (
        <div>
            <h1>{resultsAPI.customerName}</h1>
            <h2>{resultsAPI.title}</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                alias reprehenderit dolorum quod explicabo, unde animi id est
                suscipit in qui, veniam impedit veritatis iusto aspernatur fugit
                libero doloremque consequatur?
            </p>
        </div>
    );
}

export default Header;
