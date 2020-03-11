import { useQuery } from '@apollo/react-hooks';
import Products from '../components/products/Products';
import { ALL_SHOPS_QUERY, shopsQueryVars } from '../components/shops/ShopList';

const ProductsPage = () => {
  const { loading, data, error } = useQuery(ALL_SHOPS_QUERY, {
    variables: shopsQueryVars,
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;
  const { shops } = data;
  return <Products shops={shops} />;
};

export default ProductsPage;
