import React from "react";

function InfoSection({id, title, description}) {
  let accordionId = 'accordion' + id;
  let accordionDataParent = '#' + accordionId;
  let headingId = 'heading' + id;
  let dataTarget = "#" + id;

  return (
    <div className="container-fluid accordion-print">
      <div className="row">
        <div className="col-12 col-md-10 offset-md-1 pb-4">
          <div id={accordionId} className="accordion">
            <div className="card">
              <div className="card-header" id={headingId}>
                <h2 className="mb-0">
                  <button
                    className="btn btn-link"
                    type="button"
                    data-toggle="collapse"
                    data-target={dataTarget}
                    aria-expanded="true"
                    aria-controls={id}
                  >
                    {title}
                  </button>
                </h2>
              </div>

              <div
                id={id}
                className="collapse "
                aria-labelledby={headingId}
                data-parent={accordionDataParent}
              >
                <div className="card-body">
                  {description}
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
