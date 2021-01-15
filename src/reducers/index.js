/* This file is to put all/every reducer here, into one file */

import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";
import detailReducer from "./detailReducer";

const rootReducer = combineReducers({
	games: gamesReducer,
	detail: detailReducer,
});

export default rootReducer;
