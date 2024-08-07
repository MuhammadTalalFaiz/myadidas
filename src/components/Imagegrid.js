import React, { useState } from "react";
import "../styles/imagegrid.css"; // Make sure this file includes the necessary styles
import { useCart } from "../context/cartcontext";
export default function Imagegrid() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [...Array(16).keys()].map(i => ({
    src: `https://assets.adidas.com/images/w_450,f_auto,q_auto/9b983d5bc09a4d4aba39a8bf011869ba_9366/B75806_00_plp_standard.jpg`,
    alt: `Image ${i + 1}`,
    details: `Shoes ${i + 1} RS4500` // Add more details if needed
  }));

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedImage(null);
  };
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (selectedImage) {
      addToCart(selectedImage); // Use addToCart from context
      handleClosePopup();
    }
  };

  return (
    <div className="container-fluid my-4 px-4">
      <h2>All Shoes</h2>
      <div className="row">
        {images.map((image, index) => (
          <div className="col-6 col-md-3 mb-4" key={index}>
            <img
              src={image.src}
              alt={image.alt}
              className="img-fluid"
              onClick={() => handleImageClick(image)}
              style={{ cursor: 'pointer' }}
            />
            <div>{image.details}</div>
          </div>
        ))}
      </div>

      {/* Popup Overlay */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="close-btn" onClick={handleClosePopup}>×</button>
            <img src={selectedImage.src} alt={selectedImage.alt} className="img-fluid" />
            <h3>{selectedImage.details}</h3>
            <button className="add-to-cart-btn" onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      )}
    </div>
  );
}
