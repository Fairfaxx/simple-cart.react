export const Products = ({ state, dispatch }) => {
  const { products, cart } = state;

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        width: '80%',
        padding: '10px',
        margin: '10px',
      }}
    >
      {products.map((prod) => (
        <div
          key={prod.id}
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '10',
            border: '1px solid grey',
            width: '30%',
            marginTop: '10px',
            gap: '10px',
          }}
        >
          <img
            src={prod.thumbnail}
            alt={prod.title}
            style={{ height: '200px', objectFit: 'cover' }}
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '10px',
            }}
          >
            <span>{prod.title}</span>
            <b>$ {prod.price}</b>
          </div>
          {cart.some((p) => p.id === prod.id) ? (
            <button
              style={{
                border: 0,
                padding: '5px',
                borderRadius: '5px',
                backgroundColor: 'red',
                color: 'white',
                margin: '5px 5px',
              }}
              onClick={() =>
                dispatch({
                  type: 'REMOVE_FROM_CART',
                  payload: {
                    id: prod.id,
                    title: prod.title,
                    thumbnail: prod.thumbnail,
                    qty: 1,
                    price: prod.price,
                  },
                })
              }
            >
              Remove from cart
            </button>
          ) : (
            <button
              style={{
                border: 0,
                padding: '5px',
                borderRadius: '5px',
                backgroundColor: 'green',
                color: 'white',
                margin: '5px 5px',
              }}
              onClick={() =>
                dispatch({
                  type: 'ADD_TO_CART',
                  payload: {
                    id: prod.id,
                    title: prod.title,
                    thumbnail: prod.thumbnail,
                    qty: 1,
                    price: prod.price,
                  },
                })
              }
            >
              Add to cart
            </button>
          )}
        </div>
      ))}
    </div>
  );
};
