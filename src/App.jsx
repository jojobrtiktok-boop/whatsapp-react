import { Routes, Route } from 'react-router-dom'
import WhatsAppPage from './pages/WhatsAppPage'
import { PrivacyPage, TermsPage, CookiesPage } from './pages/PolicyPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<WhatsAppPage />} />
      {/* aliases para links de anúncio antigos (/cv1../cv6) — mesma página */}
      {['cv1', 'cv2', 'cv3', 'cv4', 'cv5', 'cv6'].map((cv) => (
        <Route key={cv} path={`/${cv}`} element={<WhatsAppPage />} />
      ))}
      <Route path="/privacidade" element={<PrivacyPage />} />
      <Route path="/termos" element={<TermsPage />} />
      <Route path="/cookies" element={<CookiesPage />} />
    </Routes>
  )
}
