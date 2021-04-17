const initialState = {
    transactionDetails: {},
    ticketHistory: [],
    errorMsg: '',
};

function transaction(state = initialState, action) {
    switch (action.type) {
        case 'SAVE_TRANSACTION_DETAILS': {
            return {
                ...state,
                transactionDetails: action.payload,
            };
        }
        case 'SET_TRANSACTION_MESSAGE': {
            return {
                ...state,
                errorMsg: action.payload,
            };
        }
        case 'DO_TRANSACTION': {
            return {
                ...state,
                transactionDetails: action.payload,
            };
        }
        case 'GET_TICKET_HISTORY': {
            return {
                ...state,
                ticketHistory: action.payload,
            };
        }
        case 'SET_SAVE_TICKET_MESSAGE': {
            return {
                ...state,
                errorMsg: action.payload,
            };
        }
        case 'SET_GET_TICKET_MESSAGE': {
            return {
                ...state,
                errorMsg: action.payload,
            };
        }
        default: {
            return {
                ...state,
            };
        }
    }
}

export default transaction;
