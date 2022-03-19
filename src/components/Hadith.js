import React from "react";
import {Card} from "react-bootstrap";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export const Hadith = ({ had }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/tafsiir/${had._id}`}>
      <Card.Img src={had.image} variant='top'/>
      </Link>
      <Card.Body>
        <Link to={`/product/tafsiir/${had._id}`}>
          <Card.Title as='div'>
            <strong>{had.name}</strong>
          </Card.Title>
        </Link>
        <Card.Title as='div'>
            <strong>{had.description}</strong>
          </Card.Title>
        </Card.Body>
    </Card>
  );
};


export default Hadith;
