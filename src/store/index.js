import { createStore } from "vuex"
import createPersistedState from "vuex-persistedstate"

import { getWeatherFromCoordinates } from "@/services/weatherService"

const hasRefreshedRecently = (lastRefreshTime) => {
  const currentTime = Math.round(new Date().getTime() / 1000)
  const unixTimeTenMinutes = 600
  const unixTimeSinceLastRefresh = currentTime - lastRefreshTime
  if (unixTimeSinceLastRefresh < unixTimeTenMinutes) {
    return true
  }
  return false
}

export default createStore({
  state: {
    todaysWeather: null,
    dailyForecasts: null,
    hourlyForecasts: null,
    lastRefreshTime: null,
  },
  mutations: {
    setLastRefreshTime(state) {
      state.lastRefreshTime = Math.round(new Date().getTime() / 1000)
    },
    setTodaysWeather(state, todaysWeather) {
      state.todaysWeather = todaysWeather
    },
    setDailyForecasts(state, dailyForecasts) {
      state.dailyForecasts = dailyForecasts
    },
    setHourlyForecasts(state, hourlyForecasts) {
      state.hourlyForecasts = hourlyForecasts
    },
  },
  getters: {
    getTodaysWeather: (state) => state.todaysWeather,
    getDailyForecasts: (state) => state.dailyForecasts,
    getHourlyForecasts: (state) => state.hourlyForecasts,
    getLastRefreshTime: (state) => state.lastRefreshTime,
  },
  actions: {
    async refreshWeather({ commit, getters }) {
      if (!getters.getLastRefreshTime) {
        if (hasRefreshedRecently(getters.getLastRefreshTime)) {
          return
        }
      }

      const weather = await getWeatherFromCoordinates()
      commit("setTodaysWeather", weather.todaysWeather)
      commit("setDailyForecasts", weather.dailyForecasts)
      commit("setHourlyForecasts", weather.hourlyForecasts)
      commit("setLastRefreshTime")
    },
  },
  plugins: [createPersistedState()],
})
