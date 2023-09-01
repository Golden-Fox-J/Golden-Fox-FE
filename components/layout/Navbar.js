import Link from 'next/link';
import logoImage from '../../public/images/Logo22.png';
import bellIcon from '../../public/icons/bell.png';
import heartIcon from '../../public/icons/heart.png';
import profilePicture from '../../public/icons/profile.png';
import { useAuth } from 'context/auth';

function Navbar({decodedToken}) {
  const {logout} = useAuth()


  
  return (
    <nav className='nav'>
    <div className="logo">
        <img src={logoImage.src} alt="Logo"  />
        <span>Golden Fox</span>
    </div>
    <ul>
        <li><Link href="/">Home</Link></li>

        <li><Link href="/account">Profile</Link></li>
        <li><Link href="/products">About</Link></li>
        {decodedToken? <li><Link href="/favoritelist">Favorite Items</Link></li> : null}

        {decodedToken ? <li><button className='navbar_logout_button' onClick={logout} ><Link href="/">Log Out</Link></button></li> : <li><Link href="/login">Log In</Link></li>}
        
        
    </ul>
    </nav>
  );
}

export default Navbar;