import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { popullarBabyGift } from './Slide1';
function Slider3() {
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
    <div className='slider3'>
      <h3>Frequently repurchased in Drugstore</h3>
      <Slider {...settings}>
        {popullarBabyGift.map((slide3) => {
          return (
            <div className='slider3Content' key={slide3.id}>
              <img src={slide3.img} alt='' />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Slider3;
