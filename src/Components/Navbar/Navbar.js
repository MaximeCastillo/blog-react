import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
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
          <li className="items">
            <Link to='/'>Accueil</Link>
          </li>
          <li className="items">
            <Link to='/ecrire'>Écrire</Link>
          </li>
          <li className="items">
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      )}
      <button
        onClick={toggleNav}
        className="btn">
        BTN
      </button>
    </nav>
  )
}
