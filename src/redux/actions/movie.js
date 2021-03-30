import http from '../../helpers/http';

export const getMovie = (payload) => {
    return (dispatch) => {
        dispatch({
            type: 'GET_MOVIE',
            payload,
        });
        // dispatch({
        //     type: 'TOGGLE_MOVIE_LOADING'
        // })
    };
};

export const getShowDate = (payload) => {
    return (dispatch) => {
        dispatch({
            type: 'GET_MOVIE_AVAIL_DATE',
            payload,
        });
        // dispatch({
        //     type: 'TOGGLE_CUSTOM_LOADING',
        //     payload: {
        //         loadingName: 'isDateLoading'
        //     }
        // })
    };
};

export const getShowLocation = (payload) => {
    return (dispatch) => {
        dispatch({
            type: 'GET_MOVIE_AVAIL_LOCATION',
            payload,
        });
        dispatch({
            type: 'TOGGLE_CUSTOM_LOADING',
            payload,
            // : {
            //     loadingName: 'isLocationLoading'
            // }
        });
    };
};

export const getAvailCinema = (payload) => {
    return (dispatch) => {
        dispatch({
            type: 'GET_MOVIE_AVAIL_CINEMA',
            payload,
        });
        dispatch({
            type: 'TOGGLE_CUSTOM_LOADING',
            payload,
            // : {
            //     loadingName: 'isCinemaLoading'
            // }
        });
    };
};

export const getUpcomingMovies = (search, page, sort) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: 'SET_USER_MESSAGE',
                payload: '',
            });
            const response = await http().get(
                `/movies/upcoming-movies-pagination?search=${
                    search ? search : ''
                }&page=${page ? page : 1}&by=${sort ? sort : 'releaseDate'}`,
            );
            dispatch({
                type: 'GET_UPCOMING_MOVIES',
                payload: response.data.results,
                pageInfo: response.data.pageInfo,
            });
        } catch (err) {
            console.log(err);
            const {message} = err.response.data;
            dispatch({
                type: 'SET_USER_MESSAGE',
                payload: message,
            });
        }
    };
};

export const pagingGetUpcomingMovies = (search, page, sort) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: 'SET_USER_MESSAGE',
                payload: '',
            });
            const response = await http().get(
                `/movies/upcoming-movies-pagination?search=${
                    search ? search : ''
                }&page=${page ? page : 1}&by=${sort ? sort : 'releaseDate'}`,
            );
            dispatch({
                type: 'PAGING_GET_UPCOMING_MOVIES',
                payload: response.data.results,
                pageInfo: response.data.pageInfo,
            });
        } catch (err) {
            const {message} = err.response.data;
            dispatch({
                type: 'SET_USER_MESSAGE',
                payload: message,
            });
        }
    };
};
