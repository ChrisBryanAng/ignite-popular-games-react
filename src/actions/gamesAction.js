import axios from "axios";
import { finishedPopularGamesURL } from "../api";

// Action Creator

export const loadGames = () => async (dispatch) => {
	// FECTH AXIOS
	const popularData = await axios.get(finishedPopularGamesURL());
	dispatch({
		type: "FETCH_GAMES",
		payload: {
			popular: popularData.data.results,
		},
	});
};
