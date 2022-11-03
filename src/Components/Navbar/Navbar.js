import { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [largeur, setLargeur] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {
    const changeWidht = () => {
      setLargeur(window.innerWidth)
    }

    window.addEventListener('resize', changeWidht)

    return () => {
      window.removeEventListener('resize', changeWidht)
    }
  }, [])

  return (
    <nav>
      {(toggleMenu || largeur > 500) && (
        <ul className="liste">
          <li className="items">Accueil</li>
          <li className="items">Services</li>
          <li className="items">Contact</li>
        </ul>
      )}
      <button
        onClick={toggleNav}
        className="btn">BTN</button>
    </nav>
  )
}
