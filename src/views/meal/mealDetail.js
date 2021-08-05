import { GetMeal } from '../../utils/getMeal';
import './MealDetail.css';
import getID from './../../utils/getID';
import { string } from 'yup';
import { GetMeals } from './../../utils/getMeals';
import { Lists } from './../../components/Lists/Lists';



export default function MealDetail() {
    let broswer = window;
    let id = getID(broswer);
    const mealDescription = GetMeal(id);


    
    
    
    // function Path () {
    //     let path = <div></div>;
    //     if (id === 10) {
 
    //         path = <Lists  mLetter={IndexLetter}/>
    //     } 

    //     else {
    //         debugger;
    //         path =  
    //         <section className='mealDetail'>
    //         <div className='containerImg'><img src={mealDescription[0]?.strMealThumb} alt='meal'></img><h1>{mealDescription[0]?.strMeal}</h1></div>
    //         <div className='description'>
    //             <div className='item'><h3>Bebida acompañante</h3></div>
    //             <div className='text'><p>{mealDescription[0]?.strDrinkAlternate}</p></div>
    //             <div className='item'><h3>Category</h3></div>
    //             <div className='text'><p>{mealDescription[0]?.strCategory}</p></div>
    //             <div className='item'><h3>Tags</h3></div>
    //             <div className='text'><p>{mealDescription[0]?.strTags}</p></div>
    //             <div className='item'><h3>Instructions</h3></div>
    //             <div className='text'><p>{mealDescription[0]?.strInstructions}</p></div>
    //             <div className='item'><h3>Youtube</h3></div>
    //             <div className='text'><p>{mealDescription[0]?.strYoutube}</p></div>
    //             <div className='item'><h3>Inggrendiente 1</h3></div>
    //             <div className='text'><p>{mealDescription[0]?.strIngredient1}</p></div>
    //             <div className='item'><h3>Ingredient 2</h3></div>
    //             <div className='text'><p>{mealDescription[0]?.strIngredient2}</p></div>
    //             <div className='item'><h3>Ingredient 3</h3></div>
    //             <div className='text'><p>{mealDescription[0]?.strIngredient3}</p></div>
    //             <div className='item'><h3>Ingredient 4</h3></div>
    //             <div className='text'><p>{mealDescription[0]?.strIngredient4}</p></div>
    //             <div className='item'><h3>Ingredient 5</h3></div>
    //             <div className='text'><p>{mealDescription[0]?.strIngredient5}</p></div>
    //             <div className='item'><h3>Ingredient 6</h3></div>
    //             <div className='text'><p>{mealDescription[0]?.strIngredient6}</p></div>
    //             <div className='item'><h3>Ingredient 7</h3></div>
    //             <div className='text'><p>{mealDescription[0]?.strIngredient7}</p></div>
    //             <div className='item'><h3>Ingredient 8</h3></div>
    //             <div className='text'><p>{mealDescription[0]?.strIngredient8}</p></div>
    //             <div className='item'><h3>Ingredient 9</h3></div>
    //             <div className='text'><p>{mealDescription[0]?.strIngredient9}</p></div>
    //             <div className='item'><h3>Ingredient 10</h3></div>
    //             <div className='text'><p>{mealDescription[0]?.strIngredient10}</p></div>
    //             <div className='item'><h3>Ingredient 11</h3></div>
    //             <div className='text'><p>{mealDescription[0]?.strIngredient11}</p></div>
    //             <div className='item'><h3>Ingredient 12</h3></div>
    //             <div className='text'><p>{mealDescription[0]?.strIngredient12}</p></div>
    //             <div className='item'><h3>Ingredient 13</h3></div>
    //             <div className='text'><p>{mealDescription[0]?.strIngredient13}</p></div>
    //             <div className='item'><h3>Ingredient 14</h3></div>
    //             <div className='text'><p>{mealDescription[0]?.strIngredient14}</p></div>
    //             <div className='item'><h3>Ingredient 15</h3></div>
    //             <div className='text'><p>{mealDescription[0]?.strIngredient15}</p></div>
    //             <div className='item'><h3>Ingredient 16</h3></div>
    //             <div className='text'><p>{mealDescription[0]?.strIngredient16}</p></div>
    //             <div className='item'><h3>Ingredient 17</h3></div>
    //             <div className='text'><p>{mealDescription[0]?.strIngredient17}</p></div>
    //             <div className='item'><h3>Ingredient 18</h3></div>
    //             <div className='text'><p>{mealDescription[0]?.strIngredient18}</p></div>
    //             <div className='item'><h3>Ingredient 19</h3></div>
    //             <div className='text'><p>{mealDescription[0]?.strIngredient19}</p></div>
    //             <div className='item'><h3>Ingredient 20</h3></div>
    //             <div className='text'><p>{mealDescription[0]?.strIngredient20}</p></div>
    //             <div className='item'><h3>Measure 1</h3></div>
    //             <div className='text'><p>{mealDescription[0]?.strMeasure1}</p></div>
    //             <div className='item'><h3>Measure 2</h3></div>
    //             <div className='text'><p>{mealDescription[0]?.strMeasure2}</p></div>
    //             <div className='item'><h3>Measure 3</h3></div>
    //             <div className='text'><p>{mealDescription[0]?.strMeasure3}</p></div>
    //             <div className='item'><h3>Measure 4</h3></div>
    //             <div className='text'><p>{mealDescription[0]?.strMeasure4}</p></div>
    //             <div className='item'><h3>Measure 5</h3></div>
    //             <div className='text'><p>{mealDescription[0]?.strMeasure5}</p></div>
    //             <div className='item'><h3>Measure 6</h3></div>
    //             <div className='text'><p>{mealDescription[0]?.strMeasure6}</p></div>
    //             <div className='item'><h3>Measure 7</h3></div>
    //             <div className='text'><p>{mealDescription[0]?.strMeasure7}</p></div>
    //             <div className='item'><h3>Measure 8</h3></div>
    //             <div className='text'><p>{mealDescription[0]?.strMeasure8}</p></div>
    //             <div className='item'><h3>Measure 9</h3></div>
    //             <div className='text'><p>{mealDescription[0]?.strMeasure9}</p></div>
    //             <div className='item'><h3>Measure 10</h3></div>
    //             <div className='text'><p>{mealDescription[0]?.strMeasure10}</p></div>
    //             <div className='item'><h3>Measure 11</h3></div>
    //             <div className='text'><p>{mealDescription[0]?.strMeasure11}</p></div>
    //             <div className='item'><h3>Measure 12</h3></div>
    //             <div className='text'><p>{mealDescription[0]?.strMeasure12}</p></div>
    //             <div className='item'><h3>Measure 13</h3></div>
    //             <div className='text'><p>{mealDescription[0]?.strMeasure13}</p></div>
    //             <div className='item'><h3>Measure 14</h3></div>
    //             <div className='text'><p>{mealDescription[0]?.strMeasure14}</p></div>
    //             <div className='item'><h3>Measure 15</h3></div>
    //             <div className='text'><p>{mealDescription[0]?.strMeasure15}</p></div>
    //             <div className='item'><h3>Measure 16</h3></div>
    //             <div className='text'><p>{mealDescription[0]?.strMeasure16}</p></div>
    //             <div className='item'><h3>Measure 17</h3></div>
    //             <div className='text'><p>{mealDescription[0]?.strMeasure17}</p></div>
    //             <div className='item'><h3>Measure 18</h3></div>
    //             <div className='text'><p>{mealDescription[0]?.strMeasure18}</p></div>
    //             <div className='item'><h3>Measure 19</h3></div>
    //             <div className='text'><p>{mealDescription[0]?.strMeasure19}</p></div>
    //             <div className='item'><h3>Measure 20</h3></div>
    //             <div className='text'><p>{mealDescription[0]?.strMeasure20}</p></div>
    //         </div>
    //     </section>
    //     }
        
    //     return path;
    // }
    return(<section><Lists/> </section>
        
    )
}

