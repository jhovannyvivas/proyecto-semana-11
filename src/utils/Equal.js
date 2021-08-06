
import { GetMeals } from './getMeals';

export const Equal = () => {
    let initialLetter = localStorage.getItem('BaulInput');
    
    let List = GetMeals();
    let Filter = List.map(plate => plate.strMeal.split('')).map(
        function Letter(x, index){
            return [x[0], index]
        }
    );
    let indexFinal = Filter.filter( item => item[0]=== initialLetter );

   
   return indexFinal.length;
}

