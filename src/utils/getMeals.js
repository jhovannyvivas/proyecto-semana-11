import { useEffect, useState } from "react";

let API = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Italian';

export const GetMeals = () => {
  const [mealsA, setMeals] = useState([]);

  useEffect(() => {
    fetch(API).then((response) => response.json())
      .then((data1) => {
        setMeals(data1.meals);
      });
  }, []);
  console.log(mealsA);
  return mealsA;
}