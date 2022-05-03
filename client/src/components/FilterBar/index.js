import React, { useState } from "react";
import { Segment, Dropdown, Menu, Checkbox } from "semantic-ui-react";

const BRANDS = [
  { id: 1, title: "adidas" },
  { id: 2, title: "Nike" },
  { id: 3, title: "Jordan" },
  { id: 4, title: "New Balance" },
];

const COLORS = [
  { id: 1, title: "Multi  🌈" },
  { id: 2, title: "Brown 🟫" },
  { id: 3, title: "Black ⬛" },
  { id: 4, title: "Grey ⬜" },
  { id: 5, title: "White ⧄" },
  { id: 6, title: "Red 🟥" },
  { id: 7, title: "Orange 🟧" },
  { id: 8, title: "Yellow 🟨" },
  { id: 9, title: "Green 🟩" },
  { id: 10, title: "Blue 🟦" },
  { id: 11, title: "Purple 🟪" },
];

const SPORTS = [
  { id: 1, title: "Basketball" },
  { id: 2, title: "Casual" },
  { id: 3, title: "Skateboarding" },
  { id: 4, title: "Golf" },
  { id: 5, title: "Running" },
];

export default function App() {
  const [selection, setSelection] = useState([]);
  const [active, setActive] = useState([]);

  const handleItemClick = (e, { name }) => setActive({ active: name });

  const toggleSelection = (e, { label, checked }) => {
    if (checked) {
      setSelection([...selection, label]);
    } else {
      setSelection(selection.filter((el) => el !== label));
    }
  };

  return (
    <Segment>
      <Menu text stackable>
        <Menu.Item header>Filter By</Menu.Item>
        <Dropdown item simple text="Brand">
          <Dropdown.Menu>
            {BRANDS.map(({ id, title }) => (
              <Dropdown.Item key={id}>
                <Checkbox label={title} onChange={toggleSelection} />
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown item simple text="Color">
          <Dropdown.Menu>
            {COLORS.map(({ id, title }) => (
              <Dropdown.Item key={id}>
                <Checkbox label={title} onChange={toggleSelection} />
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown item simple text="Sport">
          <Dropdown.Menu>
            {SPORTS.map(({ id, title }) => (
              <Dropdown.Item key={id}>
                <Checkbox label={title} onChange={toggleSelection} />
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item header position="right">
          Sort By
        </Menu.Item>
        <Menu.Item
          name="price⇅"
          active={active === "price⇅"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="year⇅"
          active={active === "year⇅"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="price⇵"
          active={active === "price⇵"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="year⇵"
          active={active === "year⇵"}
          onClick={handleItemClick}
        />
      </Menu>
    </Segment>
  );
}
