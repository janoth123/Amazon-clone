import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { bestSellersSlide } from './Slide1';
import Slider2 from './Slider2';
import Slider3 from './Slider3';
import Slider4 from './Slider4';
import ChildrenToys from './ChildrenToys';
import BeautyProduct from './BeautyProduct';
import Footer from './Footer';

import landingPage1 from '../img/landingpage1.jpg';
import landingPage2 from '../img/landingpage2.jpg';
import landingPage3 from '../img/landingpage3.jpg';
import landingPage4 from '../img/landingpage4.jpg';
import PopularPhone from './PopularPhone';
import { Link } from 'react-router-dom';
import Header from './Header';
import Header2 from './Header2';
// import Dashboard from '../../admin/Dashboard';



function LandingPage() {
  const settings = {
    arrow: true,
    dots: false,
    infinite: false,
    speed: 600,
    slidesToShow: 9,
    slidesToScroll: 9,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 9,
          slidesToScroll: 9,
          infinite: true,
          dots: false,
          arrow: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
    
      <Header className="header" />
      <Header2 />
      {/* <Dashboard /> */}
      <div style={{ position: 'relative', zIndex: '0' }}>
        <div
          id='carouselExampleControls'
          className='carousel slide'
          data-bs-ride='carousel'
        >
          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <img src={landingPage1} className='d-block w-100' alt='...' />
            </div>

            <div className='carousel-item'>
              <img src={landingPage2} className='d-block w-100' alt='...' />
            </div>

            <div className='carousel-item'>
              <img src={landingPage3} className='d-block w-100' alt='...' />
            </div>

            <div className='carousel-item'>
              <img src={landingPage4} className='d-block w-100' alt='...' />
            </div>
          </div>

          <button
            className='carousel-control-prev header2IconPrev'
            type='button'
            data-bs-target='#carouselExampleControls'
            data-bs-slide='prev'
          >
            <span
              className='carousel-control-prev-icon '
              aria-hidden='true'
            ></span>
            <span className='visually-hidden'>Previous</span>
          </button>
          <button
            className='carousel-control-next header2IconNext'
            type='button'
            data-bs-target='#carouselExampleControls'
            data-bs-slide='next'
          >
            <span
              className='carousel-control-next-icon'
              aria-hidden='true'
            ></span>
            <span className='visually-hidden'>Next</span>
          </button>
        </div>

        {/* ROWS */}
        <section>
          <div
            className='header2Container  d-flex mb-5'
            style={{
              position: 'absolute',
              zIndex: '10',
              top: '200px',
            }}
          >
            {/* row1 */}
            <div className='header2Content'>
              <h3 className='mb-3 mt-4'>Gaming accessories</h3>
              <Link className='Link' to='/ShopPage'>
                <div className='d-flex headerContent__one'>
                  <div>
                    <img
                      src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg'
                      alt=''
                    />
                    <p>Headsets</p>
                  </div>

                  <div>
                    <img
                      src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg'
                      alt=''
                    />
                    <p>Keyboards</p>
                  </div>
                </div>
              </Link>

              <Link className='Link' to='/ShopPage'>
                <div className='d-flex headerContent__one mb-4'>
                  <div>
                    <img
                      src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg'
                      alt=''
                    />
                    <p>Headsets</p>
                  </div>

                  <div>
                    <img
                      src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg'
                      alt=''
                    />
                    <p>Keyboards</p>
                  </div>
                </div>
              </Link>
              <Link to='/ShopPage'>See more</Link>
            </div>
            {/* row2 */}
            <div className='header2Content'>
              <h3 className='mb-3 mt-4'>Shop by Category</h3>
              <div className='header2Category__Holder'>
                <div className='header2Content2__Category'>
                  <Link className='Link' to='/ShopPage'>
                    <div className='d-flex  gap-4'>
                      <div>
                        <img
                          src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/computer120x._SY85_CB468850970_.jpg'
                          alt=''
                        />
                        <p>Headsets</p>
                      </div>

                      <div>
                        <img
                          src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/August/DashboardCard/PS4_120X._SY85_CB438749318_.jpg'
                          alt=''
                        />
                        <p>Keyboards</p>
                      </div>
                    </div>

                    <div className='d-flex gap-4'>
                      <div>
                        <img
                          src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Baby120X._SY85_CB468850882_.jpg'
                          alt=''
                        />
                        <p>Headsets</p>
                      </div>

                      <div>
                        <img
                          src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Toys120X._SY85_CB468851693_.jpg'
                          alt=''
                        />
                        <p>Keyboards</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <Link to='ShopPage'>Shop now</Link>
            </div>
            {/* row3 */}
            <div className='header2Content'>
              <h3 className='mb-3 mt-4'>Dresses</h3>
              <Link className='Link' to='/ShopPage'>
                <div>
                  <img
                    src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/Fuji_dash_dress_1X._SY304_CB626369146_.jpg'
                    alt=''
                  />
                </div>
              </Link>
              <Link to='ShopPage'>Shop now</Link>
            </div>
            {/* row4 */}
            <div
              className='header2__Content d-flex gap-3'
              style={{ flexDirection: 'column' }}
            >
              <div className='header2SignIn pb-1'>
                <h3 className=''>
                  Sign in for the best <br /> experience
                </h3>

                <Link to='/LogIn' style={{ textDecoration: 'none' }}>
                  <button className='btnSignInExperience'>
                    Sign in securely
                  </button>
                </Link>
              </div>

              <div className='d-flex'>
                <div>
                  <img
                    src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_1x._CB418309979_.jpg'
                    alt=''
                  />
                </div>
              </div>
            </div>
            {/* row5 */}
            <div className='header2Content'>
              <h3 className='mb-3 mt-4'>Health & Personal Care</h3>
              <div className='d-flex'>
                <div>
                  <img
                    src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop1x._SY304_CB627424361_.jpg'
                    alt=''
                  />
                  <p>Headsets</p>
                </div>
              </div>
              <Link to='ShopPage'>Shop now</Link>
            </div>
            {/* row6 */}
            <div className='header2Content'>
              <h3 className='mb-3 mt-4'>Computer & Accessories</h3>
              <div className='d-flex'>
                <div>
                  <img
                    src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg'
                    alt=''
                  />
                  <p>Headsets</p>
                </div>
              </div>

              <Link to='ShopPage'>Shop now</Link>
            </div>
            {/* row7 */}
            <div className='header2Content'>
              <h3 className='mb-3 mt-4'>Top Deal</h3>
              <div className='d-flex'>
                <div className='Header2__topDeal'>
                  <img
                    src='https://m.media-amazon.com/images/I/410IzoY4jtL._AC_SY230_.jpg'
                    alt=''
                  />
                </div>
              </div>
              <Link to='ShopPage'>Shop now</Link>
            </div>
            {/* row8 */}
            <div className='header2Content'>
              <h3 className='mb-3 mt-4'>Get fit at home</h3>
              <div className='d-flex'>
                <div>
                  <img
                    src='https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg'
                    alt=''
                  />
                </div>
              </div>
              <Link to='ShopPage'>Explore now</Link>
            </div>
          </div>
          {/* Slider Section */}
          <div
            className='sliderContainer'
            style={{
              backgroundColor: '#eaeded',
              height: '165vh',
              marginTop: '-10px',
            }}
          >
            <div
              className='card'
              style={{ top: '430px', zIndex: '5', backgroundColor: 'white' }}
            >
              <h3>Top Sellers in Books for you</h3>
              <Slider {...settings}>
                {bestSellersSlide.map((slide1) => {
                  return (
                    <div className='card-top' key={slide1.id}>
                      <img src={slide1.img} alt='' />
                    </div>
                  );
                })}
              </Slider>
            </div>
            {/* slider2 */}
            <Slider2 />
          </div>
          {/* Shop Data */}
          <div className='header2Shop__Data'>
            <div className='header2shop__DataContent'>
              <div className='header2shopContent'>
                <h3>Create with strip light</h3>
                <img
                  src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_StripLighting_379x304_1X_en_US._SY304_CB418597476_.jpg'
                  alt=''
                />
                <b className='ps-3'>
                  <Link to='ShopPage'>Shop now</Link>
                </b>
              </div>

              <div className='header2shopContent'>
                <h3>Shop Laptops & Tablets</h3>
                <img
                  src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg'
                  alt=''
                />
                <b>
                  <Link to='ShopPage'>Shop now</Link>
                </b>
              </div>

              <div className='header2shopContent'>
                <h3>For your Fitness Needs</h3>
                <img
                  src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Fitness_1X._SY304_CB639748186_.jpg'
                  alt=''
                />
                <b>
                  <Link to='ShopPage'>Shop now</Link>
                </b>
              </div>

              <div className='header2shopContent'>
                <h3>New arrivals in Toys</h3>
                <img
                  src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Toys_1X._SY304_CB639759658_.jpg'
                  alt=''
                />
                <b>
                  <Link to='ShopPage'>Shop now</Link>
                </b>
              </div>
            </div>
            {/* slider3 */}
            <Slider3 />
            {/* slider4 */}
            <Slider4 />
            {/* section7 SmartWatches */}
            <div className='section7__Smartwatches'>
              <div className='section7Content'>
                <div style={{ marginBottom: '15px', height: '400px' }}>
                  <h3>
                    <Link
                      className='Link'
                      to='/ShopPage'
                      style={{ color: 'blue', textDecoration: 'none' }}
                    >
                      Shop activity trackers and <br /> smartwatches
                    </Link>
                  </h3>
                  <img
                    src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg'
                    alt=''
                  />
                </div>
                <b className='sectiont__Atag'>
                  <Link to='ShopPage'>Shop now</Link>
                </b>
              </div>

              <div className='section7Content'>
                <h3>Gaming merchandise</h3>
                <div
                  style={{
                    marginBottom: '15px',
                    height: '350px',
                    paddingLeft: '20px',
                  }}
                >
                  <div className='d-flex section7__Col2'>
                    <div>
                      <img
                        src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Apparel_1x._SY116_CB667159060_.jpg'
                        alt=''
                      />
                      <p>Apparel</p>
                    </div>

                    <div>
                      <img
                        src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Hat_1x._SY116_CB667159060_.jpg'
                        alt=''
                      />
                      <p>Hats</p>
                    </div>
                  </div>

                  <div className='d-flex section7__Col2'>
                    <div>
                      <img
                        src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Figure_1x._SY116_CB667159060_.jpg'
                        alt=''
                      />
                      <p>Action figures</p>
                    </div>

                    <div>
                      <img
                        src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mug_1x._SY116_CB667159063_.jpg'
                        alt=''
                      />
                      <p>Mugs</p>
                    </div>
                  </div>
                </div>
                <b className='sectiont__Atag'>
                  <Link to='ShopPage'>Shop now</Link>
                </b>
              </div>

              <div className='section7Content'>
                <div style={{ marginBottom: '15px', height: '400px' }}>
                  <h3>Kindle E readers</h3>
                  <img
                    src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Desktop_Dash_Kindle_1x._SY304_CB639752818_.jpg'
                    alt=''
                  />
                </div>
                <b className='sectiont__Atag'>
                  <Link to='ShopPage'>Shop now</Link>
                </b>
              </div>

              <div className='section7Content'>
                <div style={{ marginBottom: '15px', height: '400px' }}>
                  <h3>Shop Pet supplies</h3>
                  <img
                    src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Pets_1X._SY304_CB639746743_.jpg'
                    alt=''
                  />
                </div>
                <b className='sectiont__Atag'>
                  <Link to='ShopPage'>Shop now</Link>
                </b>
              </div>
            </div>
            {/* Children toys */}
            <ChildrenToys />
            {/* PopularPhones */}
            <PopularPhone />
            <BeautyProduct />
          </div>
          {/* End before Footer */}
          <div className='section__End'>
            <div className='line'>
              <div className='endRecommendation'>
                <p style={{ marginTop: '0', paddingLeft: '10px' }}>
                  See personalized recommendations
                </p>
                <Link to='LogIn'>
                  <button className='btnSignIn' type='submit'>
                    Sign In
                  </button>
                </Link>
                <p style={{ paddingLeft: '30px' }}>
                  New customer? &nbsp;{' '}
                  <a
                    style={{
                      textDecoration: 'none',
                      fontSize: '11px',
                    }}
                    href='!#'
                  >
                    Start here.
                  </a>
                </p>
              </div>
            </div>
          </div>
          {/* Footer */}
          <center
            style={{
              backgroundColor: '#37475a',
              padding: '10px',
            }}
          >
            <a
              href='#!'
              style={{
                textDecoration: 'none',
                color: 'white',
                fontSize: '12px',
                fontWeight: '600',
              }}
            >
              Back to top
            </a>
            {/* <button id="scroll-to-top">Back to Top</button> */}
          </center>
          <Footer />
        </section>
      </div>
    </>
  );
}

export default LandingPage;
