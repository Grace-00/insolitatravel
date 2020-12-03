import React from "react";

function Accomodation({ acc }) {
  function alternativa(index) {
    if (acc.length > 1) {
      return <h2>Alternativa {index + 1}</h2>;
    }
  }

  return (
    <div>
      {acc.map((accomodation, index) => {
      let modalId = "modal" + accomodation.id
      let modalIdTarget = "#" + modalId
      let modalIdLongTitle = modalId + "LongTitle"
        return (
          <div key={Math.random()}>
            {alternativa(index)}
            {/* Image gallery component -- source .images */}
            <div
              className="card"
              data-target={modalIdTarget}
              data-toggle="modal"
            >
              <h3>{accomodation.name}</h3>
              <p>{accomodation.description}</p>
              <a hfef="">Clicca qui per maggiori dettagli</a>
            </div>
            <div
              className="modal"
              id={modalId}
              tabIndex="-1"
              role="dialog"
              aria-labelledby={modalIdLongTitle}
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id={modalIdLongTitle}>
                      {accomodation.name}
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
                      <span>
                        {accomodation.typology}
                        {/* {accomodation.stars}.map(

                        ) */}
                      </span>
                      {/* Image */}
                      <div className="container-img d-flex ">
                        {
                          accomodation.images.map( (singleImage) => {
                            let urlImage = singleImage.image
                            return(
                              <div
                                style={{
                                  backgroundImage: "url("+ urlImage + ")", 
                                  backgroundSize: "cover",
                                  width: 150, 
                                  height: 150,
                                  padding: 10,
                                  }}>

                              </div>
                            )
                          })
                        }
                      </div>
                      {/* Descrizione */}
                      <h5>Description</h5>
                      <p>
                        {accomodation.description}
                      </p>
                      {/* Ristorante */}
                      <h5>Ristorante</h5>
                      <p>
                        {accomodation.descriptionRestaurant}
                      </p>
                      {/* Camere */}
                      <h5>Camere</h5>
                      <p>
                        {accomodation.descriptionRooms}
                      </p>
                      {/* Servizi */}
                      <h5>Servizi</h5>
                      <p>
                        {accomodation.descriptionServices}
                      </p>

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

export default Accomodation;
