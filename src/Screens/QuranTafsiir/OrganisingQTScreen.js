import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import tafsiir from "../../tafsiir";
import QuranTaf from "../../components/QuranTaf";

const OrganisingQTScreen = () => {
  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      <Row>
        {tafsiir.map((taf) => (
          <Col key={taf._id} sm={12} md={6} lg={4} xl={3}>
            <QuranTaf taf={taf} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default OrganisingQTScreen;
