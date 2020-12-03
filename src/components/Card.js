import React from "react";
import Accomodation from "./Accomodation";
import Trasporti from "./Trasporti";
//! importo momentJS
import moment from "moment";
import "moment/locale/it";

function Card({ place }) {
  let id = "id" + place[0].id;
  let accordionId = "accordion" + id;
  let accordionDataParent = "#" + accordionId;
  let headingId = "heading" + id;
  let dataTarget = "#" + id;

  return (
    <div className="container-fluid accordion-print" key={Math.random()}>
      <div className="row">
        <div className="col-12 col-md-10 offset-md-1 pb-4">
          <div id={accordionId} className="accordion">
            <div className="card card-border">
              <div className="card-header" id={headingId}>
                <p
                  data-toggle="collapse"
                  data-target={dataTarget}
                  aria-expanded="true"
                  aria-controls={id}
                  className="rob font-weight-bold m-0 title-section text-uppercase link text-blue collapsed open-card"
                  style={{ color: "#5B5959" }}
                >
                  {place[0].places[0].name}
                  <span>
                    {place.map((singlePlace) => {
                      return `${moment(singlePlace.dayDate).format("DD")} `;
                    })}
                  </span>
                  <span>{moment(place[0].dayDate).format("MMMM")}</span>

                  <i className="fas fa-angle-down"></i>
                </p>
              </div>

              <div
                id={id}
                className="collapse"
                aria-labelledby={headingId}
                data-parent={accordionDataParent}
              >
                <div className="card-body">
                  <div className="lead">
                    {place.map((singlePlace) => {
                      return (
                        // Componente timeline
                        <div>
                          {/* Componente Titolo + Day */}
                          <h2 style={{ color: "goldenrod" }}>
                            {singlePlace.days[0].name}
                          </h2>
                          {/* Descrizione */}
                          <Trasporti transport={singlePlace.transports} />
                          <Accomodation
                            key={Math.random()}
                            acc={singlePlace.accomodations}
                          />
                        </div>
                      );
                    })}
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

export default Card;
