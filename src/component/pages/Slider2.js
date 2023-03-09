import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { popullarPc } from './Slide1';
function Slider2() {
  const settings = {
    arrow: true,
    dots: true,
    infinite: false,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 4.5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4.5,
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
    <div className='slider2' style={{}}>
      <h3>Popular products in PC internationally</h3>
      <Slider {...settings}>
        {popullarPc.map((slide2) => {
          return (
            <div className='card-top' key={slide2.id}>
              <img src={slide2.img} alt='' />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Slider2;
