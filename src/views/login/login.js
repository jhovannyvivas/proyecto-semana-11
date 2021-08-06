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
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required("Please email"),
      password: Yup.string().required("Please password"),
    }),
    onSubmit: (formData) => {
      console.log(formData);
    }
  });


  function Button2 () {
      let button = "";
    if(formik.values.email === '' || formik.errors.email === "name must be a valid email" || formik.errors.email === "Please email" || formik.values.password === '' || formik.errors.password === "Please password"){
        button = <Button type='submit'>Login</Button> 
    }  else {
        button =<Link to='/homepage'><Button type='submit'>Login</Button></Link>
    };
    
    return button
  }

    return (
      <div className='divContainer'>
         <Container >
          <Form onSubmit={formik.handleSubmit}>
            <Form.Input className='inputFinal' type='email' placeholder='Email' name='email' onChange={formik.handleChange} error={formik.errors.email}/>
            <Form.Input className='inputFinal' type='password' placeholder='Password' name='password' onChange={formik.handleChange} error={formik.errors.password}/>
            <div className='ButtonFinal'>{Button2()}</div>
          </Form>

        </Container>


      </div>

    ) ;

}

       
    