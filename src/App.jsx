import axios from 'axios';
import { useEffect, useReducer } from 'react';
import './App.css';
import { Cart } from './components/Cart';
import { Products } from './components/Products';
import { cartReducer } from './reducers/cartReducer';
// import { BreakingBadApi } from './components/BreakingBadApi';

function App() {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  });
  const fetchProducts = async () => {
    const { data } = await axios('https://dummyjson.com/products');

    dispatch({
      type: 'ADD_PRODUCT',
      payload: data.products,
    });
  };

  console.log(state);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      {/* <BreakingBadApi /> */}
      <Products state={state} dispatch={dispatch} />
      <Cart state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
