import React, { useContext } from "react";
import { ContextAPI } from "../context/ContextAPI";
import InfoSection from "./InfoSection";

function InfoSectionContainer() {
  const resultsAPI = useContext(ContextAPI);
  let totalPrice = 0;

  const tariffeBody = (
    <div>
      <table className="w-100">
        <tbody>
          {/* Map dei partecipanti*/}
          {
            resultsAPI.partecipants.map( partecipant => {
              totalPrice += partecipant.price
              return (
                <tr>
                  <td>{partecipant.type}</td>
                  <td>{partecipant.price}</td>
                </tr>
              )
            })
          }
          {/* Totale */}
          <hr/>
          <tr>
            <td></td>
            <td>Totale</td>
          </tr>
          <tr>
            <td></td>
            <td>{totalPrice}</td>
          </tr>
        </tbody>
      </table>
      <hr/>
      <div className="row">
        <div className="col-12 col-lg-10"></div>
        <h3>Cosa comprende il prezzo</h3>
        <p className="card-text">{resultsAPI.included}</p>
      </div>
      <div className="row">
        <h3>Cosa non comprende il prezzo</h3>
        <p>{resultsAPI.notIncluded}</p>
      </div>
    </div>
  )

  return (
    <div className="container-fluid accordion-print">
      <InfoSection id={25} title={"Tariffe"} description={tariffeBody}/>
      <InfoSection id={resultsAPI.documentsRequested.id} title={resultsAPI.documentsRequested.name} description={resultsAPI.documentsRequested.description}/>
      <InfoSection id={resultsAPI.documentsInsurance.id} title={resultsAPI.documentsInsurance.name} description={resultsAPI.documentsInsurance.description}/>
      <InfoSection id={resultsAPI.documentsCancellation.id} title={resultsAPI.documentsCancellation.name} description={resultsAPI.documentsCancellation.description}/>
      <InfoSection id={resultsAPI.documentsPayment.id} title={resultsAPI.documentsPayment.name} description={resultsAPI.documentsPayment.description}/>
      <InfoSection id={resultsAPI.documentsCarRental.id} title={resultsAPI.documentsCarRental.name} description={resultsAPI.documentsCarRental.description}/>

    </div>
  );
}

export default InfoSectionContainer;
