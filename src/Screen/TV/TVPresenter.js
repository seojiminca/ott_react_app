
// 1. module 선언
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Poster from "../../Components/Poster";
import Error from "../../Components/Error";

const Container = styled.div`
    
`;

// 2.
const TvPresenter = ({topRated, popular, airingToday, loading, error}) =>
    loading ? (
        <Loader/>
    ) : (
        <Container>
            {/*movie도 이렇게 간단히 하기.*/}
            <Section title="Top Rated">
                {topRated.map(tv =>
                    //<span key={tv.id}>{tv.name}</span>
                    <Poster
                        key={tv.id}
                        id={tv.id}
                        title={tv.name}
                        imgUrl={tv.poster_path}
                        year={tv.first_air_date}
                        rating={tv.vote_average}
                    />
                )}
            </Section>

            <Section title="Popular">
                {popular.map(tv =>
                    <Poster
                        key={tv.id}
                        id={tv.id}
                        title={tv.name}
                        imgUrl={tv.poster_path}
                        year={tv.first_air_date}
                        rating={tv.vote_average}
                    />
                )}
            </Section>

            <Section title="Airing Today">
                {airingToday.map(tv =>
                    <Poster
                        key={tv.id}
                        id={tv.id}
                        title={tv.name}
                        imgUrl={tv.poster_path}
                        year={tv.first_air_date}
                        rating={tv.vote_average}
                    />
                )}
            </Section>

            {/*error 에 데이터가 있으면 Error component로 뿌려주기 */}
            {error && <Error color={"#e74c3c"} text={error} />}

        </Container>
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