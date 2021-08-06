import './Meals.css';
import { GetData, GetMeals } from '../../utils/getMeals';
import Card from '../Meal/Meal';
import Meal from './../Meal/Meal';

export default function Meals(){
    let meals = GetMeals();
    return( meals.length === 0 ? <h1>Loading...</h1> :
        <section className='grillaHome'>
            {meals.map((meal) => <Meal key={meal.idMeal} pId={meal}/> )}
        </section>
    )
}