
import { GetMeals } from './getMeals';

export const getLetters = () => {

    
    let List = GetMeals();
    let Filter = List.map(plate => plate.strMeal.split('')).map(
        function Letter(x, index){
            return [x[0], index]
        }
    );
    let indexFinal = Filter.filter( item => item[0]=== 'R').map(item => item[1]).map((item) => List[item]);
   
   
   
   return indexFinal;
}



 