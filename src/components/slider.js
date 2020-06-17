import React, { useState, useEffect } from "react"

import Car from "../images/car-transparent.png"
import { gsap, TimelineMax } from "gsap"
// Slides
import SlideOne from "../components/slides/slideOne"
import SlideTwo from "../components/slides/slideTwo"
export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(1)
  const slides = 2
  useEffect(() => {
    let col = ".mkl-slider-grid-col"

    // Visibility am Anfang auf hidden zu setzen verhindert flackern -> wird bevor die Animation start auf "visible" gesetzt
    let timeline = new TimelineMax()
      .to(col, 0, { css: { visibility: "visible" } })
      .fromTo(col, 1, { opacity: 0 }, { opacity: 1 })
  }, [currentSlide])

  let transitioning = false
  function upgradeCurrentSlide() {
    if (transitioning) return
    transitioning = !transitioning
    let timeline = new TimelineMax({
      onComplete: () => {
        currentSlide >= slides
          ? setCurrentSlide(currentSlide => 1)
          : setCurrentSlide(currentSlide => currentSlide + 1)
        transitioning = !transitioning
      },
    }).to(".mkl-slider-grid-col", 0.5, { opacity: 0 })
  }

  return (
    <section id="car-slider" className="mkl-slider">
      <div className="mkl-container">
        <SlideOne
          car={Car}
          currentSlide={currentSlide}
          upgradeCurrentSlide={upgradeCurrentSlide}
        />

        <SlideTwo
          car={Car}
          currentSlide={currentSlide}
          upgradeCurrentSlide={upgradeCurrentSlide}
        />

        <nav className="mkl-slider-nav">
          <div className="mkl-slider-nav-count">0{currentSlide}</div>
          <div onClick={upgradeCurrentSlide} className="mkl-slider-nav-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 678 86.6">
              <rect y="39.3" width="607" height="8" />
              <polygon points="603 43.3 602.9 0 640.45 21.57 678 43.14 640.55 64.87 603.1 86.6 603 43.3" />
            </svg>
          </div>
          <div className="mkl-slider-nav-progress"></div>
          {/*    <div className="mkl-slider-nav-arrow">01</div> */}
        </nav>
      </div>
    </section>
  )
}
