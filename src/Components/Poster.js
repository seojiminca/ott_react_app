import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const Poster = ({id, imgUrl, title, year, rating}) => (
    <div>
        <div>
            <div></div>
            <span>{rating} / 10</span>
        </div>
        <span>{title}</span>
        <span>{year}</span>
    </div>
);

Poster.propTypes = {
    id: PropTypes.number.isRequired,
    imgUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    year: PropTypes.string,
    rating: PropTypes.number
};

export default Poster;