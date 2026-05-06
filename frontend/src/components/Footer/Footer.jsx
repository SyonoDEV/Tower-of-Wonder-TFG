import { useState } from 'react'
import axios from 'axios'
import styles from './Footer.module.css'

const assetsUrl = '/assets/'
<<<<<<< HEAD
=======
const baseUrl = '/'
>>>>>>> c435fbe890c05877dfa89621aae0d892d6ed2404

const SOCIAL_LINKS = [
  { href: 'https://www.x.com', src: `${assetsUrl}img/social_media/twitter.png`, alt: 'Twitter' },
  { href: 'https://www.instagram.com', src: `${assetsUrl}img/social_media/instagram.png`, alt: 'Instagram' },
  { href: 'https://www.youtube.com', src: `${assetsUrl}img/social_media/youtube.png`, alt: 'YouTube' },
  { href: 'https://www.tiktok.com', src: `${assetsUrl}img/social_media/tiktok.png`, alt: 'TikTok' },
  { href: 'https://www.discord.com', src: `${assetsUrl}img/social_media/discord.png`, alt: 'Discord' },
]

<<<<<<< HEAD
const QUICK_LINKS = [
  { label: 'Inicio', to: '/' },
  { label: 'Tienda', to: '/shop' },
  { label: 'Personajes', to: '/personajes' },
  { label: 'Noticias', to: '/noticias' },
  { label: 'Contacto', to: '/contacto' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
=======
export default function Footer() {
>>>>>>> c435fbe890c05877dfa89621aae0d892d6ed2404
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(null)
  const [error, setError] = useState(null)

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)
    setError(null)
<<<<<<< HEAD
=======
    
    const email = e.target[0].value
>>>>>>> c435fbe890c05877dfa89621aae0d892d6ed2404

    try {
      const res = await axios.post('/api/newsletter/subscribe', { email })
      setMessage(res.data.message)
<<<<<<< HEAD
      setEmail('')
=======
      e.target.reset()
>>>>>>> c435fbe890c05877dfa89621aae0d892d6ed2404
    } catch (err) {
      setError(err.response?.data?.error || 'Error de conexión')
    } finally {
      setLoading(false)
    }
  }

  return (
    <footer className={styles.footer}>
<<<<<<< HEAD
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
=======
      <div id="redes_sociales" className={styles.socialLinks}>
        {SOCIAL_LINKS.map(({ href, src, alt }) => (
          <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
            <img src={src} alt={alt} className={styles.socialIcon} />
          </a>
        ))}
      </div>

      <div className={styles.license}>
        <p className={styles.licenseText}>
          © {new Date().getFullYear()} Darío Márquez Bautista —{' '}
          Contenido bajo licencia{' '}
          <a
            href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Creative Commons BY-NC-ND 4.0
          </a>
        </p>
      </div>

      <div id="susc_newsletter" className={styles.newsletter}>
        <form onSubmit={handleNewsletterSubmit} className={styles.newsletterForm}>
          <input
            type="email"
            placeholder="¡Suscríbete a nuestra newsletter!"
            className={styles.newsletterInput}
            required
            disabled={loading}
          />
          <button type="submit" className={styles.newsletterBtn} disabled={loading}>
            {loading ? '...' : 'SUSCRIBIRSE'}
          </button>
        </form>
        {message && <p className={styles.successMessage}>{message}</p>}
        {error && <p className={styles.errorMessage}>{error}</p>}
      </div>
    </footer>
  )
}
>>>>>>> c435fbe890c05877dfa89621aae0d892d6ed2404
