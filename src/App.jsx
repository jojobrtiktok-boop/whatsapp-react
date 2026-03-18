import { Routes, Route } from 'react-router-dom'
import WhatsAppPage from './pages/WhatsAppPage'

const cvVariants = {
  cv1: "Olá, tenho interesse nas técnicas de cultivo de orquídeas! [cv1]",
  cv2: "Oi! Quero aprender as técnicas secretas para orquídeas florescerem o ano todo [cv2]",
  cv3: "Olá! Vi sobre as técnicas de orquídeas e quero saber mais. Pode me ajudar? [cv3]",
  cv4: "Oi, tudo bem? Tenho interesse no método de cuidado com orquídeas. Como funciona? [cv4]",
  cv5: "Boa tarde! Minhas orquídeas não florescem mais. Quero conhecer as técnicas de recuperação [cv5]",
  cv6: "Olá! Quero receber as dicas exclusivas sobre orquídeas. Me adiciona na lista! [cv6]",
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<WhatsAppPage message={cvVariants.cv1} />} />
      {Object.entries(cvVariants).map(([cv, message]) => (
        <Route key={cv} path={`/${cv}`} element={<WhatsAppPage message={message} />} />
      ))}
    </Routes>
  )
}
