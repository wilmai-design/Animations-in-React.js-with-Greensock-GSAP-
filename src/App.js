import React, {useRef, useEffect} from 'react';
import {TweenMax, TimelineLite, Power3} from 'gsap';

import './App.scss';

//Images
import arrow from'./images/arrow-right.svg';
import imgGirl from'./images/girl.webp';
import imgBoy from'./images/boy.webp';

function App() {

  let app = useRef(null);
  let images = useRef(null);
  let content = useRef(null);
  let tl = new TimelineLite({delay: .8});

  useEffect(() => {
    //Images vars
    const girlImage = images.firstElementChild;
    const boyImage = images.lastElementChild;

    //Content vars
    const headlineFirst = content.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const headlineThird = headlineSecond.nextSibling;
    const contentP = content.children[1];
    const contentButton = content.children[2];

    TweenMax.to(app, 0, {css: {visibility: 'visible'}})
    //console.log(app)
    //console.log(images);

    //Images animation
    tl.from(girlImage, 1.2, {y: 1280, ease: Power3.easeInOut}, 'Start')
      .from(girlImage.firstElementChild, 2, {scale: 1.7, ease: Power3.easeOut}, .2)
      .from(boyImage, 1.2, {y: 1280, ease: Power3.easeInOut}, .2)
      .from(boyImage.firstElementChild, 2, {scale: 1.9, ease: Power3.easeOut}, .2)


      //console.log(headlineFirst, headlineSecond, headlineThird, contentP, contentButton);
      tl.staggerFrom( [headlineFirst.children, headlineSecond.children, headlineThird.children], 1, {
        y: 44,
        ease: Power3.easeInOut,
        delay: .8 
        }, .15, 'Start')

        .from(contentP, 1, {y: 20, opacity:0, ease: Power3.easeOut}, 1.4)
        .from(contentButton, 1, {y:20, opacity:0, ease: Power3.easeOut}, 1.6)

  })

  
  return (
    <div className="hero" ref={el => app = el}>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner" ref={el => content = el}>
              <h1>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">Relieving the burden</div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">of disease caused</div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">by behavior.</div>
                </div>
              </h1>
              <p>Texto for Parragraph</p>
              <div className="btn-row">
                <button className="explore-button">
                  explore
                  <div className="arrow-icon">
                    <img src={arrow} alt="arrow"/>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="hero-images">
            <div className="hero-images-inner" ref={el => images = el}>
              <div className="hero-image girl">
                <img src={imgGirl} alt="girl"/>
              </div>
              <div className="hero-image boy">
                <img src={imgBoy} alt="boy"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
