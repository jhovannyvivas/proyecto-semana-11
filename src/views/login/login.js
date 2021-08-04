import { Container, Form, Button } from 'semantic-ui-react';
import './login.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { string } from 'yup/lib/locale';

export default function Login () {
   const llave = '/';
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().email().required("email requerido"),
    }),
    onSubmit: (formData) => {
      console.log(formData);
    }
  });

  console.log(formik.values.name);
  console.log(formik.errors.name);
  console.log(formik);

  function Button2 () {
      let button = "";
    if(formik.values.name === '' || formik.errors.name === "name must be a valid email" || formik.errors.name === "email requerido"){
        button = <Button type='submit'>Login</Button> 
    }  else {
        button =<Link to='/header'><Button type='submit'>boton con link</Button><h1>Valido</h1></Link>
    };
    
    return button
  }

    return (
         <Container>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Input type='email' placeholder='nombre' name='name' onChange={formik.handleChange} error={formik.errors.name}/>
            {Button2()}
          </Form>

        </Container>

    ) ;

}

       
    