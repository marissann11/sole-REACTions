import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

export default class MenuExampleEvenlyDivided extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <>
        <Menu fluid size="large" widths={3}>
          <Menu.Item
            name="7"
            active={activeItem === "7"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="8"
            active={activeItem === "8"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="9"
            active={activeItem === "9"}
            onClick={this.handleItemClick}
          />
        </Menu>
        <Menu fluid size="large" widths={3}>
          <Menu.Item
            name="10"
            active={activeItem === "10"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="11"
            active={activeItem === "11"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="12"
            active={activeItem === "12"}
            onClick={this.handleItemClick}
          />
        </Menu>
        <Menu fluid size="large" widths={3}>
          <Menu.Item
            name="13"
            active={activeItem === "13"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="14"
            active={activeItem === "14"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="15"
            active={activeItem === "15"}
            onClick={this.handleItemClick}
          />
        </Menu>
      </>
    );
  }
}
