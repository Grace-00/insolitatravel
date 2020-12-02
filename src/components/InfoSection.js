import React from "react";

function InfoSection({ id, title, description }) {
    let accordionId = "accordion" + id;
    let accordionDataParent = "#" + accordionId;
    let headingId = "heading" + id;
    let dataTarget = "#" + id;

    return (
        <div className="container-fluid accordion-print">
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
                                >
                                    {title}

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
                                    <div className="lead">{description}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoSection;
