//rscp
// 1. module 불러오기.
import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Loader from "../../Components/Loader";

// 2. 상수형함수 선언.
const HomePresenter = ({nowPlaying, upcoming, popular, loading, error}) =>
    loading ? (
        // component니까 <Loader />
        <Loader/>
    ) : (
        //여러개의 객체를 div로 묶어준다.
        <div>
            {nowPlaying && nowPlaying.length > 0 &&
                nowPlaying.map(movie =>
                    <span key={movie.id}>{movie.title}</span>
                )
            }
        </div>
    )

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