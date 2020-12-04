import React from "react";

function CheckUncheck({ included, notIncluded }) {
  function printIncluded() {
    if (included != null) {
      return (
        <div className="check d-flex justify-content-center align-items-center">
          <i class="fas fa-check"></i>
          <div className="checkp">
            <p>{included}</p>
          </div>
        </div>
      );
    }
  }

  function printNotIncluded() {
    if (notIncluded != null) {
      return (
        <div className="uncheck">
          <i class="fas fa-times"></i>
          <div className="checkp">
            <p>{notIncluded}</p>
          </div>
        </div>
      );
    }
  }

  return (
    <div className="main">
      {printIncluded()}
      {printNotIncluded()}
    </div>
  );
}

export default CheckUncheck;
