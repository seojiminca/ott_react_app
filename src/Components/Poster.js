import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const Container = styled.div`
  font-size: 12px;
`;


const Image = styled.div`
  background-image: url(${props => props.bgUrl});
  height: 180px;
  background-size: cover;
  border-radius: 4px;
  background-position: center;
  transition: opacity 0.1s linear;
`;


const Rating = styled.span`
  bottom: 10px;
  right: 10px;
  position: absolute;
  opacity: 0;
  transition: opacity 0.1s linear;
`;

//image, Rating 보다 밑에있어야 이미지를 불러올수있다.
const ImgContainer = styled.div`
  margin-bottom: 7px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

const Title = styled.span`
  display: block;
  margin-bottom: 3px;
`;

const Year = styled.span`
  font-size: 10px;
  color: rgba(255,255,255,0.5);
`;

const Poster = ({id, imgUrl, title, year, rating}) => (
    <Container>
        <ImgContainer>
            <Image bgUrl={
                `https://image.tmdb.org/t/p/w300${imgUrl}`
            }/>
            <Rating><span role="img">⭐️</span> {rating} / 10</Rating>
        </ImgContainer>
        <Title>{title.slice(0, 18)}...</Title>
        <Year>{year}</Year>
    </Container>
);

Poster.propTypes = {
    id: PropTypes.number.isRequired,
    imgUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    year: PropTypes.string,
    rating: PropTypes.number
};

export default Poster;