import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_SHOES } from "../../utils/actions";
import ShoeItem from "../ShoeItem";
import { QUERY_ALL_SHOES } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import FilterBar from "../FilterBar";

function ShoeList() {
  const [state, dispatch] = useStoreContext();
  const { loading, data } = useQuery(QUERY_ALL_SHOES);

  const { shoes } = state;

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_SHOES,
        shoes: data.shoes,
      });
      data.shoes.forEach((shoe) => {
        idbPromise("shoes", "put", shoe);
      });
    } else if (!loading) {
      // since we're offline, get all of the data from the `products` store
      idbPromise("shoes", "get").then((shoes) => {
        // use retrieved data to set global state for offline browsing
        dispatch({
          type: UPDATE_SHOES,
          shoes: shoes,
        });
      });
    }
  }, [data, loading, dispatch]);

  return (
    <>
      <FilterBar />

      <div className="container-fluid prevRow ms-4">
        {state.shoes.length ? (
          <div>
            {shoes.map((shoe) => (
              <ShoeItem
                key={shoe.sku}
                sku={shoe.sku}
                image={shoe.image}
                name={shoe.name}
                price={shoe.price}
              />
            ))}
          </div>
        ) : (
          <h3>loading products</h3>
        )}
      </div>
    </>
  );
}

export default ShoeList;
