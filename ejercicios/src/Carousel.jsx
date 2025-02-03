import React, { useState } from 'react';
import styles from './styles.css';

const images = [
  'https://wallpaper.forfun.com/fetch/3f/3f25c4b58297b0972b555245d34362cf.jpeg?h=600&r=0.5',
  'https://wallpaper.forfun.com/fetch/01/01e015c6e1253fe40c468d02c261a89d.jpeg?h=600&r=0.5',
  'https://wallpaper.forfun.com/fetch/45/45c5538071f5639b6b3650949fd00565.jpeg?h=600&r=0.5',
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : prevIndex));
  };

  return (
    <div className={styles.carousel}>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className={styles.carousel__image} />
      <div className={styles.carousel__buttons}>
        <button onClick={handlePrevious} className={styles.carousel__button} disabled={currentIndex === 0}>
          Anterior
        </button>
        <button onClick={handleNext} className={styles.carousel__button} disabled={currentIndex === images.length - 1}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Carousel;