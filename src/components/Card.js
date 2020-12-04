import React from "react";
import Accomodation from "./Accomodation";
import Trasporti from "./Trasporti";
//! importo momentJS
import moment from "moment";
import "moment/locale/it";
import Timeline from "./Timeline";
import CheckUncheck from "./CheckUncheck";

function CardTitle({ title, date, dayn }) {
  return (
    <div className="pt-0 pb-4 d-flex flex-wrap align-items-md-center">
      <div
        style={{
          width: 57,
          height: 57,
          backgroundColor: "#ffb400",
          borderRadius: 57,
          position: "relative",
          float: "left",

        }}
        className="d-block d-xl-none d-flex flex-shrink-0 align-items-center justify-content-center mr-3 mr-xl-0"
      >
        <p className="rob m-0 text-white text-uppercase">
          Day
          <span className="font-weight-bold"> {dayn}</span>
        </p>
      </div>
      <div className="d-flex flex-shrink-1 ">
        <p className="rob flex-shrink-1 text-yellow font-weight-bold m-0">
          {title}
        </p>
        <p className="rob flex-shrink-0 text-grey body-section flex-grow-1 mb-0 ml-0 ml-md-3">
          {date}
        </p>
      </div>
    </div>
  );
}

function CardImage({ images }) {
  let carouselId = "carouselId" + images[0].id;
  let carouselIdTarget = "#" + carouselId;
  return (
    <div
      id={carouselId}
      className="carousel slide"
      data-ride="carousel"
      // style={{ height: 400 }}
    >
      <ol className="carousel-indicators">
        {images.map((image, index) => {
          if (index === 0) {
            return (
              <li
                data-target={carouselIdTarget}
                data-slide-to={index}
                className="active"
              ></li>
            );
          } else {
            return (
              <li data-target={carouselIdTarget} data-slide-to={index}></li>
            );
          }
        })}
      </ol>
      <div className="carousel-inner" style={{width: "100%", height: "500px !important"}}>
        {images.map((image, index) => {
          let altSlide = "slide n" + index;

          if (index === 0) {
            return (
              <div className="carousel-item active" >
                <img
                  className="d-block w-100 img-fluid"
                  src={image.image}
                  alt={altSlide}
                />
              </div>
            );
          } else {
            return (
              <div className="carousel-item" >
                <img
                  className="d-block w-100 img-fluid"
                  src={image.image}
                  alt={altSlide}
                />
              </div>
            );
          }
        })}
      </div>
      <a
        className="carousel-control-prev"
        href={carouselIdTarget}
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href={carouselIdTarget}
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

function CardDescription({ description }) {
  return <div className="p-4">{description}</div>;
}

function Card({ place }) {
  let id = "id" + place[0].id;
  let accordionId = "accordion" + id;
  let accordionDataParent = "#" + accordionId;
  let headingId = "heading" + id;
  let dataTarget = "#" + id;

  return (
    <div className="container-fluid accordion-print lead" key={Math.random()}>
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
                    <span
                      className="title-section font-weight-bold"
                      style={{ color: "#5B5959" }}
                    >
                      {place[0].places[0].name}
                    </span>

                    <span
                      className="body-section text-grey pl-3"
                      style={{ color: "" }}
                    >
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
                className="collapse show"
                aria-labelledby={headingId}
                data-parent={accordionDataParent}
              >
                <div className="card-body">
                  <>
                    {place.map((singlePlace, index) => {
                      let transportIncluded = singlePlace.transports.length > 0
                      let accomodationIncluded = singlePlace.accomodations.length > 0
                      return (
                        <div className="d-flex row">
                          {/* Componente Timeline */}
                          <div className="col-1 d-none d-xl-block">
                            <Timeline 
                              dayn={index + 1} 
                              transport={transportIncluded}
                              accomodation={accomodationIncluded}
                              />
                          </div>
                          {/* Altra roba */}
                          <div className="col-11">
                            {/* Componente Titolo + Day */}
                            <CardTitle
                              title={singlePlace.days[0].name}
                              date={singlePlace.dayDate}
                              dayn={index + 1}
                            />
                            {/* Descrizione */}
                            <CardImage images={singlePlace.days[0].images} />
                            <CardDescription
                              description={singlePlace.days[0].description}
                            />
                            <Trasporti transport={singlePlace.transports} />
                            <Accomodation
                              key={Math.random()}
                              acc={singlePlace.accomodations}
                            />
                            <CheckUncheck included={singlePlace.included} notIncluded={singlePlace.notIncluded}/>
                          </div>
                        </div>
                      );
                    })}
                  </>
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
