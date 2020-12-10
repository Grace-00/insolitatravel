import React, { useContext } from "react";
import { ContextAPI } from "../context/ContextAPI";
import InfoSection from "./InfoSection";

function InfoSectionContainer() {
  const resultsAPI = useContext(ContextAPI);
  let totalPrice = 0;

  const tariffeBody = (
    <div id="tariffe">
      <table className="table">
        <tbody>
          {/* Map dei partecipanti*/}
          {resultsAPI.partecipants.map((partecipant) => {
            totalPrice += partecipant.price;
            return (
              <tr key={Math.random()}>
                <td>
                  <div className="row">
                    <div className="col-5">
                      <p className="rob text-normal mb-1 text-uppercase">
                        {partecipant.type}
                      </p>
                    </div>
                    <div className="col-3">
                      <p className="rob text-normal mb-1 text-uppercase"></p>
                    </div>
                    <div className="col-4">
                      <p className="rob text-normal text-right text-grey font-weight-bold  mb-1">
                        {partecipant.price}&nbsp;€
                      </p>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
          {/* Totale */}
          <tr>
            <td>
              <div className="row">
                <div className="col-12 text-right">
                  <p className="rob text-normal font-weight-bold text-uppercase">
                    Totale
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-12 text-right">
                  <p className="rob text-normal font-weight-bold body-section text-yellow">
                    {totalPrice} €
                  </p>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <hr />
      <div className="row">
        <div className="col-12 col-lg-10">
          <p className="card-text title-day text-yellow mb-3 text-uppercase font-weight-bold">
            Cosa comprende il prezzo
          </p>
          <pre className="card-text overflow-hidden">{resultsAPI.included}</pre>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12 col-lg-10">
          <p className="card-text title-day text-yellow mb-3 text-uppercase font-weight-bold">
            Cosa non comprende il prezzo
          </p>
          <pre className="card-text overflow-hidden">
            {resultsAPI.notIncluded}
          </pre>
        </div>
      </div>
    </div>
  );

  return (
    <div className="accordion-print">
      <div id="tariffe">
        <InfoSection
          id={"idTariffe"}
          title={"Tariffe"}
          description={tariffeBody}
        />
      </div>

      <div id="documentazione">
        <InfoSection
          id={resultsAPI.documentsRequested.typology}
          title={resultsAPI.documentsRequested.name}
          description={resultsAPI.documentsRequested.description}
        />
        <InfoSection
          id={resultsAPI.documentsInsurance.typology}
          title={resultsAPI.documentsInsurance.name}
          description={resultsAPI.documentsInsurance.description}
        />
        <InfoSection
          id={resultsAPI.documentsCancellation.typology}
          title={resultsAPI.documentsCancellation.name}
          description={resultsAPI.documentsCancellation.description}
        />
        <InfoSection
          id={resultsAPI.documentsPayment.typology}
          title={resultsAPI.documentsPayment.name}
          description={resultsAPI.documentsPayment.description}
        />
        <InfoSection
          id={resultsAPI.documentsCarRental.typology}
          title={resultsAPI.documentsCarRental.name}
          description={resultsAPI.documentsCarRental.description}
        />
      </div>
    </div>
  );
}

export default InfoSectionContainer;
