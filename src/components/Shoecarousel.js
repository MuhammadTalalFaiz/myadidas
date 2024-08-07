import React from "react";
import "../styles/carousel.css"; // Ensure this file includes any necessary styles

export default function Shoecarousel() {
  return (
    <>
      {/* Carousel for screens above medium */}
      <div className="container-fluid px-4 d-none d-md-block mb-5 pb-5">
        <h1 className="fs-2 mb-4">New Arrivals</h1>
        <div id="carouselAboveMD" className="carousel slide" data-bs-ride="false">
          <div className="carousel-inner">
            {/* Slide 1 */}
            <div className="carousel-item active">
              <div className="d-flex justify-content-between">
                {[...Array(6).keys()].map(index => (
                  <div className="flex-fill mx-1" style={{ flex: "1 0 calc(16.66% - 1rem)" }} key={index}>
                    <img className="w-100" src="https://assets.adidas.com/images/w_450,f_auto,q_auto/9b983d5bc09a4d4aba39a8bf011869ba_9366/B75806_00_plp_standard.jpg" alt={`Shoe ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
            {/* Slide 2 */}
            <div className="carousel-item">
              <div className="d-flex justify-content-between">
                {[...Array(6).keys()].map(index => (
                  <div className="flex-fill mx-1" style={{ flex: "1 0 calc(16.66% - 1rem)" }} key={index + 6}>
                    <img className="w-100" src="https://assets.adidas.com/images/w_450,f_auto,q_auto/9b983d5bc09a4d4aba39a8bf011869ba_9366/B75806_00_plp_standard.jpg" alt={`Shoe ${index + 7}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselAboveMD"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselAboveMD"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Carousel for screens below medium */}
      <div className="container-fluid px-4 d-block d-md-none mb-4 pb-4">
        <h1 className="fs-2 mb-4">New Arrivals</h1>
        <div id="carouselBelowMD" className="carousel slide" data-bs-ride="false">
          <div className="carousel-inner">
            {/* Slide 1 */}
            <div className="carousel-item active">
              <div className="d-flex justify-content-between">
                {[...Array(2).keys()].map(index => (
                  <div className="flex-fill mx-1" style={{ flex: "1 0 calc(16.66% - 1rem)" }} key={index}>
                    <img className="w-100" src="https://assets.adidas.com/images/w_450,f_auto,q_auto/9b983d5bc09a4d4aba39a8bf011869ba_9366/B75806_00_plp_standard.jpg" alt={`Shoe ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
            {/* Slide 2 */}
            {[...Array(5)].map(index=>(<div className="carousel-item">
              <div className="d-flex justify-content-between">
                {[...Array(2).keys()].map(index => (
                  <div className="flex-fill mx-1" style={{ flex: "1 0 calc(16.66% - 1rem)" }} key={index + 6}>
                    <img className="w-100" src="https://assets.adidas.com/images/w_450,f_auto,q_auto/9b983d5bc09a4d4aba39a8bf011869ba_9366/B75806_00_plp_standard.jpg" alt={`Shoe ${index + 7}`} />
                  </div>
                ))}
              </div>
            
            </div>))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselBelowMD"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselBelowMD"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}
