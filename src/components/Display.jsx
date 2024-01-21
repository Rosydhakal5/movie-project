import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { CustomCard } from "./CustomCard";

export const Display = ({ movieList }) => {
  const [filteredMovies, setFilteredMovies] = useState(movieList);

  const displayHappyMovies = () => {
    const happyMovies = movieList.filter((movie) => movie.category === "happy");
    setFilteredMovies(happyMovies);
  }

  const displayLazyMovies = () => {
    const happyMovies = movieList.filter((movie) => movie.category === "lazy");
    setFilteredMovies(happyMovies);
  }

  const displayAllMovies = () => {
    setFilteredMovies(movieList);
  }

  useEffect(() => {
    setFilteredMovies(movieList);
  }, [movieList]);

  return (
    <div className="bg-black p-5 rounded shadow-lg mt-5">
      <div className="">
        <ButtonGroup aria-label="Basic example">
          <Button  variant="primary" onClick={displayAllMovies}>
            All
          </Button>
          <Button variant="warning" onClick={displayHappyMovies}>
            Happy
          </Button>
          <Button  variant="info" onClick={displayLazyMovies}>
            Lazy
          </Button>
        </ButtonGroup>
      </div>
      <hr />

      <Row>
        <Col className="d-flex gap-2 flex-wrap justify-content-around">
          {filteredMovies.map((movieItem) => 
            <CustomCard key={movieItem.imdbID} searchedMovie={movieItem} />
          )}
        </Col>
      </Row>
    </div>
  );
};
