import axios from "axios";
import {
	finishedPopularGamesURL,
	finishedUpcomingGamesURL,
	finisehdNewGamesURL,
	searchGameURL,
} from "../api";

// Action Creator

export const loadGames = () => async (dispatch) => {
	// FECTH AXIOS
	const popularData = await axios.get(finishedPopularGamesURL());
	const newGamesData = await axios.get(finisehdNewGamesURL());
	const upcomingData = await axios.get(finishedUpcomingGamesURL());
	dispatch({
		type: "FETCH_GAMES",
		payload: {
			popular: popularData.data.results,
			upcoming: upcomingData.data.results,
			newGames: newGamesData.data.results,
		},
	});
};

export const fetchSearch = (game_name) => async (dispatch) => {
	const searchGames = await axios.get(searchGameURL(game_name));

	dispatch({
		type: "FETCH_SEARCHED",
		payload: {
			searched: searchGames.data.results,
		},
	});
};
