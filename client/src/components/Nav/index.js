import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Segment, Button } from "semantic-ui-react";
import Auth from "../../utils/auth";

const Nav = () => {
  const [activeState, setActiveState] = useState({ activeItem: "home" });
  const handleItemClick = (e, { name }) => setActiveState({ activeItem: name });
  const { activeItem } = activeState;

  const showNav = () => {
    if (Auth.loggedIn()) {
      return <p>I am logged in</p>;
    } else {
      return (
        <Menu inverted pointing secondary style={{ height: "8vh" }}>
          <Menu.Item
            as={Link}
            to="/"
            name="home"
            active={activeItem === "home"}
            onClick={handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="/cart"
            name="cart"
            active={activeItem === "cart"}
            onClick={handleItemClick}
          />
          <Menu.Item
            as={Link}
            to={"/dashboard"}
            name="dash"
            active={activeItem === "dash"}
            onClick={handleItemClick}
          />
          <Menu.Item
            position="right"
            as={Link}
            to={"/"}
            name="sole intentions"
            style={{
              fontFamily: "Permanent Marker, cursive",
            }}
            active={activeItem === "sole intentions"}
            onClick={handleItemClick}
          />
          <Menu.Item position="right">
            <Button as={Link} to="/login">
              Log In
            </Button>
            <Button as={Link} to="/signup" style={{ marginLeft: "0.5em" }}>
              Sign Up
            </Button>
          </Menu.Item>
        </Menu>
      );
    }
  };

  return <Segment inverted>{showNav()}</Segment>;
};

export default Nav;
