import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { cosmetics } from './Slide1';
function BeautyProduct() {
  const settings = {
    arrow: true,
    dots: true,
    infinite: false,
    speed: 600,
    slidesToShow: 7.4,
    slidesToScroll: 7,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7.4,
          slidesToScroll: 7,
          infinite: true,
          dots: false,
          arrow: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 7.4,
          slidesToScroll: 7,
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
    <div className='slider6'>
      <h3>
        Popular products in Beauty internationally &nbsp;
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
        {cosmetics.map((beauty) => {
          return (
            <div className='slider6Content' key={beauty.id}>
              <img src={beauty.img} alt='' />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default BeautyProduct;
