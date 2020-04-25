import React, {Component} from 'react';
import DetailPresenter from "./DetailPresenter";
import {moviesApi, tvApi} from "../../API";


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
            loading: true, //data를 기다려야되는게 맞으니까 true
            isMovie: pathname.includes("/movie/") //domain에 movie가 들어가 있으면 true
        }
    }

    async componentDidMount() {

        //id를 서버에 push
        const {
            match: {
                params: {id} //paramater 에 던지는 id
            },
            history: {push}
        } = this.props;
        const {isMovie} = this.state;
        const parsedId = parseInt(id);
        if(isNaN(parsedId)) {
            return push("/");
        }
        //위에 result없으면 이거 let result = null;
        let result = null;

        //네트워크.
        try{
            if(isMovie){
                ({ data: result} = await moviesApi.movieDetail(parsedId));
            }else {
                ({ data: result} = await tvApi.tvDetail(parsedId));
            }
        }catch{
            this.setState({error: "error발생."})
        }finally {
            this.setState({loading: false, result})
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