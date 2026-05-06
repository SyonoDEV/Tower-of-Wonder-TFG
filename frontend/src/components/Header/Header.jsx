<<<<<<< HEAD
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import NavMenu from '../NavMenu/NavMenu'
import CartModal from '../CartModal/CartModal'
import { useAuth } from '../../context/AuthContext'
=======
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import NavMenu from '../NavMenu/NavMenu'
import CartModal from '../CartModal/CartModal'
import { useAuth } from '../../context/AuthContext'
import { useCart } from '../../context/CartContext'
>>>>>>> c435fbe890c05877dfa89621aae0d892d6ed2404
import styles from './Header.module.css'

const ASSETS_URL = '/assets/'

export default function Header({ onLoginClick }) {
  const { isAuthenticated, user, logout } = useAuth()
<<<<<<< HEAD

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
=======
  const { cartCount, setIsCartOpen } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const isShopPage = location.pathname === '/shop'

  const handleLogout = async () => {
    await logout()
    // La página se actualiza sola porque AuthContext cambia isAuthenticated
  }

  return (
    <header className={styles.header}>
      <a href="/" className={styles.logoLink}>
        <img
          src={`${ASSETS_URL}img/logo.png`}
          alt="Logo Tower of Wonder"
>>>>>>> c435fbe890c05877dfa89621aae0d892d6ed2404
          className={styles.logo}
        />
      </a>

<<<<<<< HEAD
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
=======
      {isAuthenticated ? (
        <div className={styles.userWelcome}>
          <div className={styles.dropdownContainer}>
            <button 
              className={styles.dropdownToggle} 
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Bienvenido, <span>{user?.username}</span> ▾
            </button>
            
            {dropdownOpen && (
              <div className={styles.dropdownMenu}>
                <Link 
                  to="/dashboard" 
                  className={styles.dropdownItem}
                  onClick={() => setDropdownOpen(false)}
                >
                  👤 Mi Perfil (Dashboard)
                </Link>
                
                {(user?.roles?.includes('admin') || user?.roles?.includes('ROLE_ADMIN')) && (
                  <Link 
                    to="/admin" 
                    className={styles.dropdownItem}
                    onClick={() => setDropdownOpen(false)}
                  >
                    ⚙️ Administración
                  </Link>
                )}
                
                <hr className={styles.dropdownDivider} />
                
                <button
                  className={styles.dropdownItem}
                  onClick={() => {
                    setDropdownOpen(false);
                    handleLogout();
                  }}
                  aria-label="Cerrar sesión"
                >
                  🚪 Cerrar Sesión
>>>>>>> c435fbe890c05877dfa89621aae0d892d6ed2404
                </button>
              </div>
            )}
          </div>
<<<<<<< HEAD
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
=======
        </div>
      ) : (
        <button
          id="login-button"
          className={styles.loginBtn}
          onClick={onLoginClick}
        >
          LOGIN
        </button>
      )}

      <button
        id="menu-toggle"
        className={styles.menuToggle}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menú"
        aria-expanded={menuOpen}
>>>>>>> c435fbe890c05877dfa89621aae0d892d6ed2404
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      <NavMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <CartModal openLoginModal={onLoginClick} />
    </header>
  )
<<<<<<< HEAD
}
=======
}
>>>>>>> c435fbe890c05877dfa89621aae0d892d6ed2404
