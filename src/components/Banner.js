import { Link } from "react-router-dom";
export default function Banner(props) {
  return (
    <div className="container-fluid position-relative px-0 mb-5">
      <img src={`${props.image}`} className="d-block w-100" alt="" />
      <div
        className={
          props.title === "BACK TO SCHOOL"
            ? "d-flex flex-column ps-3 bottom-0  justify-content-center align-items-start text-start text-white position-absolute w-100"
            : "d-flex flex-column ps-3  bottom-0 justify-content-center align-items-start text-start text-white position-absolute w-100"
        }
      >
        <h1 className="fs-1">{props.title}</h1>
        <h2 className="fs-4 fs-md-3 mb-4">
          {props.description}
        </h2>
        {props.button.map((button) => (
          <Link to={button.link} href="" className="btn btn-inline btn-dark mb-3" key={button.text}>
            {button.text}
          </Link>
        ))}
      </div>
    </div>
  );
}
