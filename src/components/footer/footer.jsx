import React from 'react';
import './footer.scss'
import {Link} from "react-router-dom";
const Footer = (props) => {
    const handleHomeClick = (path) => {
        props.history.push(path);
    }

    return (
        <footer className="footer">
            <div className="wrap">
                <Link to="/" >
                <span className="logo" style={{color:'white !important'}}>
                  Games Free
                </span>
                </Link>
                <span className="menu">
      <Link target="_top" to="/about" onClick={() =>{handleHomeClick('/about')}} >About</Link>
      <Link target="_top" to="/policy" onClick={() =>{handleHomeClick('/policy')}}>Privacy Policy</Link>
      <Link target="_top" to="/terms" onClick={() =>{handleHomeClick('/terms')}}>Terms of Use</Link>
      <Link target="_top" to="/contact-us" onClick={() =>{handleHomeClick('/contact-us')}}>Contact Us</Link>
      <Link target="_top" className="footer_btn" to="/advertise_with_us" onClick={() =>{handleHomeClick('/advertise_with_us')}}>Advertise With Us</Link>
    </span>
            </div>
        </footer>

    );
}
export default Footer;
