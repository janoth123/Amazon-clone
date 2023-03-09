/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';

function Cart() {
  const [cart__cnt, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const cart__cnt = JSON.parse(localStorage.getItem('amazon__cart'));

    const allPrice = cart__cnt.reduce((a, b) => a + b.price, 0);

    setTotal(allPrice);
    setCart(cart__cnt);
  }, [cart__cnt]);

  const handleDelete = (i) => {
    let thisItem = cart__cnt[i];
    const filteredCart = cart__cnt.filter((x) => x !== thisItem);
    setCart(filteredCart);
    localStorage.setItem('amazon__cart', JSON.stringify(filteredCart));
    console.log(filteredCart);
  };
  return (
    <>
      <Header />
      <div className='cart__container'>
        {/* Col1 */}
        <div className='cart__qty'>
          <div style={{ padding: '10px' }} className='cart_info'>
            <h3>Shopping Cart</h3>
            <div style={{ fontSize: '13px' }}>
              No items selected,{' '}
              <span
                style={{
                  color: '#297e8d',
                  fontWeight: '700',
                  marginBottom: '10px',
                }}
              >
                Select all items
              </span>
              <p className='Cart__hr'>price</p>
            </div>
            <hr />
          </div>

          {/* contents */}
          {cart__cnt.length > 0 ? (
            cart__cnt.map((storedContent, i) => {
              // setTotal((prev) => (prev = storedContent.price++));

              return (
                <div key={storedContent._id} className='cart__col1 d-flex'>
                  <div className='cartOpt1'>
                    <img
                      src={`http://159.65.21.42:9000${storedContent.image}`}
                      alt=''
                    />
                  </div>

                  <div className='cartOpt2'>
                    <p>{storedContent.description}</p>

                    <p style={{ fontSize: '11px', color: 'blue' }}>
                      {storedContent.name}In Stock
                    </p>

                    <div style={{ fontSize: '13px' }}>
                      <input type='checkbox' /> &nbsp;{storedContent.name} This
                      is A GIFT <p style={{ color: 'blue' }}>Learn more</p>
                    </div>

                    <div className='cartOptSelect'>
                      <select name='' id=''>
                        <option disabled value=''>
                          Qty: {storedContent.quantity}
                        </option>
                        <option value=''>1</option>
                        <option value=''>2</option>
                        <option value=''>3</option>
                        <option value=''>4</option>
                        <option value=''>5</option>
                        <option value=''>6</option>
                        <option value=''>7</option>
                      </select>

                      <span>
                        &nbsp; |{' '}
                        <button
                          type='button'
                          className='btnDelete'
                          onClick={() => handleDelete(i)}
                        >
                          Remove
                        </button>{' '}
                        &nbsp; | save for later | Compare with similar items
                        &nbsp;| Share
                      </span>
                    </div>
                  </div>

                  <div>
                    <p>${storedContent.price}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <p>Loading, please wait...</p>
          )}

          <hr />
          <b style={{ padding: '10px 10px 10px 250px', paddingBottom: '10px' }}>
            Subtotal &nbsp; ${total}
          </b>
        </div>

        {/* Col2 */}
        <div className='cart__col2'>
          <p>Subtotal $ {total} </p>
          <button className='btnCheckout'>Proceed to checkout</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
