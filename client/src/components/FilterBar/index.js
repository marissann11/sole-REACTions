import React, { useState } from "react";
import { Segment, Dropdown, Menu, Checkbox } from "semantic-ui-react";
import {
  useQueryParams,
  StringParam,
  ArrayParam,
  withDefault,
} from "use-query-params";

const BRANDS = [
  { key: 1, label: "adidas", value: "adidas" },
  { key: 2, label: "Nike", value: "nike" },
  { key: 3, label: "Jordan", value: "jordan" },
  { key: 4, label: "New Balance", value: "newbalance" },
];

const COLORS = [
  { key: 1, label: "Multi  🌈", value: "multi" },
  { key: 2, label: "Brown 🟫", value: "brown" },
  { key: 3, label: "Black ⬛", value: "black" },
  { key: 4, label: "Grey ⬜", value: "grey" },
  { key: 5, label: "White ⧄", value: "white" },
  { key: 6, label: "Red 🟥", value: "red" },
  { key: 7, label: "Orange 🟧", value: "orange" },
  { key: 8, label: "Yellow 🟨", value: "yellow" },
  { key: 9, label: "Green 🟩", value: "green" },
  { key: 10, label: "Blue 🟦", value: "blue" },
  { key: 11, label: "Purple 🟪", value: "purple" },
];

const SPORTS = [
  { key: 1, label: "Basketball", value: "basketball" },
  { key: 2, label: "Casual", value: "casual" },
  { key: 3, label: "Skateboarding", value: "skateboarding" },
  { key: 4, label: "Golf", value: "golf" },
  { key: 5, label: "Running", value: "running" },
];

export default function App() {
  const [active, setActive] = useState([]);

  const [query, setQuery] = useQueryParams({
    sort: StringParam,
    filters: withDefault(ArrayParam, []),
  });

  const { sort: sortQuery, filters } = query;

  const handleItemClick = (e, { name, value }) => {
    setActive({ active: name });
    setQuery({ filters: [...filters], sort: value });
  };

  const toggleSelection = (e, { value, checked }) => {
    if (checked) {
      setQuery({ filters: [...filters, value] });
    } else {
      setQuery({ filters: undefined }, "replaceIn");
    }
  };

  return (
    <Segment>
      <Menu text stackable>
        <Menu.Item header>Filter By</Menu.Item>
        <Dropdown item simple text="Brand">
          <Dropdown.Menu>
            {BRANDS.map((brand) => (
              <Dropdown.Item key={brand.key}>
                <Checkbox
                  label={brand.label}
                  value={brand.value}
                  onChange={toggleSelection}
                />
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown item simple text="Color">
          <Dropdown.Menu>
            {COLORS.map((color) => (
              <Dropdown.Item key={color.key}>
                <Checkbox
                  label={color.label}
                  value={color.value}
                  onChange={toggleSelection}
                />
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown item simple text="Sport">
          <Dropdown.Menu>
            {SPORTS.map((sport) => (
              <Dropdown.Item key={sport.key}>
                <Checkbox
                  label={sport.label}
                  value={sport.value}
                  onChange={toggleSelection}
                />
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item header position="right">
          Sort By
        </Menu.Item>
        <Menu.Item
          name="price⇅"
          value="priceASC"
          active={active === "price⇅"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="year⇅"
          value="yearASC"
          active={active === "year⇅"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="price⇵"
          value="priceDESC"
          active={active === "price⇵"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="year⇵"
          value="yearDESC"
          active={active === "year⇵"}
          onClick={handleItemClick}
        />
      </Menu>
    </Segment>
  );
}
