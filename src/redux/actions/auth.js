import http from '../../helpers/http';

export const resetError = () => {
    return async (dispatch) => {
        dispatch({
            type: 'SET_LOGIN_MESSAGE',
            payload: '',
        });
    };
};

export const login = (username, password) => {
    return async (dispatch) => {
        const params = new URLSearchParams();
        params.append('email', username);
        params.append('password', password);
        try {
            dispatch({
                type: 'SET_LOGIN_MESSAGE',
                payload: null,
            });
            const results = await http().post('/auth/login', params);
            dispatch({
                type: 'LOGIN',
                payload: results.data.token,
            });
        } catch (err) {
            const {message} = err.response.data;
            dispatch({
                type: 'SET_LOGIN_MESSAGE',
                payload: message,
            });
        }
    };
};

export const register = (username, password) => {
    return async (dispatch) => {
        const params = new URLSearchParams();
        params.append('email', username);
        params.append('password', password);
        try {
            dispatch({
                type: 'SET_LOGIN_MESSAGE',
                payload: '',
            });
            const results = await http().post('/auth/register', params);
            dispatch({
                type: 'LOGIN',
                payload: results.data.token,
            });
        } catch (err) {
            const {message} = err.response.data;
            dispatch({
                type: 'SET_LOGIN_MESSAGE',
                payload: message,
            });
        }
    };
};

export const logout = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: 'LOGOUT',
                payload: null,
            });
        } catch (err) {
            dispatch({
                type: 'LOGOUT',
                payload: null,
            });
        }
    };
};
