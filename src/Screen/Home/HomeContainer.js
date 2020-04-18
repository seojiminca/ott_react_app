import React, {Component} from 'react';
import HomePresenter from "./HomePresenter";

class HomeContainer extends Component {

    // 상태, 함수, 라이프사이클함수.
    state = {
        nowPlaying: [],
        upcoming: [],
        popular: [],
        loading: true,
        error: null
    }

    render() {

        // 화면에 보여줄 상태나 함수값을 재선언하는 위치.
        const {nowPlaying, upcoming, popular, loading, error} = this.state;

        //리턴은 실제 화면에 보여지는 부분.
        return (
            <HomePresenter
                nowPlaying={nowPlaying}
                upcoming={upcoming}
                popular={popular}
                loading={loading}
                error={error}
            />
        );
    }
}

export default HomeContainer;