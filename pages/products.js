import { Query } from 'react-apollo';
import Products from '../components/products/Products';
import { shopsQuery, shopsQueryVars } from '../components/shops/ShopList';

const ProductsPage = () => (
  <div>
    <Query query={shopsQuery} variables={shopsQueryVars}>
      {({ data, error, loading }) => {
        if (error || !data.shops) return null;
        const { shops } = data;
        return <Products shops={shops} />;
      }}
    </Query>
  </div>
);

export default ProductsPage;
