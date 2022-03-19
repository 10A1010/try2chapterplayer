import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import bookscollection from "../../bookscollection";
import IslamicBooks from "../../components/IslamicBooks";

const OrganisingBookScreen = () => {
  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      <Row>
        {bookscollection.map((bookcollection) => (
          <Col key={bookcollection._id} sm={12} md={6} lg={4} xl={3}>
            <IslamicBooks bookcollection={bookcollection} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default OrganisingBookScreen;
