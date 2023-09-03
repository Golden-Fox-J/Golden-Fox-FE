// import '@/styles/globals.css'
import { AuthProvider } from 'context/auth'
import '../styles/reset.css'
import '../styles/Navbar.css'
import '../styles/Footer.css'
import '../styles/HeroSection.css'
import '../styles/FeaturedProducts.css'
import "../styles/Categories.css"
import "keen-slider/keen-slider.min.css";
import "../styles/login.css"
import "../components/login/loginForm.css"
import "../components/categoryProducts/categoryProduct.css"
// import "../components/profilePage/profilePage.css"
import "../components/details/details.css"



export default function App({ Component, pageProps }) {
  return <AuthProvider >
  <Component {...pageProps} />
</AuthProvider>
}
