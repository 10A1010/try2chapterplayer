import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import products from "../products";
import HomeScreen from "../quranpage/HomeScreen";
import "../bootstrap.min.css";

const ProductScreen = ({ match }) => {
  const product = products.find((p) => p._id === match.params.id);

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      <Row  >
        <Col></Col>
        {/* <Col md={6}>
          <Image src={product.image} alt={product.name} fluid></Image>
        </Col>
        <Col md={3}> */}
        <Col  md={10}  xs={{ span: 3, offset: 5 }}>
            {/* <ListGroup.Itm> */}
            <HomeScreen />
            {/* <h2>{product.name}</h2> */}
            {/* </ListGroup.Item> */}
            {/* <ListGroup.Item>Description: {product.description}</ListGroup.Item> */}
          </Col>
        {/* </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col> Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col> Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className='btn-block'
                  type='button'
                  disabled={product.countInStock === 0}
                >
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col> */}
      </Row>
    </>
  );
};

export default ProductScreen;
