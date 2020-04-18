
// 1. module 선언
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// 2.
const TvPresenter = ({topRated, popular, airingToday, loading, error}) => {
    return (
        <div>
            <h1>tv</h1>
        </div>
    );
};

// 4.
TvPresenter.propTypes = {
    topRated: PropTypes.array,
    popular: PropTypes.array,
    airingToday: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

// 3. export
export default TvPresenter;