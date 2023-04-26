import { legacy_createStore as createStore } from "redux";
import bookingReducer  from "./bookFlight/flightBookingReducer";


const store = createStore(bookingReducer);

export default store;