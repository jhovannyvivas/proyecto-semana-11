
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
import { Table } from './views/table/table';
import MealDetail2 from './views/mealDetail2/mealDetail2';

function App() {


  return (
  

    <Router>
       
        <Switch>
          <Route exact path="/mealSearch">
          <Header/> 
            <MealDetail2/>
            <Footer />
          </Route>
          <Route exact path="/table/:id">
          <Header/> 
            <Table/>
            <Footer />
          </Route>
          <Route  exact path="/register">
          <Header/> 
            <Register/>
            <Footer />
          </Route>
          <Route exact path="/contact">
          <Header/> 
            <Contact/>
            <Footer />
          </Route>
          <Route exact path="/AboutUs">
          <Header/> 
            <AboutUs/>
            <Footer />
          </Route>
          <Route exact path="/mealDetail/:id">
          <Header/> 
            <MealDetail/>
            <Footer />
          </Route>
          <Route exact path="/homepage">
          <Header/> 
            <MealDetail2/>
            <Footer />
          </Route>
          <Route exact path="/">
            <Login/>
          </Route>
        </Switch>

    </Router>



    
  );
}

export default App;
