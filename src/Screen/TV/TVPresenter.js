
// 1. module 선언
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from "../../Components/Loader";

// 2.
const TvPresenter = ({topRated, popular, airingToday, loading, error}) =>
    loading ? (
        <Loader/>
    ) : (
        <div>
            {topRated.map(tv =>
                <span key={tv.id}>{tv.name}</span>
            )}
            <p>구분선.</p>
            {popular.map(tv =>
                <span key={tv.id}>{tv.name}</span>
            )}
            <p>구분선.</p>
            {airingToday.map(tv =>
                <span key={tv.id}>{tv.name}</span>
            )}
        </div>
    );

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