
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
import MealDetail from './views/meal/mealDetail';
import { AboutUs } from "./views/aboutUs/AboutUs";
import { Contact } from './views/contact/Contact';
import { Register } from './views/register/Register';

function App() {


  return (
  

    <Router>
       
        <Switch>
          <Route path="/register">
          <Header/> 
            <Register/>
            <Footer />
          </Route>
          <Route path="/contact">
          <Header/> 
            <Contact/>
            <Footer />
          </Route>
          <Route path="/AboutUs">
          <Header/> 
            <AboutUs/>
            <Footer />
          </Route>
          <Route path="/mealDetail/:id">
          <Header/> 
            <MealDetail/>
            <Footer />
          </Route>
          <Route path="/homepage">
          <Header/> 
            <Homepage/>
            <Footer />
          </Route>
          <Route path="/">
            <Login/>
          </Route>
        </Switch>

    </Router>



    
  );
}

export default App;
