import React, {Component} from 'react';
import HomePresenter from "./HomePresenter";

class HomeContainer extends Component {
    render() {
        return (
            <HomePresenter
                nowPlaying={}
                upcoming={}
                popular={}
                loading={}
                error={}
            />
        );
    }
}

export default HomeContainer;