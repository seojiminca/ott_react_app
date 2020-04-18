import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "2cde3163ac2ee24dc1931bddddf43dfe",
        language: "kr-KR"
    }

});

export const moviesApi = {
    nowPlaying: () => api.get("movie/now_playing"),
    upcoming: () => api.get("movie/upcoming"),
    popular: () => api.get("movie/popular"),
    movieDetail: id =>
        api.get(`movie/${id}`, {
            params: {
                append_to_response: "videos"
            }
        }),
    //검색 키워드를 매개변수로 던져서 쿼리로 인식을 할 수 있게 변경.
    search: keyword =>
        api.get("search/movie", {
            params: {
                query: encodeURIComponent(keyword)
            }
        })
};

export const tvApi = {
    topRated: () => api.get("tv/top_rated"),
    popular: () => api.get("tv/popular"),
    airingToday: () => api.get("tv/airing_today"),
    tvDetail: id =>
        api.get(`tv/${id}`, {
            params: {
                append_to_response: "videos"
            }
        }),
    search: keyword =>
        api.get("search/tv", {
            params: {
                query: encodeURIComponent(keyword)
            }
        })
};

export default api;