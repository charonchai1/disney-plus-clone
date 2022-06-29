import React from "react";
import styled from "styled-components";
import { selectMovies } from "../features/movie/movieSlice";
import { useSelector } from "react-redux/es/exports";
import { Link } from "react-router-dom";

function Movies() {
  const movies = useSelector(selectMovies);

  return (
    <Container>
      <h4>Recommend for you</h4>
      <Content>
        {movies &&
          movies.map((movie,index) =>   index > 28 &&(
            <Wrap key={movies.id}>
              <Link to={`/detail/${movie.id}`}>
                  <img src={movie.cardImg} />
              </Link>
            </Wrap>
          ))}
      </Content>
      <h4>New to Disney+</h4>
      <Content2>
        {movies &&
          movies.map((movie) => (
            <Wrap key={movies.id}>
              <Link to={`/detail/${movie.id}`}>
                  <img src={movie.cardImg} />
              </Link>
            </Wrap>
          ))}
      </Content2>

    </Container>
  );
}

export default Movies;

const Container = styled.div``;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Content2 = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Wrap = styled.div`
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  -webkit-box-shadow: 0px 4px 14px 5px #000000;
  box-shadow: 0px 4px 14px 5px #000000;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    heigh: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    -webkit-box-shadow: 0px 4px 14px 5px #000000;
    box-shadow: 0px 4px 14px 5px #000000;
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
