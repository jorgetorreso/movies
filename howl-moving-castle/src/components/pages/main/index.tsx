import React from 'react';

import { useLocalStorage } from 'usehooks-ts'
import { ILang, IPerson } from '../../../types'
import { howlMovingCastleEn } from '../../../data/howl-moving-castle-en';
import { howlMovingCastleEs } from '../../../data/howl-moving-castle-es';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StyledMain } from './style';
import Card from '../../organisms/card';
import Slider from "react-slick";
import { translation } from '../../../utils/helpers';


// Usage
export default function Main() {
  const [lang] = useLocalStorage<ILang>('lang', 'en');

  const data = lang === 'en' ? howlMovingCastleEn : howlMovingCastleEs;
  
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: (
      <div>
        <div className="next-slick-arrow">
          <span>{translation('next', lang)}</span>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="13.4px"
            height="14px" viewBox="0 0 13.4 14" >
            <path d="M0,14l5-7L0,0h2.5l5,7l-5,7H0z M6,14l5-7L6,0h2.4l5,7l-5,7H6z" />
          </svg>
        </div>
      </div>
    ),

    prevArrow: (
      <div>
        <div className="prev-slick-arrow">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="13.4px" height="14px" viewBox="0 0 13.4 14" >
            <path d="M11,14L6,7l5-7h2.4l-5,7l5,7H11z M5,14L0,7l5-7h2.5l-5,7l5,7H5z" />
          </svg>
          <span>{translation('prev', lang)}</span>
        </div>
      </div>
    ),
  };

  return (
    <StyledMain>
      <h2>{data.title}</h2>
      <Slider {...settings}>
        {data.people.map((person: IPerson) => (
          <Card data={person} lang={lang} />
        ))}
      </Slider>
    </StyledMain>
  )
}