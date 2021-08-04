
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

function App() {
  //  const llave = '/';
  // const formik = useFormik({
  //   initialValues: {
  //     name: "",
  //   },
  //   validationSchema: Yup.object({
  //     name: Yup.string().required(),
  //   }),
  //   onSubmit: (formData) => {
  //     // llave = '/header';
  //     console.log(formData);
  //   }
  // });
  return (
    <div>
        {/* <Container>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Input type='text' placeholder='nombre' name='name' onChange={formik.handleChange} error={formik.errors.name}/>
            <Button type='submit'>Registro</Button>
          </Form>
        


    </Container>   */}
    <Router>

      <Link to="/titulo"><h1>Dirección</h1></Link>
        <Switch>
          <Route path="/header">
            <Footer />
          </Route>
          <Route path="/">
            <Login/>
          </Route>
        </Switch>

    </Router>


    </div>

    
  );
}

export default App;
