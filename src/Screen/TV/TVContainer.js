import React, {Component} from 'react';
import TvPresenter from "./TVPresenter";

class TVContainer extends Component {
    render() {
        return (
            <TvPresenter
                topRated={}
                popular={}
                airingToday={}
                loading={}
                error={}
            />
        );
    }
}

export default TVContainer;