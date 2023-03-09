import React, { useContext } from 'react';
import '../admin/Admin.css';
import { BsCart } from 'react-icons/bs';
import { BsPeopleFill } from 'react-icons/bs';
import { FcConferenceCall } from 'react-icons/fc';

import AdminNav from './AdminNav';
import Footer from '../component/pages/Footer';
import { ManageContext } from '../component/pages/MyContext';

function Dashboard() {
  const { product, users, cartContent } = useContext(ManageContext);

  return (
    <>
      <div className='admin__Container'>
        <div className='admin__Nav'>
          <AdminNav />
        </div>
        {/* <Users /> */}

        <div className='admin__section2'>
          <div className='sec1'>
            <b className='no__Items'>{cartContent.length}</b>
            <b style={{ marginTop: '28px' }}>
              {' '}
              {<BsCart className='allCart' />}
            </b>
            <b>number of items in cart</b>
          </div>

          <div className='sec1'>
            <b>{<BsPeopleFill className='allCart' />}</b>
            <span>{users.length}</span>
            <b>number of users</b>
          </div>
          <div className='sec1'>
            <b>{<FcConferenceCall className='allCart' />}</b>
            <span>{product.length}</span>
            <b>number of product</b>
          </div>
        </div>

        {/* Content2 */}
        <table className='table Default__Content'>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Product Name</th>
              <th scope='col'>Product Image</th>
              <th scope='col'>Description</th>
              <th scope='col'>Category</th>
              <th scope='col'>Price</th>
              <th scope='col'>Available Stock</th>
              <th scope='col'>Action</th>
            </tr>
          </thead>

          <tbody className='table-group-divider'>
            <tr>
              <th scope='row'>1</th>
              <td>Park Avenue</td>
              <td>
                <img
                  className='default__Img'
                  src='http://159.65.21.42:9000/uploads/418img39.jpeg'
                  alt=''
                />
              </td>
              <td>Men Slim Fit Printed Formal Shirt</td>
              <td>Fashion</td>
              <td>
                $1049 <sup>55</sup>
              </td>
              <td style={{ paddingLeft: '70px' }}>3</td>
              <td>
                <button className='btn__Action'>ReStock Now 😟!</button>
              </td>
            </tr>

            <tr>
              <th scope='row'>2</th>
              <td>Nimegh</td>
              <td>
                <img
                  className='default__Img'
                  src='http://159.65.21.42:9000/uploads/234img36.jpeg'
                  alt=''
                />
              </td>
              <td>Men Regular Fit Solid Spread Collar</td>
              <td>Fashion</td>
              <td>
                $399 <sup>25</sup>
              </td>
              <td style={{ paddingLeft: '70px' }}>3</td>
              <td>
                <button className='btn__Action'>ReStock Now 😟!</button>
              </td>
            </tr>

            <tr>
              <th scope='row'>3</th>
              <td>Deeksha Clothings</td>
              <td>
                <img
                  className='default__Img'
                  src='http://159.65.21.42:9000/uploads/475s1.jpeg'
                  alt=''
                />
              </td>
              <td>Men Regular Fit Checkered Formal</td>
              <td>Fashion</td>
              <td>
                $1234<sup>25</sup>
              </td>
              <td style={{ paddingLeft: '70px' }}>0</td>
              <td>
                <button
                  className='btn__Action'
                  style={{ color: 'white', backgroundColor: 'red' }}
                >
                  Out of Stock 😒!
                </button>
              </td>
            </tr>

            <tr>
              <th scope='row'>4</th>
              <td>One Above Fashion</td>
              <td>
                <img
                  className='default__Img'
                  src='http://159.65.21.42:9000/uploads/275s2.jpeg'
                  alt=''
                />
              </td>
              <td>Men Slim Fit Checkers</td>
              <td>Fashion</td>
              <td>
                $999<sup>25</sup>
              </td>
              <td style={{ paddingLeft: '70px' }}>0</td>
              <td>
                <button
                  className='btn__Action'
                  style={{ color: 'white', backgroundColor: 'red' }}
                >
                  Out of Stock😒!
                </button>
              </td>
            </tr>

            <tr>
              <th scope='row'>5</th>
              <td>Montreal Jumpsuit</td>
              <td>
                <img
                  className='default__Img'
                  src='http://159.65.21.42:9000/uploads/275s2.jpeg'
                  alt=''
                />
              </td>
              <td>Dress</td>
              <td>Fashion</td>
              <td>
                $1250<sup>25</sup>
              </td>
              <td style={{ paddingLeft: '70px' }}>100</td>
              <td>
                <button
                  className='btn__Action'
                  style={{ color: 'white', backgroundColor: 'green' }}
                >
                  Stocked 😊!
                </button>
              </td>
            </tr>

            <tr>
              <th scope='row'>6</th>
              <td>St Tropez Dress</td>
              <td>
                <img
                  className='default__Img'
                  src='http://159.65.21.42:9000/uploads/275s2.jpeg'
                  alt=''
                />
              </td>
              <td>Dress</td>
              <td>Fashion</td>
              <td>
                $1695<sup>25</sup>
              </td>
              <td style={{ paddingLeft: '70px' }}>4</td>
              <td>
                <button className='btn__Action'>ReStock Now 😟!</button>
              </td>
            </tr>

            <tr>
              <th scope='row'>7</th>
              <td>One Above Fashion</td>
              <td>
                <img
                  className='default__Img'
                  src='http://159.65.21.42:9000/uploads/275s2.jpeg'
                  alt=''
                />
              </td>
              <td>Men Slim Fit Checkers</td>
              <td>Fashion</td>
              <td>
                $999<sup>25</sup>
              </td>
              <td style={{ paddingLeft: '70px' }}>0</td>
              <td>
                <button className='btn__Action'>Out of Stock 😒!</button>
              </td>
            </tr>

            <tr>
              <th scope='row'>8</th>
              <td>Ceramic Mug</td>
              <td>
                <img
                  className='default__Img'
                  src='http://159.65.21.42:9000/uploads/275s2.jpeg'
                  alt=''
                />
              </td>
              <td>USA's Best Ceramic Work in Display</td>
              <td>Fashion</td>
              <td>
                $79<sup>15</sup>
              </td>
              <td style={{ paddingLeft: '70px' }}>57</td>
              <td>
                <button
                  className='btn__Action'
                  style={{ color: 'white', backgroundColor: 'green' }}
                >
                  In Stock😊!
                </button>
              </td>
            </tr>

            <tr>
              <th scope='row'>9</th>
              <td>Accordion Folder</td>
              <td>
                <img
                  className='default__Img'
                  src='http://159.65.21.42:9000/uploads/275s2.jpeg'
                  alt=''
                />
              </td>
              <td>Small Adjustable And Comfortable</td>
              <td>Fashion</td>
              <td>
                $45<sup>05</sup>
              </td>
              <td style={{ paddingLeft: '70px' }}>0</td>
              <td>
                <button className='btn__Action'>Out of Stock 😒</button>
              </td>
            </tr>

            <tr>
              <th scope='row'>10</th>
              <td>Liverpool Jersey</td>
              <td>
                <img
                  className='default__Img'
                  src='http://159.65.21.42:9000/uploads/275s2.jpeg'
                  alt=''
                />
              </td>
              <td>A Full Liverpool Kits With Boots</td>
              <td>Sport</td>
              <td>
                $100<sup>00</sup>
              </td>
              <td style={{ paddingLeft: '70px' }}>10</td>
              <td>
                <button className='btn__Action'>ReStock Now 🙂!</button>
              </td>
            </tr>
          </tbody>
        </table>
        <Footer />
      </div>
    </>
  );
}

export default Dashboard;
