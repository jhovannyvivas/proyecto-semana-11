import './Meal.css';
import { Link } from 'react-router-dom';


export default function Meal({pId}){

    return( 
        <article className='card' id='card'>
            <div><Link to={'/mealDetail/' + pId.idMeal}><img className='img' src={pId.strMealThumb} alt="Carta"></img><h3 className='nameMeal'>{pId.strMeal}</h3></Link> </div>

        </article> 

    )
}