import { Link } from 'react-router-dom';


export default function List({pId}){

    return(
        <article className='card' >
            <div><Link to={'/mealDetail/' + pId.idMeal}><img className='img' src={pId.strMealThumb} alt="Carta"></img></Link> </div>

        </article> 

    )
}