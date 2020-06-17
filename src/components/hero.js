import React from "react"
import Image from "gatsby-image"
import scrollTo from "gatsby-plugin-smoothscroll"

export default function Hero({ car }) {
  return (
    <div className="mkl-hero">
      <div className="mkl-container -h-full">
        <div className="mkl-hero-grid">
          <div className="mkl-hero-grid-col -left">
            <div className="mkl-hero-heading">
              <h1>MKL Friedrichshafen</h1>
            </div>

            <div className="mkl-hero-subheading">
              <h2>
                Großartige Beschriftungen für großartige Auftritte! Wir
                personalisieren und veredeln Ihre Berufskleidung.{" "}
              </h2>
            </div>

            <div className="mkl-hero-buttons">
              <button
                onClick={() => scrollTo("#car-slider")}
                className="mkl-button button-grey"
              >
                Mehr erfahren
              </button>
              <button className="mkl-button button-blue">
                Kontakt aufnehmen
              </button>
            </div>
          </div>
          <div className="mkl-hero-grid-col -right">
            <div className="mkl-hero-image-container">
              <Image fluid={car} alt="Car" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
