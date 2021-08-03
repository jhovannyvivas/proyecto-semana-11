import { Link } from 'react-router-dom';
import './EnlacesHeader.css';




export default function EnlacesHeader () {
    return(
        <div className='EnlacesHeader'>
        {/* <Link  className='Link'  to='/aboutUs'><span className= "headerA"><p className='letras'>Quiénes somos</p></span>  </Link>
        <Link className='Link' to='/contact'><span className= "headerA" id='contact'><p className='letras'>Contáctanos</p></span></Link>           */}
                   <Link to="/header"><h1>Enlaces</h1></Link> 
        </div>
    )
}

