import React from "react";
import { useCart } from "../context/cartcontext";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  
  const handleQuantityChange = (item, quantity) => {
    updateQuantity(item, quantity);
  };

  const handleRemove = (item) => {
    removeFromCart(item);
  };
  
  return (
    <>
      
      <div className="container-fluid px-4 mx-0 mt-4 mb-5 min-vh-100">
        <h1>Your Bag</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div className="d-flex justify-content-between mt-4">
              <div className="d-flex flex-column" style={{ width: "60%" }}>
                {cartItems.map((item, index) => (
                  <div
                    className="border mb-4 d-flex"
                    style={{ height: "200px" }}
                    key={index}
                  >
                    <img
                      className="img-fluid h-100 w-auto"
                      src={item.src}
                      alt={item.alt}
                    />
                    <div className="ps-3 pt-3 pe-3 w-50">
                      <h2>{item.details}</h2>
                      <h3>Price: {item.price}</h3>
                      <div className="d-flex justify-content-between">
                        <button
                          className="btn btn-primary"
                          onClick={() =>
                            handleQuantityChange(item, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                        <div>Qty: {item.quantity}</div>
                        <button
                          className="btn btn-primary"
                          onClick={() =>
                            handleQuantityChange(item, item.quantity - 1)
                          }
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleRemove(item)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="d-flex flex-column" style={{ width: "35%" }}>
                <div className="border p-3 mb-5">
                  <h1>Order Summary</h1>
                  <hr />
                  <br />
                  <div className="d-flex justify-content-between mb-3">
                    <p className="fs-5">Subtotal</p>
                    <p className="fs-5">
                      PKR{" "}
                      {cartItems.reduce(
                        (total, item) => total + item.price * item.quantity,
                        0
                      )}
                    </p>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <p className="fs-5">Delivery</p>
                    <p className="fs-5">FREE</p>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="fs-2">Total</h5>
                    <h5 className="fs-2">
                      PKR{" "}
                      {cartItems.reduce(
                        (total, item) => total + item.price * item.quantity,
                        0
                      )}
                    </h5>
                  </div>
                </div>
                <button className="btn btn-dark">Checkout</button>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}
