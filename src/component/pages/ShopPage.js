import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import { ManageContext } from './MyContext';

function ShopPage() {
  // const [product, setProduct] = useState([]);
  const { product, setProduct } = useContext(ManageContext);

  // useEffect(() => {
  //   fetch(`http://159.65.21.42:9000/products/`)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((warn) => {
  //       setProduct(warn);
  //     });
  // }, []);

  return (
    <>
      <Header />
      <div className='ShopPage__Nav'>
        <p>
          1-16 of over 10,000 results for{' '}
          <b style={{ color: '#cc5500' }}>"gaming headsets"</b>
        </p>
        <input
          className=' ShopPage__sort'
          type='text'
          disabled
          placeholder='Sort by: Featured &#709;'
        />
      </div>

      {/* Product Content */}
      <div className='  ShopPage__content'>
        <div className='  ShopPage__row1'>
          <ul>
            <li>
              <b>Climate Pledge Friendly</b>
            </li>

            <li>
              <input type='checkbox' />
              Climate Pledge Friendly
            </li>
          </ul>

          <ul>
            <li>
              <b>Department</b>
            </li>
            <li>PC Games & Accessories</li>
            <li>PC game Headsets</li>
            <li>Xbox One Headsets</li>
            <li>PlayStation 4 Headsets</li>
            <li>PlayStation 5 Headsets</li>
            <li>PlayStation legacy Systems</li>
            <li>Mac Game Headsets</li>
            <li>&#709; See All 12 Departments</li>
          </ul>

          <ul>
            <li>
              <b>Customers Review</b>
            </li>
            <li>&#11088;&#11088;&#11088;&#11088;&#9734; & Up</li>
            <li>&#11088;&#11088;&#11088;&#9734;&#9734; & Up</li>
            <li>&#11088;&#11088;&#9734;&#9734;&#9734; & Up</li>
            <li>&#11088;&#9734;&#9734;&#9734;&#9734; & Up</li>
          </ul>

          <ul>
            <li>
              <b>Brands</b>
            </li>
            <li>
              <input type='checkbox' />
              HyperX
            </li>
            <li>
              <input type='checkbox' />
              Razer
            </li>
            <li>
              <input type='checkbox' />
              SteelSeries
            </li>
            <li>
              <input type='checkbox' />
              Corsair
            </li>
            <li>
              <input type='checkbox' />
              Logitech G
            </li>
            <li>
              <input type='checkbox' />
              BENGOO
            </li>
            <li>
              <input type='checkbox' />
              ASTRO Gaming
            </li>
            <li> &#709; See more</li>
          </ul>

          <ul>
            <li>
              <b>Video Game Price</b>
            </li>
            <li>Under $10</li>
            <li>$10 to $25</li>
            <li>$15 to $25</li>
            <li>$25 to $35</li>
            <li>$35 & Above</li>
          </ul>

          <ul className='d-flex gap-2'>
            <li>
              <input
                className='ShopPage__Price'
                type='text'
                placeholder='$Min'
                disabled
              />
            </li>

            <li>
              <span>
                <input
                  className='ShopPage__Price'
                  type='text'
                  placeholder='$Max'
                  disabled
                />
              </span>
            </li>

            <li>
              <button
                className='ShopPage__Price'
                style={{ borderRadius: '15px' }}
                disabled
              >
                Go
              </button>
            </li>
          </ul>

          <ul>
            <li>
              <b>New Releases</b>
            </li>
            <li>Last 30 days</li>
            <li>Last 90 days</li>
            <li>Coming Soon</li>
          </ul>

          <ul>
            <li>
              <b>Headphones Headphones Jack</b>
            </li>
            <li>
              <input type='checkbox' />
              2.5 mm Jack
            </li>
            <li>
              <input type='checkbox' />
              3.5 mm Jack
            </li>
          </ul>

          <ul>
            <li>
              <b>Headphones Theme</b>
            </li>
            <li>
              <input type='checkbox' />
              Movie
            </li>
            <li>
              <input type='checkbox' />
              TV Series
            </li>
            <li>
              <input type='checkbox' />
              Video Game
            </li>
          </ul>

          <ul>
            <li>
              <b>Package Option</b>
            </li>
            <li>
              <input type='checkbox' />
              Frustration-Free Packaging
            </li>
          </ul>

          <ul>
            <li>
              <b>Amazon Global Store</b>
            </li>
            <li>
              <input type='checkbox' />
              Amazon Global Store
            </li>
          </ul>

          <ul>
            <li>
              <b>Condition</b>
            </li>
            <li>New</li>
            <li>Used</li>
          </ul>

          <ul>
            <li>
              <b>Availability</b>
            </li>

            <li>
              <input type='checkbox' />
              Include Out of Stock
            </li>
          </ul>
        </div>

        <div className='  ShopPage__row2'>
          <h3>RESULTS</h3>
          <div className='  ShopPage__row2Col'>
            {product.length > 0 ? (
              product.map((ShopData) => {

                return product.length !== 0 ? (
                  <div className='ShopPage__row2__col' key={ShopData._id}>
                    <div key={ShopData._id}>
                      <Link className='prooduct_Link' to={`${ShopData._id}`}>
                        <img
                          src={`http://159.65.21.42:9000${ShopData.image}`}
                          alt='img'
                        />

                        <div
                          className=' ShopPage'
                          style={{ lineHeight: '15px' }}
                        >
                          <p>{ShopData.name}</p>
                          <h5>{ShopData.category}</h5>
                          <b>
                            <h3>Price:</h3>
                            <span>
                              <sup>﹩</sup>
                              {ShopData.price}
                              <sup>55</sup>
                            </span>
                          </b>

                          <div>
                            <p> Quantity: </p> {ShopData.quantity}
                          </div>

                          <div>
                            <h3>Description: </h3>
                            {ShopData.description}
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <p>Please wait, data loading....</p>
                );
              })
            ) : (
              <span>Loading, please wait ...</span>
            )}

            {/* {product.map((ShopData) => {
              return product.length !== 0 ? (
                <div className='ShopPage__row2__col'>
                  <div key={ShopData._id}>
                    <Link className='prooduct_Link' to={`${ShopData._id}`}>
                      <img src={ShopData.image} alt='img' />
                      <div className=' ShopPage' style={{ lineHeight: '15px' }}>
                        <p>{ShopData.name}</p>
                        <h5>{ShopData.category}</h5>
                        <b>
                          <h3>Price:</h3>
                          <span>
                            <sup>﹩</sup>
                            {ShopData.price}
                            <sup>55</sup>
                          </span>
                        </b>

                        <h3>
                          <p> Quantity: </p> {ShopData.quantity}
                        </h3>

                        <p>
                          <h3>Description: </h3>
                          {ShopData.description}
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              ) : (
                <p>Please wait, data loading....</p>
              );
            })} */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ShopPage;
