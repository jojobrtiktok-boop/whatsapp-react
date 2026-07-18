import { Link } from 'react-router-dom'
import './PolicyPage.css'

function PolicyLayout({ title, children }) {
  return (
    <div className="policy-page">
      <div className="policy-container">
        <Link to="/" className="policy-back">&larr; Volver</Link>
        <h1>{title}</h1>
        {children}
        <p className="policy-updated">Última actualización: julio de 2026</p>
      </div>
    </div>
  )
}

export function PrivacyPage() {
  return (
    <PolicyLayout title="Política de Privacidad">
      <p>
        En este sitio respetamos tu privacidad. Esta política describe qué información
        recopilamos, cómo la usamos y cuáles son tus derechos.
      </p>
      <h2>Información que recopilamos</h2>
      <p>
        Este sitio no solicita ni almacena datos personales en formularios. Al hacer clic en el
        botón de WhatsApp, serás redirigido a la aplicación WhatsApp, donde tú decides qué
        información compartir. El número de teléfono y los mensajes que envíes se rigen por la{' '}
        <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">política de privacidad de WhatsApp</a>.
      </p>
      <h2>Cookies y tecnologías de medición</h2>
      <p>
        Utilizamos herramientas de análisis y publicidad de terceros, como Google Ads (gtag.js) y
        TikTok Pixel, que pueden usar cookies e identificadores para medir el rendimiento de
        nuestras campañas publicitarias y mostrar anuncios relevantes. Consulta nuestra{' '}
        <Link to="/cookies">Política de Cookies</Link> para más detalles.
      </p>
      <h2>Uso de la información</h2>
      <p>
        Los datos de medición se usan únicamente de forma agregada para entender el rendimiento de
        la página y de los anuncios. No vendemos ni compartimos tu información personal con
        terceros para fines distintos a los descritos.
      </p>
      <h2>Tus derechos</h2>
      <p>
        Puedes desactivar la publicidad personalizada de Google en{' '}
        <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">adssettings.google.com</a>{' '}
        y gestionar las cookies desde la configuración de tu navegador. Si deseas ejercer tus
        derechos de acceso, rectificación o eliminación de datos, contáctanos por WhatsApp.
      </p>
    </PolicyLayout>
  )
}

export function TermsPage() {
  return (
    <PolicyLayout title="Términos y Condiciones">
      <p>
        Al usar este sitio aceptas los siguientes términos y condiciones. Si no estás de acuerdo,
        por favor no utilices esta página.
      </p>
      <h2>Descripción del servicio</h2>
      <p>
        Este sitio ofrece contenido informativo y educativo sobre recetas y preparación de pan
        casero, entregado a través de WhatsApp. El acceso al contenido es gratuito, salvo que se
        indique lo contrario en la comunicación correspondiente.
      </p>
      <h2>Uso permitido</h2>
      <p>
        Te comprometes a usar este sitio únicamente con fines lícitos. Está prohibido reproducir,
        distribuir o modificar el contenido sin autorización previa.
      </p>
      <h2>Descargo de responsabilidad</h2>
      <p>
        El contenido compartido tiene fines informativos. Los resultados de las recetas pueden
        variar según los ingredientes, utensilios y condiciones de preparación de cada persona.
        Este sitio no está afiliado a WhatsApp, Google ni TikTok.
      </p>
      <h2>Modificaciones</h2>
      <p>
        Podemos actualizar estos términos en cualquier momento. La versión vigente será siempre la
        publicada en esta página.
      </p>
      <h2>Contacto</h2>
      <p>Para cualquier duda sobre estos términos, contáctanos a través del botón de WhatsApp de la página principal.</p>
    </PolicyLayout>
  )
}

export function CookiesPage() {
  return (
    <PolicyLayout title="Política de Cookies">
      <p>
        Este sitio utiliza cookies y tecnologías similares de terceros para medir el tráfico y el
        rendimiento de nuestras campañas publicitarias.
      </p>
      <h2>¿Qué son las cookies?</h2>
      <p>
        Las cookies son pequeños archivos que se almacenan en tu dispositivo cuando visitas un
        sitio web. Permiten reconocer tu navegador y recordar cierta información.
      </p>
      <h2>Cookies que utilizamos</h2>
      <ul>
        <li>
          <strong>Google Ads (gtag.js):</strong> mide conversiones y el rendimiento de anuncios de
          Google. Más información en la{' '}
          <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer">política de cookies de Google</a>.
        </li>
        <li>
          <strong>TikTok Pixel:</strong> mide conversiones de anuncios de TikTok. Más información
          en la{' '}
          <a href="https://www.tiktok.com/legal/page/global/cookie-policy/es" target="_blank" rel="noopener noreferrer">política de cookies de TikTok</a>.
        </li>
      </ul>
      <h2>Cómo gestionar las cookies</h2>
      <p>
        Puedes bloquear o eliminar las cookies desde la configuración de tu navegador. Ten en
        cuenta que esto no afecta el funcionamiento de esta página, ya que las cookies se usan
        solo con fines de medición.
      </p>
    </PolicyLayout>
  )
}
