import './Search.css';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom';
import { GetMeals } from './../../utils/getMeals';
import Meal from './../Meal/Meal';
import { useForm } from './../../utils/useForm';
import { useState } from 'react';
import queryString from 'query-string';
import { useEffect } from 'react';

export const Search = () => {
    const Location = useHistory();
    const location = useLocation();
    const {q = ''} = queryString.parse( location.search);

    const meals = GetMeals();

const [ formValues, handleInputChange,setValues] = useForm({
    searchText: q
})
const {searchText} = formValues;


const HandSearch = (e) => {
    const Inp = document.getElementById('input');
    e.preventDefault();
    console.log(Inp.value);
    setValues({
        ...formValues,
        [ Inp.name ]: Inp.value,
    });
 
    Location.push(`?q=${searchText}`);
    console.log('searchText   ' + searchText )
    console.log(Location)

}




    return ( 
    <section>
     
        <form className='Buscador'onSubmit={HandSearch} >
            <section className="main-input">
                <div className="main-input-container">
                    <input type="text" name="searchText" id='input'/>
                </div>
            </section>
                        <section className="main-buttons">
                            <div className="button-container">
                                <button  type='submit' className="button"  >Buscar</button>
                
                            </div>
                        </section>
        </form>


        <section className='grillaHome'>

            {meals.filter((i)=> i.strMeal.indexOf(searchText) !== -1 ).map((meal) => <Meal key={meal.idMeal} pId={meal}/> )}
        </section>

    </section>  



    )


}