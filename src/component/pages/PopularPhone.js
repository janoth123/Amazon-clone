import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { phones } from './Slide1';
function PopularPhone() {
  const settings = {
    arrow: true,
    dots: true,
    infinite: false,
    speed: 600,
    slidesToShow: 8.4,
    slidesToScroll: 8,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8.4,
          slidesToScroll: 8,
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
    <div className='slider5'>
      <h3>
        Popular items this season &nbsp;
        <a
          href='!#'
          style={{
            fontSize: '13px',
            textDecoration: 'none',
            fontWeight: '700',
          }}
        >
          Shop now
        </a>
      </h3>
      <Slider {...settings}>
        {phones.map((phone) => {
          return (
            <div className='slider5Content' key={phone.id}>
              <img src={phone.img} alt='' />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default PopularPhone;
