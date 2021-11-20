import { createStore } from "vuex"
import createPersistedState from "vuex-persistedstate"

import { getWeatherFromCoordinates } from "@/services/weatherService"
import { getWeatherFromCity } from "../services/weatherService"

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
    lastRefreshFromSearch: null,
  },
  mutations: {
    setLastRefreshFromSearch(state, lastRefreshFromSearch) {
      state.lastRefreshFromSearch = lastRefreshFromSearch
    },
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
    getLastRefreshFromSearch: (state) => state.lastRefreshFromSearch,
  },
  actions: {
    async refreshWeather({ commit, getters }) {
      if (!getters.getLastRefreshFromSearch) {
        if (!getters.getLastRefreshTime) {
          if (hasRefreshedRecently(getters.getLastRefreshTime)) {
            return
          }
        }
      }

      try {
        const weather = await getWeatherFromCoordinates()
        commit("setTodaysWeather", weather.todaysWeather)
        commit("setDailyForecasts", weather.dailyForecasts)
        commit("setHourlyForecasts", weather.hourlyForecasts)
        commit("setLastRefreshTime")
        commit("setLastRefreshFromSearch", false)
        return true
      } catch {
        return false
      }
    },

    async searchForCityWeather({ commit }, city) {
      if (!city) {
        return
      }
      try {
        const weather = await getWeatherFromCity(city)
        commit("setTodaysWeather", weather.todaysWeather)
        commit("setDailyForecasts", weather.dailyForecasts)
        commit("setHourlyForecasts", weather.hourlyForecasts)
        commit("setLastRefreshTime")
        commit("setLastRefreshFromSearch", true)
        return true
      } catch {
        return false
      }
    },
  },
  plugins: [createPersistedState()],
})
