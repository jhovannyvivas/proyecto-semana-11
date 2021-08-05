import { Link } from 'react-router-dom';
import './List.css';


export default function List({pId}){

    return(
        <article className='card' >
            <div><Link to={'/mealDetail/' + pId.idMeal}><img className='img' src={pId.strMealThumb} alt="Carta"></img><h3>{pId.strMeal}</h3></Link> </div>

        </article> 

    )
}