import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './NavMenu.module.css'

const NAV_ITEMS = [
  { label: 'INICIO', to: '/' },
  { label: '🏪 TIENDA', to: '/shop' },
  { label: 'PERSONAJES', to: '/personajes' },
  { label: 'NOTICIAS', to: '/noticias' },
  { label: 'CONTACTO', to: '/contacto' },
]

export default function NavMenu({ isOpen, onClose }) {
  const menuRef = useRef(null)
  const [openSubmenu, setOpenSubmenu] = useState(null)

  // cerrar al hacer click fuera
  useEffect(() => {
    if (!isOpen) return

    const handleOutsideClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onClose()
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [isOpen, onClose])

  const handleNavigate = () => {
    onClose()
    setOpenSubmenu(null)
  }

  const toggleSubmenu = (label) => {
    setOpenSubmenu((prev) => (prev === label ? null : label))
  }

  return (
    <div
      ref={menuRef}
      className={`${styles.menuDiv} ${isOpen ? styles.active : ''}`}
    >
      {/* cerrar */}
      <button className={styles.closeBtn} onClick={onClose}>
        ✕
      </button>

      <nav>
        <ul className={styles.menu}>
          {NAV_ITEMS.map((item) => (
            <li
              key={item.label}
              className={`${styles.navItem} ${
                openSubmenu === item.label ? styles.open : ''
              }`}
            >
              <Link
                to={item.to}
                className={styles.navLink}
                onClick={handleNavigate}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* licencia */}
      <div className={styles.licenseMobile}>
        <p className={styles.licenseText}>
          © {new Date().getFullYear()} Darío Márquez Bautista — CC BY-NC-ND 4.0
        </p>
      </div>
    </div>
  )
}