import './Search.css';
import { Link } from 'react-router-dom';
import { GetMeals } from './../../utils/getMeals';
import Meal from './../Meal/Meal';
import { useForm } from './../../utils/useForm';

export const Search = () => {

    const meals = GetMeals();
    console.log(meals);

const [ formValues, handleInputChange] = useForm({
    searchText: ''
})
const {searchText} = formValues;

const handSearch = () => {
    console.log(searchText);
}

    return ( 
    <section>
     
        <section className='Buscador'>
            <section className="main-input">
                <div className="main-input-container">
                    <input type="text" name="searchText"  onChange={ handleInputChange}/>
                </div>
            </section>
                        <section className="main-buttons">
                            <div className="button-container">
                                <button  type='submit' className="button" onClick={handSearch} >Buscar</button>
                
                            </div>
                        </section>
        </section>


        <section className='grillaHome'>
            {meals.filter((i)=> i.strMeal.indexOf(searchText) !== -1 ).map((meal) => <Meal key={meal.idMeal} pId={meal}/> )}
        </section>

    </section>  



    )


}