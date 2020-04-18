//rscp
// 1. module 불러오기.
import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Poster from "../../Components/Poster";

// 2. 상수형함수 선언.
const HomePresenter = ({nowPlaying, upcoming, popular, loading, error}) =>
    loading ? (
        // component니까 <Loader />
        <Loader/>
    ) : (
        //여러개의 객체를 div로 묶어준다.
        <div>
            {/*더세세한 조건일뿐 map으로 바로 뿌려줘도된다. 여기선 3가지 다 사용함 */}
            {nowPlaying && nowPlaying.length > 0 && (
                // Section에서 미리 지정해둔 title과 그 밑의 내용 children.
                <Section title="현재상영작">
                    {nowPlaying.map(movie =>
                        // <span key={movie.id}>{movie.title}</span>
                        <Poster
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            imgUrl={movie.poster_path}
                            year={movie.release_date}
                            rating={movie.vote_average}
                        />
                    )}
                </Section>
            )}

            {upcoming && (
                <Section title="상영예정작">
                    {upcoming.map(movie =>
                        <span key={movie.id}>{movie.title}</span>
                    )}
                </Section>
            )}

            <Section title="인기작">
                {popular.map(movie =>
                    <span key={movie.id}>{movie.title}</span>
                )}
            </Section>
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