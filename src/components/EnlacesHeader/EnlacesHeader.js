import { Link } from 'react-router-dom';
import './EnlacesHeader.css';




export default function EnlacesHeader () {
    return(
        <div className='EnlacesHeader'>
        <Link  className='Link'  to='/AboutUs'><span className= "headerA"><p className='letras'>About us</p></span>  </Link>
        <Link className='Link' to='/contact'><span className= "headerA" id='contact'><p className='letras'>Contact</p></span></Link>         
        <Link className='Link' to='/contact'><span className= "headerA" id='contact'><p className='letras'>Register</p></span></Link>         
        <Link className='Link' to='/contact'><span className= "headerA" id='contact'><p className='letras'>Logout</p></span></Link>         

        </div>
    )
}

