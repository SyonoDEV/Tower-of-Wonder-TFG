import { useState } from 'react'
import axios from 'axios'
import styles from './Footer.module.css'

const assetsUrl = '/assets/'

const SOCIAL_LINKS = [
  { href: 'https://www.x.com', src: `${assetsUrl}img/social_media/twitter.png`, alt: 'Twitter' },
  { href: 'https://www.instagram.com', src: `${assetsUrl}img/social_media/instagram.png`, alt: 'Instagram' },
  { href: 'https://www.youtube.com', src: `${assetsUrl}img/social_media/youtube.png`, alt: 'YouTube' },
  { href: 'https://www.tiktok.com', src: `${assetsUrl}img/social_media/tiktok.png`, alt: 'TikTok' },
  { href: 'https://www.discord.com', src: `${assetsUrl}img/social_media/discord.png`, alt: 'Discord' },
]

const QUICK_LINKS = [
  { label: 'Inicio', to: '/' },
  { label: 'Tienda', to: '/shop' },
  { label: 'Personajes', to: '/personajes' },
  { label: 'Noticias', to: '/noticias' },
  { label: 'Contacto', to: '/contacto' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(null)
  const [error, setError] = useState(null)

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)
    setError(null)

    try {
      const res = await axios.post('/api/newsletter/subscribe', { email })
      setMessage(res.data.message)
      setEmail('')
    } catch (err) {
      setError(err.response?.data?.error || 'Error de conexión')
    } finally {
      setLoading(false)
    }
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>

        {/* BRAND */}
        <div className={styles.brand}>
          <h2 className={styles.logo}>DM</h2>
          <p className={styles.tagline}>
            Comparte, conecta y descubre contenido único.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className={styles.links}>
          <h4>Enlaces rápidos</h4>
          <ul>
            {QUICK_LINKS.map((link) => (
              <li key={link.to}>
                <a href={link.to}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* SOCIAL */}
        <div className={styles.social}>
          <h4>Síguenos</h4>
          <div className={styles.socialLinks}>
            {SOCIAL_LINKS.map(({ href, src, alt }) => (
              <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
                <img src={src} alt={alt} className={styles.socialIcon} />
              </a>
            ))}
          </div>
        </div>

        {/* NEWSLETTER */}
        <div className={styles.newsletter}>
          <h4>Newsletter</h4>
          <form onSubmit={handleNewsletterSubmit} className={styles.newsletterForm}>
            <input
              type="email"
              placeholder="Tu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.newsletterInput}
              required
              disabled={loading}
            />
            <button type="submit" className={styles.newsletterBtn} disabled={loading}>
              {loading ? '...' : 'Suscribirse'}
            </button>
          </form>

          {message && <p className={styles.successMessage}>{message}</p>}
          {error && <p className={styles.errorMessage}>{error}</p>}
        </div>

      </div>

      {/* BOTTOM */}
      <div className={styles.bottomSection}>
        <p>© {new Date().getFullYear()} Darío Márquez Bautista</p>
        <a
          href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Licencia CC BY-NC-ND 4.0
        </a>
      </div>
    </footer>
  )
}