import React from "react";
import {Card} from "react-bootstrap";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export const QuranTaf = ({ taf }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/tafsiir/${taf._id}`}>
      <Card.Img src={taf.image} variant='top'/>
      </Link>
      <Card.Body>
        <Link to={`/product/tafsiir/${taf._id}`}>
          <Card.Title as='div'>
            <strong>{taf.name}</strong>
          </Card.Title>
        </Link>
        <Card.Title as='div'>
            <strong>{taf.description}</strong>
          </Card.Title>
        </Card.Body>
    </Card>
  );
};


export default QuranTaf;
