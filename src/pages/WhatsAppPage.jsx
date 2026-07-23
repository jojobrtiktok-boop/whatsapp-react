import { Link } from 'react-router-dom'
import './WhatsAppPage.css'

const PHONE = '5533912999634'
const API_CLIQUE = 'https://apioficialdojojo.vercel.app/api/lps?action=clique-externo'
const EMOJIS = ['☺️', '😃', '😊', '🌹', '🥰', '🙂']

const WhatsAppIcon = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="white" width={size} height={size} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

export default function WhatsAppPage({ message }) {
  const openWhatsApp = () => {
    const emoji = EMOJIS[Math.floor(Math.random() * EMOJIS.length)]
    const text = `${emoji} ${message}`
    // api.whatsapp.com direto: o redirect do wa.me corrompe emojis (viram %EF%BF%BD)
    const url = `https://api.whatsapp.com/send?phone=${PHONE}&text=${encodeURIComponent(text)}`
    const params = new URLSearchParams(window.location.search)

    try {
      navigator.sendBeacon(
        API_CLIQUE,
        new Blob(
          [JSON.stringify({
            emoji,
            numero_whatsapp: PHONE,
            gclid: params.get('gclid'),
            fbclid: params.get('fbclid'),
            url_completa: window.location.href,
          })],
          { type: 'text/plain' }
        )
      )
    } catch { /* beacon falhou — segue para o WhatsApp mesmo assim */ }

    window.location.href = url
  }

  const stop = (e) => e.stopPropagation()

  const clickBtn = (e) => {
    e.preventDefault()
    e.stopPropagation()
    openWhatsApp()
  }

  return (
    <div className="page" onClick={openWhatsApp}>
      <div className="bg" />

      <section className="hero">
        <p className="hero-tag">Recíbelo en tu WhatsApp ahora</p>
        <h1 className="hero-title">
          +150 Recetas de Pan <span className="highlight">Sin Gluten</span> y{' '}
          <span className="highlight">Sin Lactosa</span>
        </h1>
        <p className="hero-sub">
          Panes suaves, esponjosos y deliciosos que puedes preparar en casa con
          ingredientes fáciles de encontrar — sin harina de trigo y sin leche.
        </p>
        <a className="whatsapp-btn" href="#" onClick={clickBtn}>
          <WhatsAppIcon />
          Recibir por WhatsApp
        </a>
        <p className="hero-note">Entrega inmediata directo en tu celular 📲</p>
      </section>

      <section className="info">
        <div className="card">
          <h2>¿Qué vas a recibir?</h2>
          <ul className="benefits">
            <li>🍞 <strong>+150 recetas de pan sin gluten</strong> explicadas paso a paso</li>
            <li>🥛 Todas las recetas también <strong>sin lactosa</strong></li>
            <li>🛒 Lista de ingredientes económicos y fáciles de conseguir</li>
            <li>👩‍🍳 Técnicas para que el pan quede esponjoso, sin harina de trigo</li>
            <li>🎁 <strong>Bono 1:</strong> recetas de postres sin gluten</li>
            <li>🎁 <strong>Bono 2:</strong> guía de sustitutos del gluten y de la leche</li>
          </ul>
        </div>

        <div className="card">
          <h2>¿Para quién es?</h2>
          <p>
            Para personas con sensibilidad al gluten o intolerancia a la lactosa, y para
            cualquiera que quiera comer pan casero más ligero sin renunciar al sabor.
            No necesitas experiencia en la cocina: cada receta viene explicada desde cero.
          </p>
        </div>

        <div className="card">
          <h2>¿Cómo funciona?</h2>
          <ol className="steps">
            <li><strong>1.</strong> Haz clic en el botón verde</li>
            <li><strong>2.</strong> Se abrirá tu WhatsApp con el mensaje listo — solo envíalo</li>
            <li><strong>3.</strong> Recibe las recetas y los bonos directo en tu celular</li>
          </ol>
        </div>

        <a className="whatsapp-btn whatsapp-btn-bottom" href="#" onClick={clickBtn}>
          <WhatsAppIcon />
          Quiero mis recetas ahora
        </a>
      </section>

      <footer className="footer" onClick={stop}>
        <nav className="footer-links">
          <Link to="/privacidad">Política de Privacidad</Link>
          <Link to="/terminos">Términos y Condiciones</Link>
          <Link to="/cookies">Política de Cookies</Link>
        </nav>
        <p className="footer-note">
          Este sitio no está afiliado a WhatsApp, Google ni TikTok.
        </p>
      </footer>
    </div>
  )
}
