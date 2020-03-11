import React, { useState, useEffect } from 'react';

import AmzProduct from './AmzProduct';
import { front, prodFront } from '../../../config';

function ZincSearch({ addZincItem, atcDisabled, searchEntry, token }) {
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function findItems() {
      const res = await fetch(
        `${
          process.env.NODE_ENV === 'development' ? front : prodFront
        }/api/zinc/search?query=${searchEntry}&token=${token}`
      )
        .then(res => res.json())
        .then(json => setResults(json))
        .catch(error => setError('Error: ', error));
    }

    searchEntry && findItems();
  }, [searchEntry, token]);

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
