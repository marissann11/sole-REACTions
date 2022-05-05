import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_SHOES } from '../../utils/queries';
import { useStoreContext } from '../../utils/GlobalState';
import { Segment, Dropdown, Menu, Checkbox } from 'semantic-ui-react';
import {
  useQueryParams,
  StringParam,
  ArrayParam,
  withDefault,
} from 'use-query-params';
import { UPDATE_SHOES } from '../../utils/actions';

const BRANDS = [
  { key: 1, label: 'adidas', value: 'Adidas' },
  { key: 2, label: 'Nike', value: 'Nike' },
  { key: 3, label: 'Jordan', value: 'Jordan' },
  { key: 4, label: 'New Balance', value: 'Newbalance' },
];

const COLORS = [
  { key: 1, label: 'Multi  🌈', value: 'Multi' },
  { key: 2, label: 'Brown 🟫', value: 'Brown' },
  { key: 3, label: 'Black ⬛', value: 'Black' },
  { key: 4, label: 'Grey ⬜', value: 'Grey' },
  { key: 5, label: 'White ⧄', value: 'White' },
  { key: 6, label: 'Red 🟥', value: 'Red' },
  { key: 7, label: 'Orange 🟧', value: 'Orange' },
  { key: 8, label: 'Yellow 🟨', value: 'Yellow' },
  { key: 9, label: 'Green 🟩', value: 'Green' },
  { key: 10, label: 'Blue 🟦', value: 'Blue' },
  { key: 11, label: 'Purple 🟪', value: 'Purple' },
];

const SPORTS = [
  { key: 1, label: 'Basketball', value: 'Basketball' },
  { key: 2, label: 'Casual', value: 'Casual' },
  { key: 3, label: 'Skateboarding', value: 'Skateboarding' },
  { key: 4, label: 'Golf', value: 'Golf' },
  { key: 5, label: 'Running', value: 'Running' },
];

export default function App() {
  const [state, dispatch] = useStoreContext();
  const [active, setActive] = useState([]);
  const { loading, data, refetch: queryAllShoes } = useQuery(QUERY_ALL_SHOES);

  const [query, setQuery] = useQueryParams({
    sort: StringParam,
    filters: withDefault(ArrayParam, []),
  });

  const { sort: sortQuery, filters } = query;

  const handleItemClick = (e, { name, value }) => {
    setActive({ active: name });
    setQuery({ filters: [...filters], sort: value });
  };

  const toggleSelection = (e, { category, value, checked }) => {
    let newFilters = [];
    if (checked) {
      newFilters = [...filters, JSON.stringify({ category, value })];
      setQuery({ filters: newFilters });
    } else {
      newFilters = [
        ...filters.filter((i) => i !== JSON.stringify({ category, value })),
      ];
      setQuery({ filters: newFilters }, 'replaceIn');
    }
    const queryFilters = {};
    newFilters.forEach((i) => {
      let item = JSON.parse(i);
      console.log('item', item);
      queryFilters[item.category] = queryFilters[item.category]
        ? queryFilters[item.category].concat(item.value)
        : [item.value];
    });
    queryAllShoes({ filters: queryFilters });
    console.log(queryFilters);
  };

  useEffect(() => {
    queryAllShoes({ filters: [...filters] });
    if (data) {
      dispatch({
        type: UPDATE_SHOES,
        shoes: data.shoes,
      });
    }
  }, [data]);

  return (
    <Segment>
      <Menu text stackable>
        <Menu.Item header>Filter By</Menu.Item>
        <Dropdown item simple text="Brand">
          <Dropdown.Menu>
            {BRANDS.map((brand) => (
              <Dropdown.Item key={brand.key}>
                <Checkbox
                  category="brand"
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
                  category="color"
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
                  category="sport"
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
          active={active === 'price⇅'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="year⇅"
          value="yearASC"
          active={active === 'year⇅'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="price⇵"
          value="priceDESC"
          active={active === 'price⇵'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="year⇵"
          value="yearDESC"
          active={active === 'year⇵'}
          onClick={handleItemClick}
        />
      </Menu>
    </Segment>
  );
}
