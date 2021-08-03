
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Link } from "react-router-dom";
import { Container, Form, Button } from "semantic-ui-react";
import './App.css';
import { Footer } from "./components/footer/footer";
import Header from "./components/header/header";
import * as Yup from 'yup';
import { useFormik } from 'formik';

function App() {
  //  const llave = '/';
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required(),
    }),
    onSubmit: (formData) => {
      // llave = '/header';
      console.log(formData);
    }
  });
  return (

         <Container>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Input type='text' placeholder='nombre' name='name' onChange={formik.handleChange} error={formik.errors.name}/>
            <Button type='submit'>Registro</Button>
          </Form>
        


    </Container>  
    
  );
}

export default App;
    // <div>

// {/* <Router>

//       <Link to="/titulo"><h1>Dirección</h1></Link>
//         <Switch>
//           <Route path="/titulo">
//             <Footer />
//           </Route>
//           <Route path="/">
//             <Header />
//           </Route>
//         </Switch>

//     </Router>


//     </div> */}