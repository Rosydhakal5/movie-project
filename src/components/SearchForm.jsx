import { Button, Col, Form, Row } from "react-bootstrap";
import { CustomCard } from "./CustomCard";
import { useRef, useState } from "react";

const SearchForm = ({ addToMovie }) => {
  const [searchedMovie, setSearchedMovie] = useState({});
  const searchTextRef = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const searchedText = searchTextRef.current.value;

    const response = await fetch(`https://www.omdbapi.com/?apikey=1c49254a&t=${searchedText}`);
    const data = await response.json();

    setIsLoading(false);
    setSearchedMovie(data);
  }

  const handleClearingHappyMovie = (movie) => {
    addToMovie(movie); 
    setSearchedMovie({});
    searchTextRef.current.value = "";
  }

  return (
    <div className="bg-black p-5 rounded shadow-lg">
      <Form onSubmit={handleOnSubmit}>
        <Row>
          <Col>
            <Form.Control ref={searchTextRef} placeholder="Search by title" />
          </Col>
          <Col>
            <Button variant="warning" type="submit">
              Search movie
            </Button>
          </Col>
        </Row>
      </Form>
      <div className="d-flex justify-content-center mt-5">
        {isLoading && (
          <div>Loading ...</div>
        )}
        {searchedMovie.imdbID &&
          <CustomCard searchedMovie={searchedMovie} addToMovie={handleClearingHappyMovie} />
        }
      </div>
    </div>
  );
};

export default SearchForm;
