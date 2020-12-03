import React from "react";
import Accomodation from "./Accomodation";
import Trasporti from "./Trasporti";
//! importo momentJS
import moment from "moment";
import "moment/locale/it";

function CardTitle({title, date, dayn}) {
  return(
    <div className="pt-0 d-flex align-items-md-center">
      <div 
        style={{
          width: 57,
          height: 57,
          backgroundColor: "#ffb400",
          borderRadius: 57,
          position: "relative",
          float: "left"
        }}
        className="d-block d-xl-none d-flex align-items-center justify-content-center mr-3 mr-xl-0">
        <p className="rob m-0 text-white text-uppercase">
          Day 
          <span className="font-weight-bold"> {dayn}</span>
        </p>
      </div>
      <p className="rob text-yellow font-weight-bold m-0">{title}</p>
  <p className="rob text-grey body-section mb-0 ml-0 ml-md-3">{date}</p>
    </div>
  )
}

function CardImage({images}) {
  // console.log(images)
  return(
    <div className="carousel p-4">
      <img className="img-fluid" src={images[0].image}/>
    </div>
  )
}

function CardDescription({description}) {
  return(
    <div className="p-4">
      {description}
    </div>
  )
}

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
                <div
                  data-toggle="collapse"
                  data-target={dataTarget}
                  aria-expanded="true"
                  aria-controls={id}
                  className="rob m-0 text-uppercase link collapsed open-card"
                  
                >
                  <p className="m-0">
                    <span className="title-section font-weight-bold" style={{ color: "#5B5959" }}>
                      {place[0].places[0].name}
                    </span>
                    
                    <span className="body-section text-grey pl-3" style={{color:""}}>
                      {place.map((singlePlace) => {
                        return `${moment(singlePlace.dayDate).format("DD")} `;
                      })}
                    
                    {moment(place[0].dayDate).format("MMMM")}
                      </span>
                  </p>
                  
                  <i className="fas fa-angle-down title-section font-weight-bold"></i>
                </div>
              </div>

              <div
                id={id}
                className="collapse"
                aria-labelledby={headingId}
                data-parent={accordionDataParent}
              >
                <div className="card-body">
                  <div className="">
                    {place.map((singlePlace, index) => {
                      return (
                        // Componente timeline
                        <div>
                          {/* Componente Titolo + Day */}
                          <CardTitle title={singlePlace.days[0].name} date={singlePlace.dayDate} dayn={index + 1} />
                          {/* Descrizione */}
                          <CardImage images={singlePlace.days[0].images}/>
                          <CardDescription description={singlePlace.days[0].description}/>
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
