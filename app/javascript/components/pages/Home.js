import React, { Component } from "react";
import { UncontrolledCarousel, Row, Col } from "reactstrap";
import size from "../assets/size.png";
import size1 from "../assets/size1.png";
import size2 from "../assets/size2.png";
class Home extends Component {
  render() {
    return (
      <Row>
        <Col className="md-12">
          <div className="title">
            <h1>Dallas Apartments</h1>
          </div>
<div className='carousel'>
          <UncontrolledCarousel
            items={[
              {
                key: 1,
                src: size,
              },
              {
                key: 2,
                src: size1,
              },
              {
                key: 3,
                src: size2,
              },
            ]}
          />
          </div>
        </Col>
      </Row>
    );
  }
}
export default Home;
