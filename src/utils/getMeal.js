import { useEffect, useState } from "react";

let API = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';


export const GetMeal = (id) => {
  let finalId = id;

  const [Meal, setMeal] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    fetch(API + finalId , { signal: signal}).then((response) => response.json())
      .then((data1) => {
        setMeal(data1.meals);
      })
      .catch(err => {
        console.log(err);
      });

      return function cleanup() {
        abortController.abort();
    }
  }, []);
  return Meal;
}