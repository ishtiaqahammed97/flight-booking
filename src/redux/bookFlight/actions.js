import { ADD_FLIGHT, REMOVE_FLIGHT } from "./actionTypes";

export const addFlight = (bookingInfo) => {
    return {
        type: ADD_FLIGHT,
        payload: bookingInfo,
    }
}

export const removeFlight = (flightToBeRemove) => {
    return {
        type: REMOVE_FLIGHT,
        payload: flightToBeRemove,
    }
}