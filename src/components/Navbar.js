import { Outlet,Link } from "react-router-dom";
export default function Navbar() {
  return (<>
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3 sticky-top">
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <Link to="/" className="navbar-brand mr-4" href="#">
    <img src="https://www.adidas.sa/on/demandware.static/Sites-adidas-SA-Site/-/default/dwbfba2ef4/images/adidas_logo.svg" alt="" />
  </Link>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul className="navbar-nav mr-auto ps-5 mt-2 mt-lg-0">
      <li className="nav-item mx-3 active">
        <Link to="men" className="nav-link fs-4" href="#">Men</Link>
      </li>
      <li className="nav-item mx-3 ">
        <Link to="women" className="nav-link fs-4" href="#">Women</Link>
      </li>
      <li className="nav-item mx-3">
        <Link to="kids" className="nav-link fs-4" href="#">Kids</Link>
      </li> 
      
      
    </ul>
    
  </div>
  <Link to="cart" className="fs-4"><img src="https://www.adidas.sa/on/demandware.static/Sites-adidas-SA-Site/-/default/dw7578eb24/images/bag%20empty.svg" alt="" /></Link>
</nav>
<Outlet/>
</>
  );
}
