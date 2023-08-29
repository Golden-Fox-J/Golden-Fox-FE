// import '@/styles/globals.css'
import { AuthProvider } from 'context/auth'
import '../styles/reset.css'
import '../styles/Navbar.css'
import '../styles/Footer.css'
import '../styles/HeroSection.css'
import '../styles/FeaturedProducts.css'
import "keen-slider/keen-slider.min.css";

export default function App({ Component, pageProps }) {
  return <AuthProvider >
  <Component {...pageProps} />
</AuthProvider>
}
