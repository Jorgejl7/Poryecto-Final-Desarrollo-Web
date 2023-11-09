
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
          <a className="navbar-brand me-2" href="https://mdbgo.com/">
            <b>
              乔治
            </b>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarButtonsExample">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Proyectos">Proyectos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contacto">Contacto</Link>
              </li>
            </ul>

            <div className="d-flex align-items-center">
              <Link
                className="btn btn-dark px-3 btn_"
                to="https://github.com/Jorgejl7"
                role="button"
                style={{ marginRight: 4 }}
              >
                <i className="fab fa-github"></i>
              </Link>
              <Link
                className="btn btn-primary px-3 ml-4 btn_"
                to="https://www.facebook.com/profile.php?id=100006576857998"
                role="button"
              >
                <i className="fab fa-facebook"></i>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

