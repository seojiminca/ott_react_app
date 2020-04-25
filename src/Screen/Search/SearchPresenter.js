import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Poster from "../../Components/Poster";

const Container = styled.div`
  padding: 0px 20px;
`;

const Form = styled.form`
  margin-bottom: 20px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;

class SearchPresenter extends Component {
    render() {

        //상수선언.
        let {
            movieResults,
            tvResults,
            error,
            loading,
            keyword,
            send,
            updateKeyword
        } = this.props;

        return (
            <Container>
                <Form onSubmit={send}>
                    <Input
                        placeholder="Search Movies or TV Shows..."
                        value={keyword}
                        onChange={updateKeyword}
                    />
                </Form>
                {loading ? (
                    <Loader/>
                ) : (
                    <>
                        {/*movie의 결과값이 존재하면 뿌려주는 내용.*/}
                        {movieResults && movieResults.length > 0 && (
                            <Section title="Movie Results">
                                {movieResults.map(movie => (
                                    //<span key={movie.id}>{movie.title}</span>
                                    <Poster
                                        key={movie.id}
                                        id={movie.id}
                                        title={movie.title}
                                        imgUrl={movie.poster_path}
                                        year={movie.release_date}
                                        rating={movie.vote_average}
                                    />
                                ))}
                            </Section>
                        )}

                        {tvResults && tvResults.length > 0 && (
                            <Section title="TV Results">
                                {tvResults.map(tv => (
                                    //<span key={tv.id}>{tv.name}</span>
                                    <Poster
                                        key={tv.id}
                                        id={tv.id}
                                        title={tv.name}
                                        imgUrl={tv.poster_path}
                                        year={tv.first_air_date}
                                        rating={tv.vote_average}
                                    />
                                ))}
                            </Section>
                        )}
                    </>
                )}
            </Container>
        );
    }
}

SearchPresenter.propTypes = {
    movieResults : PropTypes.array,
    tvResults : PropTypes.array,
    error : PropTypes.string,
    loading : PropTypes.bool.isRequired,
    keyword : PropTypes.string.isRequired,
    send : PropTypes.func.isRequired, //버튼이 눌렸을때 기능이 실행해야되니까 function
    updateKeyword : PropTypes.func.isRequired //키워드 수정 인식을 위해.
};

export default SearchPresenter;