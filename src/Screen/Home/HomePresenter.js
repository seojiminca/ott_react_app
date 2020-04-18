//rscp
// 1. module 불러오기.
import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

// 2. 상수형함수 선언.
const HomePresenter = ({nowPlaying, upcoming, popular, loading, error}) => {
    return (
        <div>
            <h1>rrrrr</h1>
        </div>
    );
};

// 4. 속성선언.
HomePresenter.propTypes = {
    nowPlaying: PropTypes.array,
    upcoming: PropTypes.array,
    popular: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

// 3. export
export default HomePresenter;