import { createMedia } from "@artsy/fresnel";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./style.css";
import React, { Component } from "react";
import {
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
        <Media greaterThan="mobile">
          <Segment vertical>
            <Menu pointing={!fixed} secondary={!fixed} size="medium">
              <Menu.Item header as={Link} to="/" position="left">
                <span className="navTitle">SOLE INTENTIONS</span>
              </Menu.Item>
              <Menu.Item as={Link} to="/cart">
                <Icon name="opencart" size="big" />
              </Menu.Item>
              <Dropdown item text="Account" position="right" className="drop">
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
        <Media greaterThan="mobile">
          <Segment vertical>
            <Menu pointing={!fixed} secondary={!fixed} size="medium">
              <Menu.Item header as={Link} to="/" position="left">
                <span className="navTitle">SOLE INTENTIONS</span>
              </Menu.Item>
              <Menu.Item as={Link} to="/cart">
                <Icon name="opencart" size="big" />
              </Menu.Item>
              <Dropdown item text="Account" position="right" className="drop">
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
    if (Auth.loggedIn()) {
      return (
        <Media as={Sidebar.Pushable} at="mobile">
          <Sidebar.Pushable>
            <Sidebar
              as={Menu}
              animation="overlay"
              onHide={this.handleSidebarHide}
              vertical
              visible={sidebarOpened}
            >
              <Menu.Item as={Link} to="/shoes">
                <span className="drop">Shop</span>
              </Menu.Item>
              <Menu.Item as={Link} to="/dashboard">
                <span className="drop">Dashboard</span>
              </Menu.Item>
              <Menu.Item as="a" onClick={() => Auth.logout()}>
                <span className="drop">Logout</span>
              </Menu.Item>
            </Sidebar>

            <Sidebar.Pusher dimmed={sidebarOpened}>
              <Segment textAlign="center" vertical>
                <Container>
                  <Menu pointing secondary size="large">
                    <Menu.Item onClick={this.handleToggle}>
                      <Icon name="sidebar" size="large" />
                    </Menu.Item>
                    <Menu.Item as={Link} to="/" position="right">
                      <span className="navTitleMobile">SOLE INTENTIONS</span>
                    </Menu.Item>
                    <Menu.Item as={Link} to="/cart">
                      <Icon name="opencart" size="big" />
                    </Menu.Item>
                  </Menu>
                </Container>
              </Segment>
              {children}
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Media>
      );
    } else {
      return (
        <Media as={Sidebar.Pushable} at="mobile">
          <Sidebar.Pushable>
            <Sidebar
              as={Menu}
              animation="overlay"
              onHide={this.handleSidebarHide}
              vertical
              visible={sidebarOpened}
            >
              <Menu.Item as={Link} to="/shoes">
                <span className="drop">Shop</span>
              </Menu.Item>
              <Menu.Item as={Link} to="/signup">
                <span className="drop">Sign Up</span>
              </Menu.Item>
              <Menu.Item as={Link} to="/login">
                <span className="drop">Log In</span>
              </Menu.Item>
            </Sidebar>

            <Sidebar.Pusher dimmed={sidebarOpened}>
              <Segment textAlign="center" vertical>
                <Container>
                  <Menu pointing secondary size="medium">
                    <Menu.Item onClick={this.handleToggle}>
                      <Icon name="sidebar" />
                    </Menu.Item>
                    <Menu.Item as={Link} to="/" position="right">
                      <span className="navTitleMobile">SOLE INTENTIONS</span>
                    </Menu.Item>
                    <Menu.Item as={Link} to="/cart">
                      <Icon name="opencart" size="big" />
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
