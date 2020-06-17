import React from "react"

export default function SlideOne({ currentSlide, car }) {
  if (currentSlide !== 1) {
    return null
  }
  return (
    <div className="mkl-slider-grid">
      <div className="mkl-slider-grid-col -left">
        <div className="mkl-slider-wrapper">
          <div className="mkl-slider-subheading">
            <h1>Slide 1</h1>
          </div>
          <div className="mkl-slider-heading">
            <h1>KFZ Beschriftung</h1>
          </div>
          <div className="mkl-slider-description">
            <p>
              Nutzen Sie ihr Auto als Werbemittel. Eine ansprechende
              Fahrzeugbeschriftung ist eine ideale Lösung um auf sich und Ihr
              Unternehmen aufmerksam zu machen. Hinterlassen Sie einen
              unvergesslichen Eindruck mit ihrer personalisierten
              Fahrzeugwerbung wo auch immer Sie hinfahren!
            </p>
          </div>

          <button className="mkl-button button-blue">Wir bieten an</button>
        </div>
      </div>
      <div className="mkl-slider-grid-col -right">
        <img src={car} />
      </div>
    </div>
  )
}
