import React, { useEffect, useState } from 'react';
import './gallery-section.css';
import './../../../../App.css'
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import img1 from "../../../../images/case-one/1.png";
import img2 from "../../../../images/case-one/2.jpg";
import img3 from "../../../../images/case-one/3.png";
import img4 from "../../../../images/case-one/4.png";
import img5 from "../../../../images/case-one/5.png";
import img6 from "../../../../images/case-one/6.png";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6
]

function GallerySection() {
  const [currentImage, setCurrentImage] = useState(0);
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const timeout = setTimeout(() => {
      const index = currentImage === images.length - 1 ? 0 : currentImage + 1;
      setCurrentImage(index);
    }, 10000)

    setTimeoutId(timeout);
  }, [currentImage]);

  const cycleGallery = (modifier) => {
    let index = currentImage + modifier;

    if (index < 0) {
      index = images.length - 1
    } else if (index >= images.length) {
      index = 0
    }

    setCurrentImage(index);
  }

  return (
    <div className="default-section gallery" data-scroll-index="10">
      <div className="section-title">
        <Zoom>
          <h1>Gallery<b>.</b></h1>
        </Zoom>
      </div>
      <Fade bottom>
        <div className="gallery-wrapper">
          <div className="gallery-overlay">
            <div className="gallery-control-container">
              <div className="gallery-control" onClick={() => cycleGallery(-1)}>&lt;</div>
            </div>

            <Fade cascade bottom delay={300}>
              <div className="gallery-progress">
                {images.map((_, idx) => (
                  <div className={currentImage === idx ? "selected" : ""} onClick={() => setCurrentImage(idx)} />
                ))}
              </div>
            </Fade>

            <div className="gallery-control-container">
              <div className="gallery-control" onClick={() => cycleGallery(1)}>&gt;</div>
            </div>
          </div>

          <img src={images[currentImage]} alt="" className="gallery-img" />
        </div>
      </Fade>
    </div>
  );
}

export default GallerySection