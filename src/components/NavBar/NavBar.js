import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
// import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);


  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>

        <div className='navbar'>

        <img src="./asset/img/logo.svg" alt="Brand logo" />



          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars style={{position:"absolute", color:"white", top:"21px", right:"0",zIndex:"100000",  margin: "1rem 1rem 0rem 0rem"}} onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
        
              </Link>
            </li>
            {/* {SidebarData.map((item, index) => {
              return ( */}
          
          <li style={{    marginTop:"6rem" }} className="nav-text">
                  <Link to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-text">
                  <Link to="/about">
                  <div class="dropdown">
                      <button class="dropbtn" >About Us <i class="fa fa-caret-down"></i></button>
                      <div class="dropdown-content">
                    <Link to="/vmpage"> <a href="#">Vision, mission, values   </a></Link>
                    <Link to="/strategy"> <a href="#"> Strategic Imperative       </a></Link>
                    <Link to="/policies"> <a href="#"> Policies     </a></Link>

                    

                   
                      </div>
                  </div>



                  </Link>
                </li>
                <li className="nav-text">
                  <Link to="/what">
                  <div class="dropdown">
                      <button class="dropbtn">What We Do   <i class="fa fa-caret-down"></i></button>
                      <div class="dropdown-content">
                    <Link to="/marine"> <a href="#">Marine Services   </a></Link>
                    <Link to="/petrol"> <a href="#"> Petroleum Product storage  </a></Link>
                        
              
                      
                      </div>
                  </div>

                  </Link>
                </li>
              
                <li className="nav-text">
                  <Link to="/fleet">
                  <div class="dropdown">
                      <button class="dropbtn">Fleet   </button>
                   
                  </div>
                  </Link>
                </li>

                <li className="nav-text">
                  <Link to="/careers">
                  Careers  
                  </Link>
                </li>


                <li className="nav-text">
                  <Link to="/contact">
                  Contact Us  
                  </Link>
                </li>
                
              {/* );
            })} */}
          </ul>
        </nav>
      </IconContext.Provider>

   
    </>
  );
}



export default Navbar;