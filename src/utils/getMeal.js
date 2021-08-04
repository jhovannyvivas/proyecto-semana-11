import { useEffect, useState } from "react";

let API = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
const id = 52823;

export const GetMeal = () => {
  const [Meal, setMeal] = useState([]);

  useEffect(() => {
    fetch(API+id).then((response) => response.json())
      .then((data1) => {
        setMeal(data1.meals);
      });
  }, []);
  console.log(Meal);
  return Meal;
}