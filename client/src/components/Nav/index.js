import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Segment, Button } from "semantic-ui-react";

const Nav = () => {
  const [activeState, setActiveState] = useState({ activeItem: "home" });

  const handleItemClick = (e, { name }) => setActiveState({ activeItem: name });

  const { activeItem } = activeState;

  return (
    <Segment inverted>
      <Menu inverted pointing secondary>
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
          active={activeItem === "sole intentions"}
          onClick={handleItemClick}
        />
        <Menu.Item position="right">
          <Button
            as={Link}
            to="/login"
            active={activeItem === "login"}
            onClick={handleItemClick}
          >
            Log In
          </Button>
          <Button
            as={Link}
            to="/signup"
            style={{ marginLeft: "0.5em" }}
            active={activeItem === "signup"}
            onClick={handleItemClick}
          >
            Sign Up
          </Button>
        </Menu.Item>
      </Menu>
    </Segment>
  );
};

export default Nav;
