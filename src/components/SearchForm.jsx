// import { Alert } from "bootstrap";
import { useRef, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { fetchMovies } from "../helper/fetchMovies";
import { CustomCard } from "./CustomCard";

const SearchForm = ({ addMovieToList }) => {
  // fetch("https://tmdb.api.com/movies?apiKey=df2343");
  const strRef = useRef("");
  const [searchedMovie, setSearchedMovie] = useState({});

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const str = strRef.current.value;
    alert(str);

    const data = await fetchMovies(str);
    console.log(data);

    alert(JSON.stringify(data));

    if (data.Response === "True") {
      setSearchedMovie(data);
    } else {
      // setError(true);
    }
  };

  const func = (mode) => {
    addMovieToList({ ...searchedMovie, mode });
    setSearchedMovie({});
    strRef.current.value = "";
  };

  return (
    <div className="bg-black p-5 rounded shadow-lg">
      <Form onSubmit={handleOnSubmit}>
        <Row>
          <Col>
            <Form.Control ref={strRef} placeholder="Search by title" />
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
        {searchedMovie.imdbID && (
          <CustomCard searchedMovie={searchedMovie} func={func} />
        )}
      </div>
    </div>
  );
};

export default SearchForm;
