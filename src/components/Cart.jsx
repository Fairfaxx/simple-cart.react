import { useEffect } from 'react';

export const Cart = ({ state, dispatch }) => {
  console.log(state.cart);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: '80%',
        padding: '10px',
        margin: '10px',
        backgroundColor: 'grey',
        alignContent: 'flex-start',
      }}
    >
      Cart
      {state?.cart?.map((c) => (
        <div
          key={c.id}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'flex-start',
            padding: '10',
            border: '1px solid grey',
            width: '30%',
            marginTop: '10px',
            gap: '10px',
          }}
        >
          <img
            src={c.thumbnail}
            alt={c.title}
            style={{ height: '200px', objectFit: 'cover' }}
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '10px',
            }}
          >
            <span>{c.title}</span>
            <b>$ {c.price}</b>
          </div>
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
                  id: c.id,
                  title: c.title,
                  thumbnail: c.thumbnail,
                  qty: 1,
                  price: c.price,
                },
              })
            }
          >
            Remove from Cart
          </button>
        </div>
      ))}
    </div>
  );
};
