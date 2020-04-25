import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SearchPresenter extends Component {
    render() {

        //상수선언.
        let {
            movieResults,
            tvResults,
            error,
            loading,
            keyword,
            send
        } = this.props;

        return (
            <div>

            </div>
        );
    }
}

SearchPresenter.propTypes = {
    movieResults : PropTypes.array,
    tvResults : PropTypes.array,
    error : PropTypes.string,
    loading : PropTypes.bool.isRequired,
    keyword : PropTypes.string.isRequired,
    send : PropTypes.func.isRequired //버튼이 눌렸을때 기능이 실행해야되니까 function
};

export default SearchPresenter;