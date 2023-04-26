import { ADD_FLIGHT, REMOVE_FLIGHT } from "./actionTypes";

const initialState = [
    // {
    //     id: 0,
    //     fromDestination: "",
    //     toDestination: "",
    //     journeyDate: "",
    //     guests: "",
    //     classes: "",
    // },
]

const nextFlightBookingId = (flights) => {
    return flights.length + 1
}

const bookingReducer = (state = initialState, action) => {

    // console.log(action.payload)

    switch (action.type) {
        case ADD_FLIGHT:
            const { destinationFrom, destinationTo, date, guests, classes } = action.payload;
            // validate data is available or not

            if (destinationFrom && destinationTo && date && guests && classes && state.length < 3) {
                return [
                    ...state, {
                        id: nextFlightBookingId(state),
                        fromDestination: destinationFrom,
                        toDestination: destinationTo,
                        journeyDate: date,
                        guests: guests,
                        classes: classes,
                    }
                ];
            }
        // break;
        case REMOVE_FLIGHT:
            // console.log(action.payload)
            const { id } = action.payload;
            const remainingFlight = state.filter(item => item.id !== id);
            // console.log(remainingFlight)

            return remainingFlight;
        default:
            return state;
    }
}

export default bookingReducer;