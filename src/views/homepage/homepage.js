import Meals from '../../components/Meals/Meals';
import { Search } from '../../components/Search/Search';
import './homepage.css';
import { Link } from 'react-router-dom';
import { GetMeals } from './../../utils/getMeals';



export default function Homepage() {
    function SearchCategory () {
        let InputHome = document.querySelector("#entry")?.value;
        localStorage.setItem('BaulInput', InputHome);
    }


    return(
        <div className='homepage'>
        <section className='Buscador'>
        <section className="main-input">
        <div className="main-input-container">
            <input type="text" id="entry"/>
         </div>
        </section>
                        <section className="main-buttons">
                        <div className="button-container">
                        <button onClick={SearchCategory} className="button" id="boton" >Buscar</button>
            
                        </div>
                        </section>
        </section>
            <Meals/>
        </div>
    )

}
