import './Search.css';
import { Link, useParams } from 'react-router-dom';
import { GetMeals } from './../../utils/getMeals';
import Meal from './../Meal/Meal';
import { useForm } from './../../utils/useForm';
import { useState } from 'react';

export const Search = ({history}) => {

    const meals = GetMeals();

const [ formValues, handleInputChange,setValues] = useForm({
    searchText: ''
})
const {searchText} = formValues;


const handSearch = (e) => {
    const Inp = document.getElementById('input');
    e.preventDefault();
    console.log(Inp.value);
    setValues({
        ...formValues,
        [ Inp.name ]: Inp.value
    });

    history?.push(`?q=${searchText}`)
}



    return ( 
    <section>
     
        <form className='Buscador'onSubmit={handSearch} >
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