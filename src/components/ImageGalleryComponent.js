import React from "react";

function ImageGalleryComponent({ images }) {
    let firstImg = images[0].image;
    let modalId = "modal" + images[0].id;
    let modalIdTarget = "#" + modalId;
    let modalIdLongTitle = modalId + "LongTitle";

    // let carouselId = "carouselId" + images[0].id;
    // let carouselIdTarget = "#" + carouselId;
    return (
        <div className="popup-gallery">
            <div className="pr-4">
                <div
                    className="cursor-pointer img-popup"
                    data-target={modalIdTarget}
                    data-toggle="modal"
                >
                    <img
                        src={firstImg}
                        className="img-fluid"
                        alt={modalIdTarget}
                    />
                    <div className="overlay">
                        <p className="white-text">+ {images.length}</p>
                    </div>
                </div>
                <div
                    className="modal"
                    id={modalId}
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby={modalIdLongTitle}
                    aria-hidden="true"
                >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5
                                    className="modal-title"
                                    id={modalIdLongTitle}
                                >
                                    Gallery
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
                                    {/* Carousel */}
                                    {images.map((image) => {
                                        return (
                                            <img
                                                className="d-block pb-3 w-100 img-fluid"
                                                src={image.image}
                                                alt={image.image_name}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImageGalleryComponent;
