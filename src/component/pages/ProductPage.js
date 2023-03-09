/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

function ProductPage() {
  const { id } = useParams();
  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetch(`http://159.65.21.42:9000/products`)
      .then((response) => {
        return response.json();
      })
      .then((warn) => {
        setProduct(warn);
      });
  }, []);

  // ADD TO CART
  const handleCart = (i) => {
    let addProduct = products[i];
    let cart = [];
    const cartStorage = JSON.parse(localStorage.getItem('amazon__cart'));
    if (!cartStorage) {
      cart.push(addProduct);
      localStorage.setItem('amazon__cart', JSON.stringify(cart));
    } else {
      cartStorage.push(addProduct);
      localStorage.setItem('amazon__cart', JSON.stringify(cartStorage));
    }
  };
  return (
    <>
      <Header />
      <div className='ProductPage__Container'>
        <Link to='/Cart'>
          <img
            src='https://m.media-amazon.com/images/I/61fE+nB3ZdS._AC_SX679_.jpg'
            alt=''
          />
        </Link>
        <div>
          <p>
            BENGOO G9700 Gaming Headset Headphones for PS4 PS5 XboX One pc
            Controller, Noise Cancelling Over Ear <br /> Headphone with Mic,
            Wjite LED Light, Bass Surround Sound for Sega Genesis Gam Boy
          </p>
        </div>

        <div>
          ⭐⭐⭐⭐⭐ <sup>1,002</sup>
        </div>

        <div>
          <sup>﹩</sup>19 <sup>99</sup>
        </div>

        <div>
          <p>
            🗸<b style={{ color: 'blue', fontWeight: '800' }}>prime</b>
          </p>
        </div>

        <div
          style={{
            backgroundColor: '#df7d0a',
            display: 'flex',
            height: '20px',
          }}
        >
          <p>15% off coupon</p>
        </div>
      </div>
      {/* Shop Page content */}
      <section className='ProductPage__Content'>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Link className='Link' style={{ color: 'blue' }} to='/ShopPage'>
            &#60; Back to results
          </Link>
          <a style={{ color: 'black', paddingRight: '10px' }} href='!#'>
            Sponsored
          </a>
        </div>

        {/* mapping through product */}
        {products.map((product, i) => {
          if (product._id === id) {
            return (
              <div key={product._id} className='ProductPage'>
                <div className='ProductPage__small__Image'>
                  <div>
                    <img
                      src={`http://159.65.21.42:9000${product.image}`}
                      alt=''
                    />
                  </div>

                  <div>
                    <img
                      src={`http://159.65.21.42:9000${product.image}`}
                      alt=''
                    />
                  </div>

                  <div>
                    <img
                      src={`http://159.65.21.42:9000${product.image}`}
                      alt=''
                    />
                  </div>

                  <div>
                    <img
                      src={`http://159.65.21.42:9000${product.image}`}
                      alt=''
                    />
                  </div>

                  <div>
                    <img
                      src={`http://159.65.21.42:9000${product.image}`}
                      alt=''
                    />
                  </div>

                  <div>
                    <img
                      src={`http://159.65.21.42:9000${product.image}`}
                      alt=''
                    />
                  </div>
                </div>

                <div className='ProductPage__mainImage'>
                  <Link to='/Cart'>
                    <img
                      src={`http://159.65.21.42:9000${product.image}`}
                      alt=''
                    />
                  </Link>
                </div>

                <div className='ProductPage__Description'>
                  <h4>{product.description}</h4>

                  <p
                    style={{
                      curor: 'pointer',
                      color: 'blue',
                      fontSize: '12px',
                    }}
                  >
                    Visit the {product.name} Store
                  </p>
                  <hr />

                  <p style={{ fontSize: '13px' }}>
                    List Price:
                    <strong>
                      <s>${product.price}</s>
                    </strong>{' '}
                    Details
                  </p>
                  <p style={{ fontSize: '13px' }}>With Deal: {product.price}</p>
                  <p style={{ fontSize: '13px' }}>You Save: $30.00(60%)</p>

                  <div>
                    <p style={{ fontSize: '13px' }}>
                      No Import Fees Deposit & $22.70 Shipping to Nigeria
                    </p>
                    <p style={{ fontSize: '13px' }}>Details &#9660;</p>
                    <div style={{ fontSize: '13px', fontWeight: '700' }}>
                      coupon &nbsp;
                      <span>
                        <input type='checkBox' /> &nbsp; Save an extra 5% when
                        you apply this <br />
                        coupon Terms &#9660;
                      </span>
                    </div>
                    <hr />

                    <p style={{ fontSize: '11px' }}>
                      Color:{' '}
                      <b style={{ color: 'blue', fontWeight: '700' }}>Blue</b>
                    </p>
                    <div className='ProductPage__MiniView'>
                      <div>
                        <img
                          src={`http://159.65.21.42:9000${product.image}`}
                          alt=''
                        />
                      </div>

                      <div>
                        <img
                          src={`http://159.65.21.42:9000${product.image}`}
                          alt=''
                        />
                      </div>

                      <div>
                        <img
                          src={`http://159.65.21.42:9000${product.image}`}
                          alt=''
                        />
                      </div>

                      <div>
                        <img
                          src={`http://159.65.21.42:9000${product.image}`}
                          alt=''
                        />
                      </div>
                    </div>
                    <hr />

                    <div className='ProductPage__ul'>
                      <p style={{ fontSize: '11px', fontWeight: '700' }}>
                        Special &nbsp; Noise Isolation, Microphone Included
                      </p>
                      <p style={{ fontSize: '11px', fontWeight: '700' }}>
                        Features
                      </p>

                      <p style={{ fontSize: '11px', fontWeight: '700' }}>
                        Headphones &nbsp; 3.5 mm Jack
                      </p>
                      <p style={{ fontSize: '11px', fontWeight: '700' }}>
                        Jack
                      </p>
                      <p style={{ fontSize: '11px', fontWeight: '700' }}>
                        Platform &nbsp; PlayStation 4, PlayStation, Xbox One,
                        Windows, Xbox 360, Mac
                      </p>
                      <p style={{ fontSize: '11px', fontWeight: '700' }}>
                        Connectivity &nbsp; Wired
                      </p>
                      <p style={{ fontSize: '11px', fontWeight: '700' }}>
                        Technology
                      </p>
                      <p style={{ fontSize: '11px', fontWeight: '700' }}>
                        Audio &nbsp; 105dB
                      </p>
                      <p style={{ fontSize: '11px', fontWeight: '700' }}>
                        Sensitivity
                      </p>

                      <hr />
                      <b style={{ fontSize: '11px', fontWeight: '700' }}>
                        About this item
                      </b>
                      <ul className='ProductPage__ulStyle'>
                        <li>{product.description}</li>

                        <li>
                          【Surrounding Stereo Subwoofer】Clear sound <br />{' '}
                          operating strong brass, splendid ambient noise <br />{' '}
                          isolation and high precision 40mm magnetic <br />{' '}
                          neodymium driver, acoustic positioning precision{' '}
                          <br /> enhance the sensitivity of the speaker unit,
                          bringing <br /> you vivid sound field, sound clarity,
                          shock feeling <br /> sound. Perfect for various games
                          like Halo 5 <br /> Guardians, Metal Gear Solid, Call
                          of Duty, Star Wars <br /> Battlefront, Overwatch,
                          World of Warcraft Legion, etc.
                        </li>

                        <li>
                          【Noise Isolating Microphone】Headset integrated{' '}
                          <br /> onmi-directional microphone can transmits high{' '}
                          <br /> quality communication with its premium noise-{' '}
                          <br /> concellng feature, can pick up sounds with
                          great <br /> sensitivity and remove the noise, which
                          enables you <br /> clearly deliver or receive messages
                          while you are in a <br /> game. Long flexible mic
                          design very convenient to <br /> adjust angle of the
                          microphone.
                        </li>

                        <li>
                          【Great Humanized Design】Superior comfortable and{' '}
                          <br /> good air permeability protein over-ear pads,
                          muti- <br /> points headbeam, acord with human body
                          engineering <br /> specification can reduce hearing
                          impairment and heat <br /> sweat.Skin friendly leather
                          material for a longer period <br /> of wearing.
                          Glaring LED lights desigend on the earcups <br /> to
                          highlight game atmosphere.
                        </li>

                        <li>
                          【Effortlessly Volume Control】High tensile strength,
                          <br />
                          anti-winding braided USB cable with rotary volume{' '}
                          <br /> controller and key microphone mute effectively{' '}
                          <br /> prevents the 49-inches long cable from twining
                          and <br /> allows you to control the volume easily and
                          mute the <br /> mic as effortless volume control one
                          key mute.
                        </li>

                        <li>
                          <b>Note:</b>Products with electrical plugs are
                          designed for use <br /> in the US. Outlets and voltage
                          differ internationally and <br /> this product may
                          require an adapter or converter for use <br /> in your
                          destination. Please check compatibility before <br />{' '}
                          purchasing.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className='addTo__Cart'>
                  <div className='addToCart__Content'>
                    <h1 style={{ color: '#b12704' }}>${product.price}</h1>
                    <p>
                      No Import Fees Deposit & <br /> $22.70 Shipping to Nigeria
                    </p>
                    <p>Details &nbsp; &#9660;</p>
                    <p>
                      Delivery <b>Oct 20 - Nov 1</b>
                    </p>
                    <p style={{ fontSize: '12px' }}>
                      {' '}
                      &#xf3c5; &nbsp; Delivery to Nigeria
                    </p>

                    <b style={{ color: 'green' }}>In Stock</b>
                    <select name='' id=''>
                      <option
                        style={{
                          fontSize: '10px',
                          color: 'red',
                          borderRadius: '15px',
                        }}
                        value=''
                      >
                        Qty: {product.quantity}
                      </option>
                      <option value=''>1</option>
                      <option value=''>2</option>
                    </select>

                    <div className='btn__addToCart'>
                      {/* <Link to='/Cart'> */}
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleCart(i);
                          alert('added to cart');
                        }}
                        type='submit'
                        style={{
                          backgroundColor: '#ffd814',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '5px',
                          fontSize: '11px',
                          borderRadius: '15px',
                          width: '200px',
                          outline: 'none',
                          border: '1px solid rgb(182, 167, 167)',
                          margin: '5px 0 5px 12px',
                        }}
                      >
                        Add to Cart
                      </button>
                      {/* </Link> */}

                      <Link to='/Cart'>
                        <button
                          type='submit'
                          style={{
                            backgroundColor: '#ffa41c',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '5px',
                            fontSize: '11px',
                            borderRadius: '15px',
                            width: '200px',
                            outline: 'none',
                            border: '1px solid rgb(182, 167, 167)',
                          }}
                        >
                          Buy Now
                        </button>
                      </Link>
                    </div>

                    <p
                      style={{
                        fontSize: '12px',
                        fontWeight: '700',
                        color: '#007190',
                        margin: '10px',
                      }}
                    >
                      &#128274; &nbsp; Secure transaction
                    </p>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </section>
      <Footer />
    </>
  );
}

export default ProductPage;
