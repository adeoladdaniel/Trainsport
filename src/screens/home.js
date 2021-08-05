import React from "react";
import Seo from "../shared/Seo";
import Navigation from "../components/NavBar/NavBar";
import Footer from "../shared/Footer";

import { Container, Row, Col} from "react-bootstrap"

function Home() {
  return (
    <React.Fragment>
      <Seo>
        <header>
          <div>
            <Navigation />
          </div>

          <div>
            <div className="right-sec">
        <img src="./asset/img/PHyF2mCMei0.svg" alt="Brand logo"  className=" right-img"/>
               <h3>Equisuite Railway Travel at <br/>your service</h3>
                <p>Hi-fi wireframes go beyond the placeholders and 'lorem ipsum' text of ... can help your team <br/>mock up a realistic prototype for initial user testing and feedback.</p>
           <button className="header-but">Get started</button>
            </div>

            
          </div>
        </header>

        <section>
          <div className="about-sec">
            <Container>
                <Row>
                    <Col md={6}>
                        <h4>About Us 
                          <hr className="color-hr"/>
                        </h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/>Blanditiis deleniti reprehenderit animi est eaque corporis! Nisi, <br/>asperiores nam amet doloribus, soluta ut reiciendis. <br/>Consequatur modi rem, vero eos ipsam voluptas.<br/><br/><br/> Error minus sint nobis dolor laborum architecto, quaerat. <br/>Voluptatum porro expedita labore esse velit veniam laborum<br/> quo obcaecati similique iusto delectus quasi!</p>
                      <br/>
                      <br/>
                        <li>Error minus sint nobis dolor</li>
                      <br/>
                        <li>Error minus sint nobis dolor</li>
                      <br/>
                
                        <li>Error minus sint nobis dolor</li>

                    </Col>

                    <Col md={6}>
                        <img src="./asset/img/image.svg" alt="Brand logo"  className="ing" />

                    </Col>
                </Row>
            </Container>
            </div>


            <div className="get-sec"> 
           

              <Container>
              <h4>Getting you to your destination
                          <hr className="color-hr"/>
                        </h4>
                <Row>
                  <Col  md={4}>
                    <div className="get-card">
                    <i class="fas fa-search get-icon"></i>
                    <h5>Train time-tables</h5>
                    <p>There are temporary changes to how far in advance journey planners are updated with alterations to the timetables due to engineering works.</p>
                    </div>

                  </Col>
                  <Col  md={4}>
                  <div className="get-card">
                  <i class="fas fa-subway get-icon"></i>
                    <h5>Train station</h5>
                    <p>There are temporary changes to how far in advance journey planners are updated with alterations to the timetables due to engineering works.</p>
                    </div>
                  </Col>
                  <Col  md={4}>
                  <div className="get-card">
                  <i class="fas fa-check-circle get-icon"></i>
                    <h5>Ticket Station</h5>
                    <p>There are temporary changes to how far in advance journey planners are updated with alterations to the timetables due to engineering works.</p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
        </section>
        <div>
          <Footer/>
        </div>
      </Seo>
    </React.Fragment>
  );
}
export default Home;
