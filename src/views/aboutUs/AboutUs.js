import patreon from '../../assets/patreon_logo.png';
import foto from '../../assets/foto.PNG';
import './AboutUs.css';


export const AboutUs = () => {
    return (

        <section className='section'>
            <div className='mealDb'>
            <h1>The MealDB</h1>
            <p>Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world.
We also offer a free JSON API for anyone wanting to use it.
If you like the site, please consider supporting us on Patreon by clicking the link below...</p>
        <img src={patreon} alt='patreon'></img>
            </div>
            <div className='personal'>

                <h1>Jhovanny Vivas</h1>
                <p>My name is Jhovanny, I start by saying that the world of technology means an industry that uses mathematics and numbers, it also means stable, well-paid jobs, build or support the internet, digitize companies and services, digitize the government, work for projects foreign. I mention the part of the numbers, since I like them, since I was little I have had an affinity for mathematics and physics, I have a degree as a civil engineer and now I am in the area of frontend web development. Thanks
                </p>
                <img src={foto} alt='foto'></img>

            </div>

        </section>
        
    )
}