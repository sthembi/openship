import React, { useState, useEffect } from "react";
import { Query } from "react-apollo";
import { Pane, Heading, Spinner } from "evergreen-ui";
import { gql } from "apollo-boost";
import AmzProduct from "./AmzProduct";
import { front, prodFront } from "../../../config";

function ZincSearch({ addZincItem, atcDisabled, searchEntry, token }) {
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  async function findItems() {
    const res = await fetch(
      `${
        process.env.NODE_ENV === "development" ? front : prodFront
      }/api/zinc/search?query=${searchEntry}&token=${token}`
    )
      .then(res => res.json())
      .then(json => setResults(json))
      .catch(error => setError("Error: ", error));
  }

  useEffect(() => {
    searchEntry && findItems();
  }, [searchEntry]);

  return results.map(product => (
    <>
      <div>{error}</div>
      <AmzProduct
        product={product}
        addVariantToCart={a => toaster.success(a)}
        atcDisabled={atcDisabled}
        addZincItem={(a, b, c, d, e) => addZincItem(a, b, c, d, e)}
      />
    </>
  ));
}

export default ZincSearch;
