import React from 'react'; 
import Logo from "../../assets/img/top-logo.svg"
 

    
    const Header = () => {
        return (
            <header className="header" id="header"> 
                <div className="containers">
                    <a href="#inicio" ClassName="logo" >
                        <img src={Logo} alt="logo 25 Watts" />
                    </a>
                    </div>
                    <div className="navbar ">
                            <ul>
                            <li id="Home">     <a  href="#Home">Home</a> </li>
                            <li id="About">    <a  href="#About"> About</a></li>
                            <li id="Products"> <a  href="#Products">Products</a></li>
                            <li id="Services"> <a  href="#Services">Services</a></li>
                            <li id="Control">  <a  href="#Control"> Control</a></li>
                        </ul>   
                  
                    </div>
                    
                
            </header>
            
        )
    }
    
    export default Header;