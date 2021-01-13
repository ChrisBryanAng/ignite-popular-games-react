/* This file is to put all/every reducer here, into one file */

import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";

const rootReducer = combineReducers({
	games: gamesReducer,
});

export default rootReducer;
