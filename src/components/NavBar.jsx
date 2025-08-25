import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Tiendallica</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/guitarras">Guitarras</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/bajos">Bajos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/baterias">Baterías</Link>
            </li>
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
