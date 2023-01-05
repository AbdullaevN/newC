import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import logo from "../../assets/images/logo.png";
import avatar from "../../assets/images/avatar.png";
import not from "../../assets/images/not.svg";
import searchImage from "../../assets/images/search.png";
import cloud from "../../assets/images/cloud.png";

import "./mynavbar.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function MyNavbar() {
  const [weatherdata, setweatherData] = useState({});

  //

  const menuData = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/about",
      name: "About",
    },
    {
      path: "/contact",
      name: "Contact",
    },
  ];

  //

  useEffect(() => {
    async function getData() {
      const Api = `https://api.openweathermap.org/data/2.5/weather?q=bishkek&appid=64c73dc4529ec3f20be338620673c810&units=metric`;

      try {
        let res = await axios.get(Api);
        setweatherData(res.data);
        console.log(res.data.main.temp);
      } catch (e) {
        console.log(e);
      }
    }
    getData();
  }, []);

  return (
    <>
      <Navbar bg="light" expand="lg" className="navbar">
        <Container>
          <Navbar.Brand className="brand" href="#home">
            <Link to={"/"}>
              <img src={logo} alt="" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {/* {menuData.map((item) => (
                <Nav.Link to={item.path} key={item.name} href="#home">
                  <div className="list_item">{item.name}</div>
                </Nav.Link>
              ))} */}
              <label className="search-label relative flex justify-end flex-row items-center !mb-0 ">
                <input
                  className="search-input  placeholder:text-[#999999] block bg-[#F5F8F9] sm:w-[100%] md:w-[30rem]  border-none rounded-full py-2 pl-4 !pr-0 shadow-sm focus:outline-none  sm:text-sm text-[#999999]"
                  placeholder="Поиск..."
                  type="text"
                  name="search"
                />
                <img
                  className="search-image absolute left-auto focus:outline-none md:h-2 w-auto sm:h-15"
                  src={searchImage}
                  alt=""
                />
              </label>
            </Nav>

            <Nav className="ms-auto navbar-third">
              <div className="navbar-cloud">
                <img src={cloud} className="cloud" alt="" />
                <span>{`${Math.round(weatherdata?.main?.temp)}`}&deg;C</span>
              </div>
              <div>
                <img src={not} alt="" />
              </div>
              <NavDropdown
                className="navbar-dropdown"
                title={
                  <div className="navbar-dropdown">
                    <img
                      className="thumbnail-image"
                      src={avatar}
                      alt="user pic"
                    />
                  </div>
                }
                id="basic-nav-dropdown"
              >
                <Link to={"/sign-up"}>
                  <NavDropdown.Item href="#action/3.1">Вход</NavDropdown.Item>
                </Link>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <Link to={"/sign-up"}>
                  <NavDropdown.Item href="#action/3.4">Выход</NavDropdown.Item>
                </Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;

{
  /* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
<NavDropdown.Item href="#action/3.2">
  Another action
</NavDropdown.Item>
<NavDropdown.Item href="#action/3.3">
  Something
</NavDropdown.Item>
<NavDropdown.Divider />
<NavDropdown.Item href="#action/3.4">
  Separated link
</NavDropdown.Item>
</NavDropdown> */
}
