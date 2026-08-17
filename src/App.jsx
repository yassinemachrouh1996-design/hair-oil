import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Benefits from './components/Benefits'
import Heritage from './components/Heritage'
import Reviews from './components/Reviews'
import OrderForm from './components/OrderForm'
import Instagram from './components/Instagram'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import { useScrollReveal } from './hooks/useScrollReveal'

export default function App() {
  const appRef = useScrollReveal()

  return (
    <div ref={appRef}>
      <Navbar />
      <Hero />
      <Marquee />
      <Benefits />
      <Heritage />
      <Reviews />
      <OrderForm />
      <Instagram />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
