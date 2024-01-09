import React from 'react'
import { Col, Row, Button, Form } from 'react-bootstrap';

const SearchForm = () => {
  return (
    <div className='bg-black p-5 rounded shadow-lg'>
        <Row>
            <Col>
            <Form.Control placeholder = "Search by title" />
            </Col>
            <Col> <Button> Search Movie</Button> </Col>
        </Row>
        </div>
  )
}

export default SearchForm;