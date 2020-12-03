import React from "react";

function Trasporti({ transport }) {
  return (
    <div>
      {transport.map((transport, index) => {
        let modalId = "modal" + transport.id;
        let modalIdTarget = "#" + modalId;
        let modalIdLongTitle = modalId + "LongTitle";
        return (
          <div className="m-4" key={Math.random()}>
            {/* Card */}
            <div
              className="p-4 hover-section"
              data-target={modalIdTarget}
              data-toggle="modal"
            >
              <p
                className="mt-0 rob font-weight-bold"
                style={{ fontSize: 20, lineHeight: "23px" }}
              >
                {transport.name}
              </p>
              {/* Icona macchina */}
              <div className="d-flex flex-row align-items-center">
                <div
                  className="d-flex justify-content-center align-items-center mr-3"
                  style={{ width: 100, height: 100, backgroundColor: "#ffc53c", fontSize: "0.7rem", color: "#ca9210"}}>
                  <i class="fas fa-car fa-3x"></i>
                </div>
                <div className="d-flex flex-column ">
                  <div className="d-flex justify-content-start align-items-center">
                    <p className="small-text rob text-uppercase font-weight-bold pt-10">
                      Luogo di ritiro
                    </p>
                    <p className="btn-outline ml-4 text-blue">
                      {transport.pickup.name}
                    </p>
                  </div>
                  <div className="d-flex justify-content-start align-items-center">
                    <p className="small-text rob text-uppercase font-weight-bold pt-10">
                      Luogo di rilascio
                    </p>
                    <p className="text-blue ml-4 btn-outline">
                      {transport.return.name}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modale */}
            <div
              className="modal"
              id={modalId}
              tabindex="-1"
              role="dialog"
              aria-labelledby={modalIdLongTitle}
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id={modalIdLongTitle}>
                      {transport.name}
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="container">
                      {/* Hotel rating */}
                      {/* Icona macchina */}
                      <i class="fas fa-car fa-3x"></i>
                      {/* Dati Auto */}
                      
                      <h5>Tipologia auto</h5>
                      <div className="row">
                        <h5>Luogo di ritiro</h5>
                        <p style={{ color: "blue" }}>
                          {" "}
                          &nbsp;&nbsp; {transport.pickup.name}
                        </p>
                      </div>
                      <div className="row">
                        <h5>Data di ritiro</h5>
                        <p style={{ color: "blue" }}>
                          &nbsp;&nbsp;{transport.withdrawalDate}
                        </p>
                      </div>
                      <div className="row">
                        <h5>Luogo di rilascio</h5>
                        <p style={{ color: "blue" }}>
                          &nbsp;&nbsp;{transport.return.name}
                        </p>
                      </div>
                      <div className="row">
                        <h5>Data di rilascio</h5>
                        <p style={{ color: "blue" }}>
                          &nbsp;&nbsp;{transport.releaseDate}
                        </p>
                      </div>
                      <h5>Il noleggio auto comprende</h5>
                      <p>{transport.rentIncluded}</p>
                      <h5>Sito web</h5>
                      <a>{transport.contact.website}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Trasporti;
