
import List from '../List/List';
import { getLetters } from './../../utils/getLetters';
export const Lists = (mLetter) => {

    let Truck = getLetters();

    return (
        <article className='card' id='card'>
          {Truck?.map((item) => <List key={item?.idMeal} pId={item} />)}


        </article> 
    )
    

}


// function ListMeals (letter) {

//     let mealLetter =
//     <article>
//         {letter.array?.mLetter?.map( (item) => 
//         {
//             <div>
//             <img src={item?.strMealThumb} alt='meal'></img>
//             <h3>{item?.strMeal}</h3>
//             </div>
//         }
//         )}

//     </article>;

// debugger;
//     return mealLetter;

// }

// const list2 = ListMeals(mLetter);
// console.log('list2');
// console.log(list2);   