import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "./CartWidget";
import Logo from "../../Images/Logo/Logo.png";
import { Link, NavLink } from "react-router-dom";



function NavBar() {
  const styleMenu = { fontWeight: "400" };

  return (
    <header>
      <Navbar
        sticky='top'
        collapseOnSelect
        style={{ padding: "0" }}
        expand='lg'
      // bg='light'
      >
        <Container>
          <Link to='/'>
            <Navbar.Brand className='col-lg-2'>
              <img
                alt='CarArt'
                src={Logo}
                width='100'
                height='100'
                className='d-inline-block align-top'
              />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav
              className='col-lg-1 offset-lg-1 flex-grow-1 '
              style={{ justifyContent: "space-between" }}
            >
              <NavLink to='/category/MN' style={styleMenu} className="links">
                Los más nuevos
              </NavLink>
              <NavLink to='/category/MV' style={styleMenu} className="links">
                Los más vendidos
              </NavLink>
              <NavLink to='/category/MF' style={styleMenu} className="links">
                Modelos F1
              </NavLink>
              <NavLink to='/category/UU' style={styleMenu} className="links">
                ¡Últimas unidades!
              </NavLink>
              <NavLink to='/cart' className="links">
                <CartWidget />
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default NavBar;