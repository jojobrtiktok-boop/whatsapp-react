import { Routes, Route } from 'react-router-dom'
import WhatsAppPage from './pages/WhatsAppPage'
import { PrivacyPage, TermsPage, CookiesPage } from './pages/PolicyPage'

const cvVariants = {
  cv1: "¡Hola! Quiero la receta del pan sin gluten y sin lactosa",
  cv2: "¡Hola! Quiero aprender a hacer pan sin gluten y sin lactosa en casa",
  cv3: "¡Hola! Vi lo de las recetas de pan sin gluten y quiero saber más. ¿Me puedes ayudar?",
  cv4: "Hola, ¿qué tal? Me interesan las recetas de pan sin gluten y sin lactosa. ¿Cómo funciona?",
  cv5: "¡Buenas tardes! Quiero recibir las recetas de pan casero sin gluten y sin lactosa",
  cv6: "¡Hola! Quiero recibir las recetas exclusivas de pan sin gluten. ¡Agrégame a la lista!",
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<WhatsAppPage message={cvVariants.cv1} />} />
      {Object.entries(cvVariants).map(([cv, message]) => (
        <Route key={cv} path={`/${cv}`} element={<WhatsAppPage message={message} />} />
      ))}
      <Route path="/privacidad" element={<PrivacyPage />} />
      <Route path="/terminos" element={<TermsPage />} />
      <Route path="/cookies" element={<CookiesPage />} />
    </Routes>
  )
}
