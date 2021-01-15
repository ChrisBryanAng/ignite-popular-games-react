// Base URL
const base_url = "https://api.rawg.io/api/";

// Getting the date(month)
const getCurrentMonth = () => {
	const month = new Date().getMonth() + 1;

	if (month < 10) {
		return `0${month}`;
	} else {
		return month;
	}
};

// Getting the date(day)
const getCurrentDay = () => {
	const day = new Date().getDate();

	if (day < 10) {
		return `0${day}`;
	} else {
		return day;
	}
};

// Getting the day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// to run/test, type: node ./src/api.js in terminal
// console.log(currentDate);

// Popular games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

// get the finished URL
export const finishedPopularGamesURL = () => `${base_url}${popular_games}`;
export const finishedUpcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const finisehdNewGamesURL = () => `${base_url}${new_games}`;

// remove export to run this log
// console.log(finishedPopularGamesURL());

// GAME DETAILS
export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}`;

// GAME SCREENSHOTS
export const gameScreenShotURL = (game_id) =>
	`${base_url}games/${game_id}/screenshots`;
