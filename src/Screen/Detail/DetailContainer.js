import React, {Component} from 'react';
import DetailPresenter from "./DetailPresenter";


//Detail에는 여러가지의 다양한 기능이 존재하니까 class형으로 사용.
class DetailContainer extends Component {

    //속성을 설계하겠다. movie일지 tv일지 모르니까.
    constructor(props) {
        super(props);
        const {
            location: {pathname} //지금 domain에 movie가 있는지 아닌지.
        } = props;
        this.state = {
            result: null, //movie or tv의 데이터.
            error: null,
            loading: true,
            isMovie: pathname.includes("/movie/") //domain에 movie가 들어가 있으면 true
        }
    }

    render() {

        const {result, error, loading} = this.state;

        return (
            <DetailPresenter loading={loading} error={error} result={result} />
        );
    }
}

export default DetailContainer;