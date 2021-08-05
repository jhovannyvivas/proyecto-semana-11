import './Contact.css';

export const Contact = ()=> {

    return (
        <section className='contact'>
            <h1>
                Contact
            </h1>

            <h3>Your name:</h3>
            <input type='text'></input>
            <h3>Your lastName:</h3>
            <input type='text'></input>

            <h3>Your e-mail:</h3>
            <input type='text'></input>
            <h3>Your message</h3>
            <input className='message' type='text'></input>
            <div><button type='button'>Send</button></div>

        </section>
    )
}