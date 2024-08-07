import { Link } from "react-router-dom";
export default function Who() {
  return (
    <div className="fluid-container px-4 my-5 pt-3 pb-3" >
      <h1 className="fs-2 mb-3">Who Are You Shopping For?</h1>
      <div className="row">
        <div className="col-md mb-md-0 mb-4 position-relative">
          <img
            src="https://www.adidas.sa/dw/image/v2/BFNL_PRD/on/demandware.static/-/Library-Sites-AdidasSharedLibrary/default/dwe29a4090/EGYPT/em-za-categorytiles-hp-men-promoblock.jpg"
            className="img-fluid"
            alt=""
          />
            <div className="position-absolute bottom-0 h-100 d-flex justify-content-center w-100 align-items-end">
                <Link to="men" className="btn btn-light mb-4">Men</Link>
            </div>
        </div>
        <div className="col-md mb-md-0 mb-4  position-relative">
          <img
            src="https://www.adidas.sa/dw/image/v2/BFNL_PRD/on/demandware.static/-/Library-Sites-AdidasSharedLibrary/default/dw6d86694a/EGYPT/em-za-categorytiles-hp-women-promoblock.jpg"
            alt=""
            className="img-fluid"
          />
          <div className="position-absolute bottom-0 h-100 d-flex justify-content-center w-100 align-items-end">
                <Link to="women"  className="btn btn-light mb-4">Women</Link>
            </div>
        </div>
        <div className="col-md position-relative">
          <img
            src="https://www.adidas.sa/dw/image/v2/BFNL_PRD/on/demandware.static/-/Library-Sites-AdidasSharedLibrary/default/dw93d85c4f/EGYPT/em-za-categorytiles-hp-kids-promoblock.jpg"
            alt=""
            className="img-fluid"
          />
          <div className="position-absolute bottom-0 h-100 d-flex justify-content-center w-100 align-items-end">
                <Link to="kids"  className="btn btn-light mb-4">Kids</Link>
            </div>
        </div>
      </div>
    </div>
  );
}
