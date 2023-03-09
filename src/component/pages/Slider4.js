import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { homeDecor } from './Slide1';
function Slider4() {
  const settings = {
    arrow: true,
    dots: true,
    infinite: false,
    speed: 600,
    slidesToShow: 6,
    slidesToScroll: 5.5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 5.5,
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
    <div className='slider4'>
      <h3>
        Home Décor Under $20 &nbsp;
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
        {homeDecor.map((slide4) => {
          return (
            <div className='slider3Content' key={slide4.id}>
              <img src={slide4.img} alt='' />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Slider4;
