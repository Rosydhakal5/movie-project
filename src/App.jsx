import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import SearchForm from "./components/SearchForm";

function App() {

  return (
    <>
      <Container>
        {/* title */}
        <Row>
          <Col>
            <h1 className="mt-5 text-center"> My Movie Collection</h1>
          </Col>
        </Row>
        <hr />
        <SearchForm  />
        {/* <Display movieList={movieList} handleOnDelete={handleOnDelete} /> */}
      </Container>
    </>
  );
}

export default App;
