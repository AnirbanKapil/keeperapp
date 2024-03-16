import React from "react";

const Footer = () => {
    
    const year = new Date().getFullYear()
    
    
    return (
        <div>
          <div className="footer-div">  
          <h3 className="copyright">copyright @ {year}</h3>
          </div>
        </div>

    )
}

export default Footer;