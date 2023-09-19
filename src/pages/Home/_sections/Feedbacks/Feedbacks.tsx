import clsx from 'clsx';
import { useRef } from 'react';
import Slider from 'react-slick';

import { FEEDBACKS } from 'src/constants';
import { ESlideTypes } from 'src/types';

import style from './Feedbacks.module.scss';
import appStore from 'src/assets/image/icons/app-store.svg';
import arrowLeft from 'src/assets/image/icons/arrow-left.svg';
import arrowRight from 'src/assets/image/icons/arrow-right.svg';
import googlePlay from 'src/assets/image/icons/google-play.svg';
import trustPilot from 'src/assets/image/icons/trust-pilot.svg';

const icons: Record<ESlideTypes, string> = {
  appStore: appStore,
  googlePlay: googlePlay,
  trustPilot: trustPilot,
};

export const Feedbacks = () => {
  const sliderRef = useRef<Slider>(null);

  const onNextClick = () => sliderRef.current?.slickNext();
  const onPrevClick = () => sliderRef.current?.slickPrev();

  const PrevArrow = () => (
    <div className={clsx(style.arrow, 'right-[51%]')} onClick={onPrevClick}>
      <img src={arrowLeft} />
    </div>
  );

  const NextArrow = () => (
    <div className={clsx(style.arrow, 'left-[51%]')} onClick={onNextClick}>
      <img src={arrowRight} />
    </div>
  );

  return (
    <>
      <div className="flex justify-center px-8 pt-10">
        <h2 className="text-center max-w-xs">Let’s hear what real ... users say.</h2>
      </div>
      <div className="mt-8">
        <Slider
          className="carousel-slider"
          ref={sliderRef}
          nextArrow={<NextArrow />}
          prevArrow={<PrevArrow />}
          slidesToShow={1}
          slidesToScroll={1}
          variableWidth
          infinite
        >
          {FEEDBACKS.map(({ author, description, type }) => (
            <div key={author + description}>
              <div className={clsx(style.card, style[type])}>
                <img src={icons[type]} />

                <p className="font-bold">{description}</p>
                <p>{author}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};
