import React from "react";

function Timeline({dayn, transport, accomodation}) {
  function printAccomodation(transport) {
    if (transport) {
      return (
        <div className="d-flex flex-shrink-0">
          <i className="fas fa-map-marker-alt"></i>
        </div>
      )
      
    }
  }

  function printTransport(accomodation) {
    if (accomodation) {
      return (
        <div className="d-flex flex-shrink-0">
          <i className="fas fa-car-alt"></i>
        </div>
      )
    }
  }
  return (
    <>
      <div className="travelLineMain d-flex flex-shrink-0">
        <div className="day d-flex flex-shrink-0">
          <p className="m-0">DAY {dayn}</p>
        </div>
        {printAccomodation(accomodation)}
        {printTransport(transport)}

        

        <div className="dots h-100">
          <div className="dot h-100 bg-dot w-100">
            &nbsp;&nbsp;
          </div>
        </div>
      </div>
    </>
  );
}

export default Timeline;
