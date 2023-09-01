import Image from 'next/image';
import whatsappIcon from '../../public/icons/whatsapp.png';
import facebookIcon from '../../public/icons/facebook2.png';
import twitterIcon from '../../public/icons/twitter.png';
import instagramIcon from '../../public/icons/instagram.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <h4>Follow Us</h4>
          <ul className="social-icons">
            <li><a href="#" target="_blank" rel="noopener noreferrer"><Image src={whatsappIcon} alt="WhatsApp" width={24} height={24} /></a></li>
            <li><a href="https://www.facebook.com/profile.php?id=61550785441323" target="_blank" rel="noopener noreferrer"><Image src={facebookIcon} alt="Facebook" width={24} height={24} /></a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer"><Image src={twitterIcon} alt="Twitter" width={24} height={24} /></a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer"><Image src={instagramIcon} alt="Instagram" width={24} height={24} /></a></li>
          </ul>
        </div>
        <div className="footer-subscribe">
          <h4>Subscribe to Our Newsletter</h4>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
