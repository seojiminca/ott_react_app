import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
                <Form>
                    <Input
                        placeholder="Search Movies or TV Shows..."
                        value={keyword}
                        onChange={updateKeyword}
                    />
                </Form>
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