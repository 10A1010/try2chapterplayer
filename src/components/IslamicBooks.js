import React from "react";
import {Card} from "react-bootstrap";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export const IslamicBooks = ({ bookcollection }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/books/${bookcollection._id}`}>
      <Card.Img src={bookcollection.image} variant='top'/>
      </Link>
      <Card.Body>
        <Link to={`/product/books/${bookcollection._id}`}>
          <Card.Title as='div'>
            <strong>{bookcollection.name}</strong>
          </Card.Title>
        </Link>
        <Card.Title as='div'>
            <strong>{bookcollection.description}</strong>
          </Card.Title>
        </Card.Body>
    </Card>
  );
};


export default IslamicBooks;
