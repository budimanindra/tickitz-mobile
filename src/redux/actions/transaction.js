import http from '../../helpers/http';

export const transactionData = (transactionDetails) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: 'SAVE_TRANSACTION_DETAILS',
                payload: transactionDetails,
            });
        } catch (err) {
            const {message} = err.response.data;
            dispatch({
                type: 'SET_TRANSACTION_MESSAGE',
                payload: message,
            });
        }
    };
};

export const doTransaction = (transactionDetails) => {
    return async (dispatch) => {
        const params = new URLSearchParams();
        params.append('idCinema', transactionDetails.cinemaId);
        params.append('idShowtimes', transactionDetails.showtimeId);
        params.append('date', transactionDetails.date);
        for (let i = 0; i < transactionDetails.seat.length; i++) {
            const idSeat = transactionDetails.seat[i];
            params.append('idSeats', idSeat);
        }
        try {
            await http().post('/tickets', params);
            dispatch({
                type: 'DO_TRANSACTION',
                payload: transactionDetails,
            });
        } catch (err) {
            const {message} = err.response.data;
            dispatch({
                type: 'SET_TRANSACTION_MESSAGE',
                payload: message,
            });
        }
    };
};

export const saveTicketHistory = (
    token,
    movieName,
    date,
    showTimes,
    image,
    address,
) => {
    return async (dispatch) => {
        const params = new URLSearchParams();
        params.append('movieName', movieName);
        params.append('date', date);
        params.append('showTimes', showTimes);
        params.append('image', image);
        params.append('address', address);
        try {
            await http(token).post('/tickets/ticket-history', params);
        } catch (err) {
            const {message} = err.response.data;
            dispatch({
                type: 'SET_SAVE_TICKET_MESSAGE',
                payload: message,
            });
        }
    };
};

export const getTicketHistory = (token) => {
    return async (dispatch) => {
        try {
            const results = await http(token).get('/tickets/ticket-history');
            dispatch({
                type: 'GET_TICKET_HISTORY',
                payload: results.data.results,
            });
        } catch (err) {
            const {message} = err.response.data;
            dispatch({
                type: 'SET_GET_TICKET_MESSAGE',
                payload: message,
            });
        }
    };
};
