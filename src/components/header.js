import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { gsap, Expo } from "gsap"
import Logo from "../images/logo.png"
import Image from "gatsby-image"

import "../styles/main.scss"

export default function Header({ siteTitle }) {
  let isOpen = false
  function handleMenu() {
    if (isOpen) {
      gsap.to(
        ".mkl-header-overlay-content",
        1,
        { x: "100%", ease: Expo.easeOut },
        0
      )
      gsap.to(".mkl-header-overlay-backdrop", 1, { opacity: 0 }, 0)
    } else {
      gsap.to(".mkl-header-overlay-content", .6, { x: 0, ease: Expo.easeOut }, 0)
      gsap.to(".mkl-header-overlay-backdrop", .6, { opacity: 1 }, 0)
    }

    isOpen = !isOpen
  }
  return (
    <header className="mkl-header">
      <div className="mkl-header-grid">
        <div className="mkl-header-grid-col -left">
          <div className="mkl-header-logo">
            <img src={Logo} />
          </div>
        </div>
        <div className="mkl-header-grid-col -right">
          <span onClick={handleMenu} className="mkl-header-burger">
            <span className="mkl-header-burger-text">menu</span>
            <span className="mkl-header-burger-icon">
              <span></span>
              <span></span>
            </span>
          </span>
        </div>
      </div>

      <div className="mkl-header-overlay">
        <div className="mkl-header-overlay-backdrop"></div>
        <div className="mkl-header-overlay-content">
          <ul>
          <li><Link>Leistungen</Link></li>
             <li><Link>Über uns</Link></li>           
             <li><Link>Referenzen</Link></li>
             <li><Link>Kontakt</Link></li>
          </ul>
        </div>
      </div>
    </header>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export const query = graphql`
  query {
    logo: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
