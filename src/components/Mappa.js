import React, { useContext } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/images/marker-icon.png";
import { ContextAPI } from "../context/ContextAPI";
//! importo momentJS
import moment from "moment";
import "moment/locale/it";
//!_____________________

function Mappa() {
    const resultsAPI = useContext(ContextAPI);
    const position = [37.029837, 15.08678];

    const { rows, partecipants, days } = resultsAPI;

    const groupBy = (objectArray, property) => {
        return objectArray.reduce(function (total, obj) {
            let key = obj[property];
            if (!total[key]) {
                total[key] = [];
            }
            total[key].push(obj);
            return total;
        }, {});
    };

    let groupedPeople = groupBy(partecipants, "type");

    let partecipantsArr = [];

    for (const [key, value] of Object.entries(groupedPeople)) {
        // console.log(`${key}: ${value.length}`);
        const myPartecipant = {
            type: key,
            counter: value.length,
        };
        partecipantsArr.push(myPartecipant);
    }

    const myPlaces = [];
    const myCoords = [];

    rows.forEach((row) => {
        if (!myPlaces.includes(row.places[0].name)) {
            myPlaces.push(row.places[0].name);
            myCoords.push(row.places[0].position.coords);
        }
    });

    return (
        <div className="container-fluid pt-5">
            <div className="row">
                <div className="col-12 col-md-10 offset-md-1 pb-4">
                    <div className="card">
                        <div className="card-body my-map">
                            <div className="row mb-4">
                                <div className="col-12">
                                    <MapContainer center={position} zoom={6}>
                                        <TileLayer
                                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                        />
                                        {/* map per settare i 3 marker */}
                                        {myCoords.map((coord) => {
                                            return (
                                                <Marker
                                                    key={Math.random()}
                                                    position={coord}
                                                >
                                                    <Popup>
                                                        A pretty CSS3 popup.
                                                        <br />
                                                        Easily customizable.
                                                    </Popup>
                                                </Marker>
                                            );
                                        })}
                                    </MapContainer>
                                </div>
                            </div>

                            <h5 className="card-title rob text-uppercase text-yellow font-weight-bold title mb-0">
                                {resultsAPI.title}
                            </h5>

                            <p className="card-text rob text-black small-text">
                                {/* map per settare i breadcrumbs dei luoghi */}
                                {myPlaces.map((place) => {
                                    return (
                                        <span key={Math.random()}>
                                            {place} &gt;{" "}
                                        </span>
                                    );
                                })}
                            </p>

                            <p className="body-section rob text-grey">
                                <i className="fas fa-long-arrow-alt-right text-yellow"></i>
                                {`Dal ${moment(resultsAPI.dateFrom).format(
                                    "DD/MM/YYYY"
                                )} al ${moment(resultsAPI.dateTo).format(
                                    "DD/MM/YYYY"
                                )}`}
                            </p>

                            <div className="d-sm-flex align-items-sm-center">
                                {partecipantsArr.map((partecipant) => {
                                    return (
                                        <p
                                            className="body-section rob text-grey"
                                            key={Math.random()}
                                        >
                                            <i className="fas fa-long-arrow-alt-right text-yellow"></i>
                                            {partecipant.counter}{" "}
                                            {/* {partecipant.type} &nbsp; */}
                                            {partecipant.counter > 1 &&
                                                partecipant.type.slice(0, -1) +
                                                    "i"}{" "}
                                            &nbsp;
                                        </p>
                                    );
                                })}
                            </div>

                            {/* Durata controlla se ci sono parametri che riguardano i pernottamenti */}
                            <p className="body-section rob text-grey">
                                <i className="fas fa-long-arrow-alt-right text-yellow"></i>
                                {days > 1
                                    ? `${days} Giorni - ${days - 1} Notti`
                                    : `${days} Giorno - Nessun Pernottamento`}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mappa;
