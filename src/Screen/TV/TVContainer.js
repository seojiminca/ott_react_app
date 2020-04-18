import React, {Component} from 'react';
import TvPresenter from "./TVPresenter";
import {tvApi} from "../../API";

class TVContainer extends Component {

    // 1
    state = {
        topRated: [],
        popular: [],
        airingToday: [],
        loading: true,
        error: null
    }

    // 4
    async componentDidMount() {
        try{
            const {
                //results -> json 파일 이름 정확히 쓰기.
                data: {results: topRated}
            } = await tvApi.topRated();

            const {
                data: {results: popular}
            } = await tvApi.popular();

            const {
                data: {results: airingToday}
            } = await tvApi.airingToday();

            this.setState({topRated, popular, airingToday});

        }catch {
            this.setState({error: "error occured"})
        }finally {
            this.setState({loading: false})
        }
    }

    render() {
        // 2
        const {topRated, popular, airingToday, loading, error} = this.state;
        console.log(topRated);

        // 3
        return (
            <TvPresenter
                topRated={topRated}
                popular={popular}
                airingToday={airingToday}
                loading={loading}
                error={error}
            />
        );
    }
}

export default TVContainer;