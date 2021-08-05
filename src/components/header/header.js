// import { Link } from 'react-router-dom'
import EnlacesHeader from '../EnlacesHeader/EnlacesHeader';
import logo from '../../assets/logo.png'
import './Header.css'
import { Link } from 'react-router-dom';

export default function Header() {
    return(
        <header className='header'>
            <Link to='/homepage'><img src={logo} alt='logo'></img></Link>
            <EnlacesHeader/>
            
        </header>

    )
}

