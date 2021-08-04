
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Link } from "react-router-dom";
import { Container, Form, Button } from "semantic-ui-react";
import './App.css';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Login from "./views/login/login";
import Homepage from "./views/homepage/homepage";
import { GetMeals } from './utils/getMeals';
import { GetMeal } from "./utils/getMeal";

function App() {
  const array = GetMeals();
  const array2= GetMeal();

  return (
    <div>

    <Router>
       <Header/> 
        <Switch>
          <Route path="/homepage">
            <Homepage/>
          </Route>
          <Route path="/">
            <Login/>
          </Route>
        </Switch>
        <Footer />
    </Router>


    </div>

    
  );
}

export default App;
