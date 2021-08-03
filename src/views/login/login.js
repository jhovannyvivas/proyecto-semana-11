import { Container, Form, Button } from 'semantic-ui-react';
import './login.css';
import { useFormik } from 'formik';

export default function Login () {
       const formik = {
           initialValues: {
               name: ""
           },
           onSubmit: (formData) => {
                console.log(formData);
           }
       }
    
    let login = (

        // <Container>
        // <p>Nombre</p>
        // <Form>
        //     <Form.input type='text' placeholder='Nombre y apellidos' name='name'/>  
         
        //  </Form>

        // </Container>

        <section>
            
            <label>Nombre</label>
            <input type='text'></input>
            <button>ok</button>
        </section>
         

       )
       ;
    console.log(login);
    return login;

}

       
    