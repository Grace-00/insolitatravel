import React from "react";

function Trasporti({ transport }) {

  return (
    <div>
      {transport.map((transport, index) => {
       let modalId = "modal" + transport.id
       let modalIdTarget = "#" + modalId
       let modalIdLongTitle = modalId + "LongTitle"
        return (
            <div key={Math.random()}>
            {/* Card */}
            <div
              className="card"
              data-target={modalIdTarget}
              data-toggle="modal"
            >
              <h3>{transport.name}</h3>
              {/* Icona macchina */}
              <p>Luogo di ritiro</p>
              <button>{transport.pickup.name}</button>
              <p>Luogo di rilascio</p>
              <button>{transport.return.name}</button>
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

                      {/* Dati Auto */}
                      <i class="fas fa-car fa-3x"></i>
                      <h5>Tipologia auto</h5>
                      <div className="row">
                        <h5>Luogo di ritiro</h5>
                        <p style={{color:"blue"}}> &nbsp;&nbsp; {transport.pickup.name}</p>
                      </div>
                      <div className="row">
                        <h5>Data di ritiro</h5>
                        <p style={{color:"blue"}}>&nbsp;&nbsp;{transport.withdrawalDate}</p>
                      </div>
                      <div className="row">
                        <h5>Luogo di rilascio</h5>
                        <p style={{color:"blue"}}>&nbsp;&nbsp;{transport.return.name}</p>
                      </div>
                      <div className="row">
                        <h5>Data di rilascio</h5>
                        <p style={{color:"blue"}}>&nbsp;&nbsp;{transport.releaseDate}</p>
                      </div>
                      <h5>Il noleggio auto comprende</h5>
                      <p>
                        {transport.rentIncluded}
                      </p>
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