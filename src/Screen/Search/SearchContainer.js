import React, {Component} from 'react';
import SearchPresenter from "./SearchPresenter";
import {moviesApi, tvApi} from "../../API";

class SearchContainer extends Component {
    //1
    state = {
        movieResults: null,
        tvResults: null,
        keyword: "",
        loading: false, //검색은 데이터를 미리 불러올 필요가 없으니까 false.
        error: null
    }

    //send 위한 함수.
    handleSubmit = event => { // 임의의 실행변수로 event 넣기.
        event.preventDefault(); // 임의의 실행변수를 초기화하고 여기서 시작한다는 의미.

        if(this.state.keyword !== ""){ //keyword(사용자 입력값이) 빈칸이 아니라면.
            // networking. API태움.
            this.searchByTerm()
        }
    }

    //사용자 입력값을 인식하는 함수.
    updateKeyword = event => {
        const {
            target: {value} //사용자가 입력한 검색어.
        } = event;
        this.setState({
            keyword: value //keyword에 사용자 입력값을 넣겠다.
        });
    };

    searchByTerm = async () => {
        const {keyword} = this.state;
        this.setState({loading: true});

        try{
            const{
                data: {results: movieResults}
            } = await moviesApi.search(keyword);

            const{
                data: {results: tvResults} //data안에있는 results에 있는 내용을 tvResults라고 칭하겠다.
            } = await tvApi.search(keyword);

            this.setState({movieResults,tvResults}) //movieResults에 movieResults가 들어갔으니 setState변경.
        }catch{
            this.setState({error: "Can't find results."})
        }finally {
            this.setState({loading: false})
        }
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
                updateKeyword={this.updateKeyword}
            />
        );
    }
}

export default SearchContainer;