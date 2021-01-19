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
      <Link target="_top" to="/policy" onClick={() =>{handleHomeClick('/policy')}}>Privacy Policy</Link>

    </span>
            </div>
        </footer>

    );
}
export default Footer;
