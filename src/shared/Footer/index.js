import React, { Component } from "react"; 
import {Container, Row, Col} from 'react-bootstrap';







class  Footer extends React.Component{
    render(){
      return(

        <React.Fragment>
                   <div className="foot">

<Container> 
   <Row >
       <Col md={4}>
       <h7 className="colored">
          About Us
       </h7>

       <br/> <br/><br/>


      
     
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis deleniti reprehenderit animi est eaque corporis! Nisi, asperiores nam amet doloribus.</p>

   
    
      
    
   

       </Col>
       <Col md={4}>
       <h7 className="colored">
     <b>QUICK LINKS</b>
       </h7>
       <br/> <br/><br/>

     
    <div >
      
   
         <p   >Events</p>
      <p  >Team </p>
     <p  >Contact us</p>


      
 
    {/* <a href="/contact">  <h5 style={{color:"white"}}  >CONTACT</h5></a> */}
       
       </div> 
    
       
       </Col>
  
        <Col md={4}>
     
        <h7 className="colored"> Signup for our newsletter</h7>

        <form>
           <input className="send_input"/><button className="send_but">send</button>
        </form>
 

      

   


       
       </Col>

      
       
   </Row>
</Container> 



<div className="copy">
   <p>Copy right &#169; 2020 Trainsport</p>
</div>

{/* <span className="round-icon">
       <i style={{fontSize:"1.5rem"}} className="fa fa-facebook-f"></i>
       </span>
       <span className="round-icon">
       <i style={{fontSize:"1rem"}} className="fa fa-twitter"></i>
       </span>
       <span className="round-icon">
       <i style={{fontSize:"1rem"}} className="fa fa-instagram"></i>
       </span> */}
</div>
        </React.Fragment>
  
  
    );

    }
  
  
}

export default Footer;

