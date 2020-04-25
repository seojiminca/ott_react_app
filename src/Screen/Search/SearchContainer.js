import React, {Component} from 'react';
import SearchPresenter from "./SearchPresenter";


class SearchContainer extends Component {
    //1
    state = {
        movieResults: null,
        tvResults: null,
        keyword: "",
        loading: false, //검색은 데이터를 미리 불러올 필요가 없으니까 false.
        error: null
    }

    //send버튼 위한 함수.
    handleSubmit = () => {

    }
    

    render() {
        //2
        const {movieResults, tvResults, keyword, loading, error} = this.state;

        return (
           //3
            <SearchPresenter
                movieResults={movieResults}
                tvResults={tvResults}
                keyword={keyword}
                loading={loading}
                error={error}
                send={this.handleSubmit}
            />
        );
    }
}

export default SearchContainer;