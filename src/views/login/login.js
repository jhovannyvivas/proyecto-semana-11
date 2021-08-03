import { Container, Form, Button } from 'semantic-ui-react';
import './login.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Login () {
   const llave = '/';
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

    ) ;

}

       
    