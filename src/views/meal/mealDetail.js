import { GetMeal } from '../../utils/getMeal';
import './MealDetail.css';
import getID from './../../utils/getID';
import { string } from 'yup';
import { GetMeals } from './../../utils/getMeals';
import { Lists, Long } from './../../components/Lists/Lists';
import { Link, Redirect, useParams } from 'react-router-dom';
import { getLetters } from './../../utils/getLetters';




export default function MealDetail() {
    let broswer = window;
    let id = getID(broswer);
    const mealDescription = GetMeal(id);
    let {large} = Long();


    
    
   let Path = () => {
        let path = <div></div>;
        if (id === '10') {

            path = <Lists/>
        } 

        else {

            path =  
            <section className='mealDetail'>
            <div className='containerImg'><div><img src={mealDescription[0]?.strMealThumb} alt='meal'></img></div><h1>{mealDescription[0]?.strMeal}</h1></div>
            <div className='description'>
                <div className='item'><h3>Drink</h3></div>
                <div className='text'><p>{mealDescription[0]?.strDrinkAlternate || "no data" }</p></div>
                <div className='item'><h3>Category</h3></div>
                <div className='text'><p>{mealDescription[0]?.strCategory}</p></div>
                <div className='item'><h3>Tags</h3></div>
                <div className='text'><p>{mealDescription[0]?.strTags}</p></div>
                <div className='item'><h3>Instructions</h3></div>
                <div className='text'><p>{mealDescription[0]?.strInstructions}</p></div>
                <div className='item'><h3>Youtube</h3></div>
                <div className='text'><p>{mealDescription[0]?.strYoutube}</p></div>
                <div className='item'><Link to={'/table/'+ id}><h3>TABLA</h3></Link></div>
                <div className='text'><Link to={'/table/'+ id}><h3>'o.O'</h3></Link></div>



            </div>
        </section>
        }
        if(Long() === 0  ){

        }
        return path;
    }
    return(<section> <Path/> </section>
        
    )
}

