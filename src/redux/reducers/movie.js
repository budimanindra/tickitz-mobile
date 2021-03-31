const initialState = {
    details: {},
    showDate: [],
    showLocation: [],
    availCinema: [],
    pageInfoUpcomingMovie: null,
    pageInfoNowShowingMovie: null,
    upcomingMovie: [],
    nowShowingMovie: [],
    message: '',
    errorMsg: null,
    // isLoading: true,
    // isDateLoading: true,
    // isLocationLoading: true,
    // isCinemaLoading: true,
};

function movie(state = initialState, action) {
    switch (action.type) {
        case 'GET_MOVIE': {
            return {
                ...state,
                details: action.payload,
            };
        }
        case 'GET_MOVIE_AVAIL_DATE': {
            return {
                ...state,
                showDate: action.payload,
            };
        }
        case 'GET_MOVIE_AVAIL_LOCATION': {
            return {
                ...state,
                showLocation: action.payload,
            };
        }
        case 'GET_MOVIE_AVAIL_CINEMA': {
            return {
                ...state,
                availCinema: action.payload,
            };
        }
        case 'GET_UPCOMING_MOVIES': {
            return {
                ...state,
                upcomingMovie: action.payload,
                pageInfoUpcomingMovie: action.pageInfo,
            };
        }
        case 'PAGING_GET_UPCOMING_MOVIES': {
            const oldData = state.upcomingMovie;
            const newData = [...oldData, ...action.payload];
            return {
                ...state,
                upcomingMovie: newData,
                pageInfoUpcomingMovie: action.pageInfo,
            };
        }
        case 'GET_NOW_SHOWING_MOVIES': {
            return {
                ...state,
                nowShowingMovie: action.payload,
                pageInfoNowShowingMovie: action.pageInfo,
            };
        }
        case 'PAGING_NOW_SHOWING_MOVIES': {
            const oldData = state.nowShowingMovie;
            const newData = [...oldData, ...action.payload];
            return {
                ...state,
                nowShowingMovie: newData,
                pageInfoNowShowingMovie: action.pageInfo,
            };
        }
        case 'SET_USER_MESSAGE': {
            return {
                ...state,
                errorMsg: action.payload,
                message: '',
            };
        }
        // case 'TOGGLE_MOVIE_LOADING': {
        //     return {
        //         ...state,
        //         isLoading: !state.isLoading
        //     }
        // }
        // case 'TOGGLE_CUSTOM_LOADING': {
        //     return {
        //         ...state,
        //         [action.payload.loadingName]: !state[action.payload.loadingName]
        //     }
        // }
        default: {
            return {
                ...state,
            };
        }
    }
}

export default movie;
