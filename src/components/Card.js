import React, { useContext } from "react";
import { ContextAPI } from "../context/ContextAPI";

//! importo momentJS
import moment from "moment";
import "moment/locale/it";
//!_____________________

function Card() {
    // <h1>oggi e' {moment().format("dddd")}

    const resultsAPI = useContext(ContextAPI);
    //prendo tutte le righe
    const rows = resultsAPI.rows;

    //* per comodita creo un array di oggetti con solo nome e data
    const newArr = rows.map((row, index) => {
        const myObj = {
            name: row.places[0].name,
            date: moment(row.dayDate).format("DD/MM/YYYY"),
        };
        return myObj;
    });

    // 0: {name: "SIRACUSA", date: "20/11/2020"}
    // 1: {name: "SIRACUSA", date: "21/11/2020"}
    // 2: {name: "vendicari", date: "22/11/2020"}
    // 3: {name: "SIRACUSA", date: "23/11/2020"}
    // 4: {name: "SIRACUSA", date: "24/11/2020"}
    // 5: {name: "SIRACUSA", date: "25/11/2020"}
    // 6: {name: "Catania", date: "26/11/2020"}

    return (
        <div>
            {rows.map((row) => {
                return (
                    <p>
                        <span>{row.places[0].name}</span>
                        <span>{moment(row.dayDate).format("DD")}</span>
                        <span>{moment(row.dayDate).format("MMMM")}</span>
                    </p>
                );
            })}
        </div>
    );
}

export default Card;
