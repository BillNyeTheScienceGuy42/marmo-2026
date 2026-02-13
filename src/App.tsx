import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './Pages/Home'
import Navigation from './Components/Navigation'
import ReactLenis from 'lenis/react'
import Footer from './Components/Footer'
import Privacy from './Pages/Privacy'
import Discord from './Pages/Discord'
import Download from './Pages/Download'
import NotFound from './Pages/NotFound'

function App() {
  return (
    <>
      <ReactLenis root/>
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/discord" element={<Discord />} />
          <Route path="/download" element={<Download />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
