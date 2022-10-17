import React, { useEffect, useState } from 'react';
import "./Nav.css";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectuser } from './features/userSlice';



function Nav() {
const user = useSelector(selectuser);
const [show, handleShow] = useState(false);
const navigate = useNavigate();

const transitionNavBar = () => {
    if(window.scrollY > 100) {
        handleShow(true);
    } else {
        handleShow(false);
    }
}

useEffect( () => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener('scroll',transitionNavBar);
}, /* empty dependecy argument --->*/ []);
  return (
    /* ONLY AD THE nav_black WHEN SHOW IS TRUE*/
    <div className={`nav ${show && "nav_black"}`}>
        <div className='nav_contents'>

        <img 
            onClick={() => navigate("/")}
            className = "nav_logo"
            src='https://www.dictionary.com/e/wp-content/uploads/2019/02/1000x700-binge-1.jpg' 
            alt='' />

        <img 
            onClick={() => navigate("/profile")}
            className='nav_avatar'
            src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' 
            alt='' />

        </div>
    </div>
  )
}

export default Nav