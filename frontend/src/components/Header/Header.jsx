import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import NavMenu from '../NavMenu/NavMenu'
import CartModal from '../CartModal/CartModal'
import { useAuth } from '../../context/AuthContext'
import styles from './Header.module.css'

const ASSETS_URL = '/assets/'

export default function Header({ onLoginClick }) {
  const { isAuthenticated, user, logout } = useAuth()

  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const dropdownRef = useRef(null)

  const handleLogout = async () => {
    await logout()
    setDropdownOpen(false)
  }

  // cerrar dropdown al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const isAdmin =
    Array.isArray(user?.roles) &&
    (user.roles.includes('admin') || user.roles.includes('ROLE_ADMIN'))

  return (
    <header className={styles.header}>
      {/* LOGO */}
      <a href="/" className={styles.logoLink}>
        <img
          src={`${ASSETS_URL}img/logo.png`}
          alt="Logo"
          className={styles.logo}
        />
      </a>

      {/* RIGHT */}
      <div className={styles.actions}>
        {isAuthenticated ? (
          <div className={styles.userArea} ref={dropdownRef}>
            <button
              className={styles.userButton}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <span className={styles.username}>{user?.username}</span>
              <span className={styles.arrow}>▾</span>
            </button>

            {dropdownOpen && (
              <div className={styles.dropdownMenu}>
                <Link
                  to="/dashboard"
                  className={styles.dropdownItem}
                  onClick={() => setDropdownOpen(false)}
                >
                  👤 Perfil
                </Link>

                {isAdmin && (
                  <Link
                    to="/admin"
                    className={styles.dropdownItem}
                    onClick={() => setDropdownOpen(false)}
                  >
                    ⚙️ Admin
                  </Link>
                )}

                <div className={styles.divider} />

                <button
                  className={styles.dropdownItem}
                  onClick={handleLogout}
                >
                  🚪 Cerrar sesión
                </button>
              </div>
            )}
          </div>
        ) : (
          <button className={styles.loginBtn} onClick={onLoginClick}>
            LOGIN
          </button>
        )}
      </div>

      {/* MOBILE */}
      <button
        className={styles.menuToggle}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      <NavMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <CartModal openLoginModal={onLoginClick} />
    </header>
  )
}