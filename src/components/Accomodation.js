import React from "react";

function Accomodation({ acc }) {
  function alternativa(index) {
    if (acc.length > 1) {
      return <h2>Alternativa {index + 1}</h2>;
    }
  }

  function print(titolo, description) {
    if (description != null) {
      return (
        <>
          <h5>{titolo}</h5>
          <p>{description}</p>
        </>
      );
    }
  }

  return (
    <div>
      {acc.map((accomodation, index) => {
        let modalId = "modal" + accomodation.id;
        let modalIdTarget = "#" + modalId;
        let modalIdLongTitle = modalId + "LongTitle";
        return (
          <div className="m-4" key={Math.random()}>
            {alternativa(index)}
            {/* Image gallery component -- source .images */}
            <div
              className="p-4 hover-section"
              data-target={modalIdTarget}
              data-toggle="modal"
            >
              <h3>{accomodation.name}</h3>
              <p>{accomodation.description}</p>
              <a
                style={{ color: "#3490dc", textDecoration: "underline" }}
                hfef=""
              >
                Clicca qui per maggiori dettagli
              </a>
              <div className="d-flex mt-3" style={{ marginLeft: "-24px" }}>
                {accomodation.tags.map((tag) => {
                  return (
                    <p className="text-blue ml-4 btn-outline">{tag.name}</p>
                  );
                })}
              </div>
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
                        {accomodation.images.map((singleImage) => {
                          let urlImage = singleImage.image;
                          return (
                            <div
                              style={{
                                backgroundImage: "url(" + urlImage + ")",
                                backgroundSize: "cover",
                                width: 150,
                                height: 150,
                                padding: 10,
                              }}
                            ></div>
                          );
                        })}
                      </div>
                      {print("Description", accomodation.description)}
                      {print("Ristorante", accomodation.descriptionRestaurant)}
                      {print("Camere", accomodation.descriptionRooms)}
                      {print("Servizi", accomodation.descriptionServices)}
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
