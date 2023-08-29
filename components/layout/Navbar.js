import Link from 'next/link';
import logoImage from '../../public/images/Logo22.png';

function Navbar() {
  return (
    <nav className='nav'>
    <div className="logo">
        <img src={logoImage.src} alt="Logo" />
        <span>Golden Fox</span>
    </div>
    <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/products">Products</Link></li>
        <li><Link href="/products">Favourites</Link></li>
        <li><Link href="/products">PProfile</Link></li>
        <li><Link href="/products">Cart</Link></li>
    </ul>
    </nav>
  );
}

export default Navbar;