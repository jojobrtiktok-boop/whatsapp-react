import { Routes, Route } from 'react-router-dom'
import WhatsAppPage from './pages/WhatsAppPage'

const cvVariants = {
  cv1: "¡Hola! Quiero saber las recetas del pan que hacía María [cv1]",
  cv2: "¡Hola! Quiero aprender a hacer en casa el pan que preparaba María [cv2]",
  cv3: "¡Hola! Vi lo de las recetas del pan de María y quiero saber más. ¿Me puedes ayudar? [cv3]",
  cv4: "Hola, ¿qué tal? Me interesa el método del pan que hacía María. ¿Cómo funciona? [cv4]",
  cv5: "¡Buenas tardes! Quiero recibir las recetas del pan casero de María [cv5]",
  cv6: "¡Hola! Quiero recibir las recetas exclusivas del pan de María. ¡Agrégame a la lista! [cv6]",
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
