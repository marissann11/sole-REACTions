import { createMedia } from "@artsy/fresnel";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./style.css";
import React, { Component } from "react";
import {
  Button,
  Container,
  Dropdown,
  Icon,
  Menu,
  Segment,
  Sidebar,
} from "semantic-ui-react";
import Auth from "../../utils/auth";

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

class DesktopContainer extends Component {
  state = {};

  render() {
    const { children } = this.props;
    const { fixed } = this.state;
    if (Auth.loggedIn()) {
      return (
        <Media greaterThan="mobile" className="sticky-top">
          <Segment inverted style={{ minHeight: 10 }} vertical>
            <Menu
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Menu.Item as={Link} to="/shoes">
                Sneakers
              </Menu.Item>

              <Menu.Item header as={Link} to="/" position="right">
                <span className="navTitle">SOLE INTENTIONS</span>
              </Menu.Item>
              <Dropdown item text="Account" position="right">
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/dashboard">
                    Dashboard
                  </Dropdown.Item>
                  <Dropdown.Item as="a" onClick={() => Auth.logout()}>
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu>
          </Segment>
          {children}
        </Media>
      );
    } else {
      return (
        <Media greaterThan="mobile" className="sticky-top">
          <Segment inverted style={{ minHeight: 10 }} vertical>
            <Menu
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Menu.Item as={Link} to="/shoes">
                Sneakers
              </Menu.Item>

              <Menu.Item header as={Link} to="/" position="right">
                <span className="navTitle">SOLE INTENTIONS</span>
              </Menu.Item>
              <Dropdown item text="Account" position="right">
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/login">
                    Log In
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/signup">
                    Sign Up
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu>
          </Segment>
          {children}
        </Media>
      );
    }
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });
  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Media as={Sidebar.Pushable} at="mobile">
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="overlay"
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item as={Link} to="/">
              Home
            </Menu.Item>
            <Menu.Item as={Link} to="/cart">
              Cart
            </Menu.Item>
            <Menu.Item as={Link} to="/dashboard">
              Dash
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign="center"
              style={{ minHeight: 10, padding: "1em 0em" }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size="large">
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name="sidebar" />
                  </Menu.Item>
                  <Menu.Item as={Link} to="/" position="right">
                    <span className="navTitle">SOLE INTENTIONS</span>
                  </Menu.Item>
                  <Menu.Item position="right">
                    <Button as={Link} to="/login" inverted>
                      Log in
                    </Button>
                    <Button
                      as={Link}
                      to="/signup"
                      inverted
                      style={{ marginLeft: "0.5em" }}
                    >
                      Sign Up
                    </Button>
                  </Menu.Item>
                </Menu>
              </Container>
            </Segment>
            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
};

const ResponsiveContainer = ({ children }) => (
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

const Nav = () => <ResponsiveContainer></ResponsiveContainer>;

export default Nav;
