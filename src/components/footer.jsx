import React from 'react';
import "./footer.css"
const currentYear = new Date().getFullYear();

//const currentHour = new Date().getHours();
function Footer(){
    return (
        <div>
            <footer className="site-footer" >
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
            <p className="site-footer h1" > Copyright  {currentYear}</p>
            </footer>
        </div>
        );
}
export default Footer;
