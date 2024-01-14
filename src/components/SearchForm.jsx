import { Button, Col, Form, Row } from "react-bootstrap";

const SearchForm = () => {

  return (
    <div className="bg-black p-5 rounded shadow-lg">
      <Form >
        <Row>
          <Col>
            <Form.Control placeholder="Search by title" />
          </Col>
          <Col>
            <Button variant="warning" type="submit">
              Search movie
            </Button>
          </Col>
        </Row>
      </Form>
      <div className="d-flex justify-content-center mt-5">
        {/* {error && <Alert variant="danger">Movie not found!</Alert>}
         */}
        {/* {searchedMovie.imdbID && (
          <CustomCard searchedMovie={searchedMovie} func={func} />
        )} */}
      </div>
    </div>
  );
};

export default SearchForm;
