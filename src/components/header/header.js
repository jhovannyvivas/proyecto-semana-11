// import { Link } from 'react-router-dom'
import EnlacesHeader from '../EnlacesHeader/EnlacesHeader';
import logo from '../../assets/logo.png'
import './Header.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Header() {
    const fixedText = "I am fixed :)";
    const whenNotFixed = "I am not a fixed header :(";
    const [headerText, setHeaderText] = useState(whenNotFixed);
    useEffect(() => {
      const header = document.getElementById("myHeader");
      const sticky = header.offsetTop;
      const scrollCallBack = window.addEventListener("scroll", () => {
        if (window.pageYOffset > sticky) {
          header.classList.add("sticky");
          if (headerText !== fixedText) {
            setHeaderText(fixedText);
          }
        } else {
          header.classList.remove("sticky");
          if (headerText !== whenNotFixed) {
            setHeaderText(whenNotFixed);
          }
        }
      });
      return () => {
        window.removeEventListener("scroll", scrollCallBack);
      };
    }, []);
    return(
      <div>
        <header className='header' id='myHeader'>
            <Link to='/homepage'><img src={logo} alt='logo'></img></Link>
            <EnlacesHeader/>
            
        </header>
      </div>


    )
}

