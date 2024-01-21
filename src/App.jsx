import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import SearchForm from "./components/SearchForm";
import { useState } from "react";
import { Display } from "./components/Display";

function App() {
  const [movieList, setMovieList] = useState([]);

  const addToMovie =(movie) => {
    setMovieList([...movieList, movie]);
  }

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
        <SearchForm addToMovie={addToMovie} />
        {/* <Display movieList={movieList} handleOnDelete={handleOnDelete} /> */}
        <Display movieList={movieList}/>
      </Container>
    </>
  );
}

export default App;
