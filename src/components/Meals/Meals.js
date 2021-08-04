import './Meals.css';
import { GetData } from '../../utils/getMeals';
import Card from '../Meal/Meal';

export default function Meals(){
    let meals = GetData();
    return(
        <section className='grillaHome'>
            {meals.map((meal) => <Card key={meal.idMeal} pId={meal.idMeal}/> )}
        </section>
    )
}