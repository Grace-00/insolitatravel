import React, { useContext } from "react";
import { ContextAPI } from "../context/ContextAPI";


function TravelAgency() {
  const resultsAPI = useContext(ContextAPI);
  console.log(resultsAPI);
  return (

    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-10 offset-md-1 pb-5">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-12 col-lg-6 separatore">
                  <div
                    className="background-image Bedroom float-sm-left"
                    style={{

                      backgroundImage: `url(${resultsAPI.operator.image})`,
                    }}
                  ></div>
                  <div className="container-contact d-flex align-items-center align-items-lg-end pl-sm-3 mt-3 mt-sm-0 h-100">
                    <div className="h-100">
                      <p
                        className="normal-text rob mb-0"
                        style={{ fontSize: "15", lineHeight: "2" }}
                      >
                        {resultsAPI.operator.name}
                      </p>
                      <p className="mt-0 normal-text rob mb-3" style={{ fontSize: "15", lineHeight: "2" }}>
                        Il tuo agente di viaggio
                      </p>
                      <p className="rob normal-text m-0" >
                        <span className="d-inline-block float-left col-2 p-0" >
                          <i className="fas fa-phone-square-alt" ></i>
                        </span>
                        <span className="d-inline-block col-10 p-0">
                          <a href="tel:095931367">095931367</a>
                        </span>
                      </p>
                      <p className="rob normal-text my-3">
                        <span className="d-inline-block float-left col-2 p-0">
                          <i className="fas fa-envelope"></i>
                        </span>
                        <span className="d-inline-block col-10 p-0">
                          <a href="mailto:info@insicilia.it">
                            info@insicilia.it
                          </a>
                        </span>
                      </p>
                      <p className="rob normal-text my-3">
                        <span className="d-inline-block float-left col-2 p-0">
                          <i className="fas fa-home"></i>
                        </span>
                        <span className="d-inline-block col-10 p-0">
                          <a href="home">indirizzo casa</a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6 pl-3 pl-md-4 mb-5 mb-md-0">
                  <img
                    src={resultsAPI.agency.image}
                    className="pt-3 pt-lg-0 pb-md-2 logoAgency"
                    alt="logo"
                  />
                  <div className="container-contact d-flex align-items-center">
                    <div>
                      <p className="rob normal-text m-0">
                        - Insolita Travels di InSicilia snc: Tour Operator
                        Sicilia, DMC e Agenzia di Viaggi;
                      </p>
                      <p className="rob normal-text m-0">
                        - Licenza Agenzia Viaggio nr. 2226/S2-TUR della Regione
                        Siciliana;
                      </p>
                      <p className="rob normal-text m-0">
                        - Polizza R.C. nr. 45130310-RC14 Europaische
                        Reiserversicherung AG;
                      </p>
                      <p className="rob normal-text m-0">
                        - InSicilia snc è iscritta all'Ufficio Registro Imprese
                        di Catania N. REA 260386;
                      </p>
                      <p className="rob normal-text m-0">
                        - Fondo Garanzia Viaggi: Certificato n. A/286.1059/1/R;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelAgency;
