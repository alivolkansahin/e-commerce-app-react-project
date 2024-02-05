/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react";
import { useState, useEffect } from "react";
import "./SliderBar.css";
import styles from "./SliderBar.module.css"

const SliderBar = () => {
  const [slideNumber, setSlideNumber] = useState(1);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [timerProgress, setTimerProgress] = useState(0);
  const slidesURL = [
    "https://picsum.photos/id/499/600/800",
    "https://picsum.photos/id/299/600/800",
    "https://picsum.photos/id/599/600/800",
    "https://picsum.photos/id/399/600/800",
    "https://picsum.photos/id/199/600/800"
  ]
  const context = {
    header: ["Header","Example","Project","React","Example"],
    description: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "description example 2",
      "description example 3",
      "description example 4",
      "description example 5"],
  } 

  const handleNextSlide = () => {
      slideNumber !== 5 ? 
      setSlideNumber((prevSlideNumber) => prevSlideNumber += 1) 
      : 
      setSlideNumber((prevSlideNumber) => prevSlideNumber = 1)
  }
  const handlePreviousSlide = () => {
      slideNumber !== 1 ? 
      setSlideNumber((prevSlideNumber) => prevSlideNumber -= 1) 
      : 
      setSlideNumber((prevSlideNumber) => prevSlideNumber = 5)
  }

  const handleButtonClick = (slideIndex) => {
    setSlideNumber(slideIndex);
  };

  const handleMouseEnter = () => {
    setIsAutoPlay(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlay(true);
  };

  useEffect(() => {
    let sliderInterval;

    if (isAutoPlay) {
      sliderInterval = setInterval(() => {
        setTimerProgress((prevProgress) => {
          if (prevProgress === 100) {
            handleNextSlide();
            return 0;
          }
          return prevProgress + 0.5;
        });
      }, 35); // New slide for every 8 seconds
    } else {
      clearInterval(sliderInterval);
    }

    return () => clearInterval(sliderInterval);
  }, [isAutoPlay, slideNumber, handleNextSlide]);

  return (
    <>
    <div className={styles['slider']} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className={styles['slide-content']}>
        <div className={styles['slide-image']} style={{ backgroundImage: `url(${slidesURL[slideNumber-1]})` }}>
          <div className={styles['slide-number']}>{slideNumber}/{slidesURL.length}</div>
            <div className={styles['slide-text']}>
              <div className={styles['slide-text-header']}>
                <h1>{context.header[slideNumber-1]}</h1>
              </div>
              <div className={styles['slide-text-description']}>
                <h3>{context.description[slideNumber-1]}</h3>
              </div>
            </div>
        </div>
      </div>
      <div className={styles['slide-progress-bar']} style={{ width: `${timerProgress}%` }}></div>
      <span className={styles['slide-left-arrow']} onClick={handlePreviousSlide}>&#10094;</span>
      <span className={styles['slide-right-arrow']} onClick={handleNextSlide}>&#10095;</span>
    </div>
    <div className={styles['slide-buttons']}>
          {slidesURL.map((slide, slideIndex) => (
            <span key={slideIndex} className={slideIndex === (slideNumber-1) ? "slide active" : ""} onClick={() => handleButtonClick(slideIndex+1)}></span>
          ))
          }
    </div>
    </>
  );
};

export default SliderBar;