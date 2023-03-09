import React, { useContext } from 'react';
import Amazonlogo from '../img/Amazon-Logo.png';
import { Link } from 'react-router-dom';
import { BsCart2 } from 'react-icons/bs';
import { ManageContext } from './MyContext';

function Header() {
  const { cartContent } = useContext(ManageContext);

  return (
    <div className='Header'>
      <Link to='/' className='Link'>
        <img className='Header__Logo' src={Amazonlogo} alt='' />
      </Link>

      <div className='Header__Location'>
        <p style={{ paddingLeft: '18px', fontSize: '12px' }}>
          Deliver to <br />
          <img
            className='Header__map'
            src='https://cdn-icons-png.flaticon.com/128/4329/4329052.png'
            alt=''
          />
          <b>Nigeria</b>
        </p>
      </div>

      <div className='Header__Search'>
        <span className='Header___Content'>All &#9661;</span>
        <input type='text' className='Header__SearchInput' />
        <span className='SearchIcon'>🔍</span>
      </div>

      <div className='Header__Nav'>
        <div className='Header__Option'>
          <span className='Header__OptionOne'>English</span>
          <div>
            <span className='header__arrowDown'>
              <img
                className='CountryFlag'
                src='https://media.flaticon.com/dist/min/img/flags/en.svg'
                alt=''
              />
              &#9661;
            </span>
          </div>
        </div>

        {/* LINK TO FORM PAGE */}
        <div className='Header__Option'>
          <Link to='/Login' className='Link'>
            <span className='Header__OptionTwo'>Hello sign in,</span>
            <div>
              <span className='Header__OptionTwo'>
                <strong>Account and Lists &#9661;</strong>
              </span>
            </div>
          </Link>
        </div>

        <div className='Header__Option'>
          <span className='Header__OptionThree'>Returns</span>
          <span className='Header__OptionThree'>
            <strong>& Others</strong>
          </span>
        </div>

        <div className='Header__Option'>
          <Link to='/Cart' style={{ fontWeight: '800', color: 'white' }}>
            {' '}
            <span className='cartLength'>{cartContent.length}</span>
            {<BsCart2 className='allCart' />}
          </Link>

          {/* <span>0</span> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
