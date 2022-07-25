import * as actionTypes from "./actions";

type InitialTypes = {
    bookings: Array<{
        surname: string,
        room: number,
        date: number
    }>
}

const initialState: InitialTypes = {
    bookings: []
}

const reducer = (state = initialState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case actionTypes.ADD_BOOKING:
            return {
                ...state,
                bookings: [
                    ...state?.bookings,
                    action.payload
                ]
            }
        case actionTypes.CHECK_ROOM:
            return {

            }
        default:
            return state;
    }
};

export default reducer;