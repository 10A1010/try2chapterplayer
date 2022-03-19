import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import hadith from "../../hadith";
import Hadith from "../../components/Hadith";

const OrganisingHScreen = () => {
  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      <Row>
        {hadith.map((had) => (
          <Col key={had._id} sm={12} md={6} lg={4} xl={3}>
            <Hadith had={had} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default OrganisingHScreen;
