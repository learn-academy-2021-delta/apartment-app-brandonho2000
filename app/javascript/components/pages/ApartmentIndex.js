import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { faHome, faCity } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Row,
  Col,
} from "reactstrap";
class ApartmentIndex extends Component {
  render() {
    console.log(this.props.apartments);
    const { apartments } = this.props;
    return (
      <>
      <div className='indextitle'>
        <h3>Available Apartments</h3>
        </div>
        <div className="indexcards">
          <Row>
            {apartments.map((apartment) => {
              return (
                <Col md="4" className="pb-3" key={apartment.id}>
                  <Card key={apartment.id}>
                    <CardBody>
                      <CardTitle tag="h5">
                      <FontAwesomeIcon icon={faHome} className="fa-icon" />
                        {apartment.street} {apartment.city}, {apartment.state}
                      </CardTitle>
                      <CardSubtitle className="mb-2 text-muted" tag="h6">
                      {apartment.price}
                      </CardSubtitle>
                      <CardText>
                        Has {apartment.bedrooms} bedrooms, 
                        {apartment.bathrooms} bathrooms, and {apartment.pets}.
                      </CardText>
                      <Button>View</Button>
                    </CardBody>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
      </>
    );
  }
}
export default ApartmentIndex;
