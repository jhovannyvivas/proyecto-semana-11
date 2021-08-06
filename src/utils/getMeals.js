import { useEffect, useState } from "react";

let API = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Italian';

export const GetMeals = () => {
  const [mealsA, setMeals] = useState([]);

  useEffect(() => {

    const abortController = new AbortController();
    const signal = abortController.signal;

    fetch(API, {signal: signal}).then((response) => response.json())
      .then((data1) => {
        setMeals(data1.meals);
      })
      .catch(err => {
        console.log(err);
      });



      return function cleanup() {
          abortController.abort();
      }
  }, []);

  return mealsA;
}