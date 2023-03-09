import React from 'react';
import { Link } from 'react-router-dom';
import Amazonlogo from '../img/Amazon-Logo.png';

function Footer() {
  return (
    <>
      <footer className='footerSectionOne'>
        <div>
          <ul>
            <li>
              <b
                style={{ fontSize: '15px', fontWeight: '600', color: 'white' }}
              >
                Get to Know Us
              </b>
            </li>
            <li>Careers</li>
            <li>Blog</li>
            <li>About Amazon</li>
            <li>Investor Relations</li>
            <li>Amazon Devices</li>
            <li>Amazon Science</li>
          </ul>
        </div>

        <div>
          <ul>
            <li>
              <b
                style={{ fontSize: '15px', fontWeight: '600', color: 'white' }}
              >
                Make Money with Us
              </b>
            </li>
            <li>Sell products on Amazon</li>
            <li>Sell on Amazon Business</li>
            <li>Sell apps on Amazon</li>
            <li>Become an Affiliate</li>
            <li>Advertise Your Products</li>
            <li>Self-Publish with Us</li>
            <li>
              {' '}
              ▶ See More Make Money <br /> with Us
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li>
              <b
                style={{ fontSize: '15px', fontWeight: '600', color: 'white' }}
              >
                Amazon Payment Products
              </b>
            </li>
            <li>Amazon Business Card</li>
            <li>Shop with Points</li>
            <li>Reload Your Balance</li>
            <li>Amazon Currency Converter</li>
          </ul>
        </div>

        <div>
          <ul>
            <li>
              <b
                style={{ fontSize: '15px', fontWeight: '600', color: 'white' }}
              >
                Let Us Help You
              </b>
            </li>
            <li>
              Amazon and Covid- <br />
              19
            </li>
            <li>Your Account</li>
            <li>Your Orders</li>
            <li>
              Shipping Rates & <br />
              Policies
            </li>
            <li>
              Returns & <br />
              Replacements
            </li>
            <li>
              Manage Your <br />
              Content and Devices
            </li>
            <li>Amazon Assistant</li>
            <li>Help</li>
          </ul>
        </div>
      </footer>

      <div
        style={{
          backgroundColor: '#232f3e',
          marginTop: '-30px',
          paddingBottom: '30px',
        }}
      >
        <hr
          style={{
            backgroundColor: 'white',
            border: '1px solid white',
            // paddingBottom: '30px',
          }}
        />
        <div className='Footer2'>
          <div>
            <img className='footer__Logo' src={Amazonlogo} alt='' />
          </div>

          <div className='foot2Content'>
            <input
              className='footerLanguage__'
              type='text'
              placeholder='🌎 English &#8597;'
              disabled
            />
            <input
              className='footerLanguage_'
              type='text'
              placeholder='$ USD-U.S. Dollar'
              disabled
            />
            <span className='footerLanguage'>
              $
              <img
                className='CountryFlag'
                src='https://media.flaticon.com/dist/min/img/flags/en.svg'
                alt=''
              />
              United States
            </span>
          </div>
        </div>
      </div>

      {/* lastFooter */}
      <div className='lastFooter'>
        <div>
          <ul>
            <li>
              <b>Amazon Music</b>
            </li>
            <li>
              Stream millions <br />
              of songs
            </li>
          </ul>

          <ul>
            <li>
              <b>Sell on Amazon</b>
            </li>
            <li>
              Start a Selling <br /> Account
            </li>
          </ul>

          <ul>
            <li>
              <b>Book Depository</b>
            </li>
            <li>BooksWith Free</li>
            <li>Dekivery</li>
            <li>Worldwide</li>
          </ul>

          <ul>
            <li>
              <b>IMDbPro</b>
            </li>
            <li>Get Info</li>
            <li>Entertainment</li>
            <li>Professionals</li>
            <li>Need</li>
          </ul>
        </div>

        <div>
          <ul>
            <li>
              <b>
                Amazon <br />
                Advertising
              </b>
            </li>
            <li>
              Find, attract, and <br />
              engage customers
            </li>
          </ul>

          <ul>
            <li>
              <b>Amazon Business</b>
            </li>
            <li>
              Everything For <br />
              Your Business
            </li>
          </ul>

          <ul>
            <li>
              <b>Box Office Mojo</b>
            </li>
            <li>Find Movie</li>
            <li>Box Office Data</li>
          </ul>

          <ul>
            <li>
              <b>
                Kindly Direct <br />
                Publish
              </b>
            </li>
            <li>Indie DIgital & Print</li>
            <li>
              Publishing <br />
              Made Easy
            </li>
          </ul>

          <ul>
            <li>
              <b>eero WiFi</b>
            </li>
            <li>
              Stream 4k Video <br />
              in Every Room
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li>
              <b>
                <b>Amazon Drive</b>
              </b>
            </li>
            <li>
              Cloud storage <br />
              from Amazon
            </li>
          </ul>

          <ul>
            <li>
              <b>AmazonGlobal</b>
            </li>
            <li>
              Ship Orders <br />
              Internationally
            </li>
          </ul>

          <ul>
            <li>
              <b>ComiCology</b>
            </li>
            <li>
              Thousands of <br />
              digital Comics
            </li>
          </ul>

          <ul>
            <li>
              <b>
                Prime Video <br />
                Direct
              </b>
            </li>
            <li>
              Video Distribution <br />
              Made Easy
            </li>
          </ul>

          <ul>
            <li>
              <b>Blink</b>
            </li>
            <li>
              Smart Security <br />
              for Every Home
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li>
              <b>6pm</b>
            </li>
            <li>
              Score deals <br />
              on fashion brands
            </li>
          </ul>

          <ul>
            <li>
              <b>Home Services</b>
            </li>
            <li>Experienced</li>
            <li>Pros</li>
            <li>Happiness</li>
            <li>Guarantee</li>
          </ul>

          <ul>
            <li>
              <b>DPReview</b>
            </li>
            <li>Digital</li>
            <li>Photography</li>
          </ul>

          <ul>
            <li>
              <b>Shopbop</b>
            </li>
            <li>Designer</li>
            <li>Fashioin Brands</li>
          </ul>

          <ul>
            <li>
              <b>Neighbors App</b>
            </li>
            <li>
              Real-Time Crime <br />& Safety Alerts
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li>
              <b>AbeBooks</b>
            </li>
            <li>
              Books, art <br />& collectibles
            </li>
          </ul>

          <ul>
            <li>
              <b>Amazon Ignite</b>
            </li>
            <li>Sell your original</li>
            <li>
              Digital Educational <br />
              Resources
            </li>
          </ul>

          <ul>
            <li>
              <b>Fabric</b>
            </li>
            <li>
              Sewing, Quality <br />& Knitting
            </li>
          </ul>

          <ul>
            <li>
              <b>Woot!</b>
            </li>
            <li>
              Deals and <br />
              Shenanigans
            </li>
          </ul>

          <ul>
            <li>
              <b>
                Amazon Subscription <br />
                Boxes
              </b>
            </li>
            <li>
              Top subscription boxes - <br />
              right to your door
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li>
              <b>ACX</b>
            </li>
            <li>Audiobook</li>
            <li>Publishing</li>
            <li>MadeEasy</li>
          </ul>

          <ul>
            <li>
              <b>
                Amazon Web <br />
                Services
              </b>
            </li>
            <li>Scalable Cloud</li>
            <li>Computing Services</li>
          </ul>

          <ul>
            <li>
              <b>Goodreads</b>
            </li>
            <li>
              Book reviews <br /> & recommendations
            </li>
          </ul>

          <ul>
            <li>
              <b>Zappos</b>
            </li>
            <li>Shoes &</li>
            <li>Clothing</li>
          </ul>

          <ul>
            <li>
              <b>PillPack</b>
            </li>
            <li>Pharmacy Simplified</li>
          </ul>
        </div>

        <div>
          <ul>
            <li>
              <b>Alexa</b>
            </li>
            <li>Actionable</li>
            <li>Analytics</li>
            <li>for the Web</li>
          </ul>

          <ul>
            <li>
              <b>Audible</b>
            </li>
            <li>Listen to Books &</li>
            <li>Original</li>
            <li>Audio</li>
            <li>Performance</li>
          </ul>

          <ul>
            <li>
              <b>IMDb</b>
            </li>
            <li>Movies, TV</li>
            <li>& Celebrities</li>
          </ul>

          <ul>
            <li>
              <b>Ring</b>
            </li>
            <li>Smart Home</li>
            <li>Security Systems</li>
          </ul>
        </div>
      </div>
      {/* Disclaimer */}
      <center className='end'>
        <p>Condition of Use &nbsp; Privacy Notice &nbsp; Interest-Based Ads</p>
        <p>&copy; 1996-2022, Amazon.com, Inc. or its affiliates</p>
        <Link className='Link' to='/Dashboard'>
          Admin &nbsp;
        </Link>

        <Link className='Link' to='/'>
          | &nbsp; Home
        </Link>
      </center>
    </>
  );
}

export default Footer;
