import React from "react";
import imgUrl from '../assets/avatar.jpg'
import '../styles/Header.scss'
import Eduction from "./Eduction";

const Header=()=>{
    return(
        <div className='main'>
            <div className='head'>
                <img src={imgUrl} alt="头像"/>
                <h1>Hello,</h1>
                <h2>MY NAME IS KAMIL 24YO AND THIS IS MY RESUME/CV</h2>
            </div>
            <hr/>
            <div className='content'>
                <h3> About Me</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, non,
                    dolorem, cumque distinctio magin quam expedita velit laborum sunt amet facere
                    tempora ut fuga aliquam ad asperiores voluptatem dolorum! Quasi.
                </p>
                <h3>EDUCATION</h3>
                <Eduction/>
            </div>
        </div>
        )

}

export default Header;
