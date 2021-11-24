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
    city: null,
    dailyForecasts: null,
    hourlyForecasts: null,
    lastRefreshTime: null,
    isLastRefreshFromSearch: null,
    todaysWeather: null,
  },
  mutations: {
    setCity(state, city) {
      state.city = city
    },

    setIsLastRefreshFromSearch(state, isLastRefreshFromSearch) {
      state.isLastRefreshFromSearch = isLastRefreshFromSearch
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
    getCity: (state) => state.city,
    getTodaysWeather: (state) => state.todaysWeather,
    getDailyForecasts: (state) => state.dailyForecasts,
    getHourlyForecasts: (state) => state.hourlyForecasts,
    getLastRefreshTime: (state) => state.lastRefreshTime,
    getIsLastRefreshFromSearch: (state) => state.isLastRefreshFromSearch,
  },
  actions: {
    async refreshWeather({ commit, getters }) {
      let success
      if (getters.getLastRefreshTime && !getters.getIsLastRefreshFromSearch) {
        if (hasRefreshedRecently(getters.getLastRefreshTime)) {
          success = true
          return success
        }
      }
      try {
        const weather = await getWeatherFromCoordinates()
        commit("setCity", weather.city)
        commit("setTodaysWeather", weather.todaysWeather)
        commit("setDailyForecasts", weather.dailyForecasts)
        commit("setHourlyForecasts", weather.hourlyForecasts)
        commit("setLastRefreshTime")
        commit("setIsLastRefreshFromSearch", false)
        success = true
      } catch {
        success = false
      }

      return success
    },

    async searchForCityWeather({ commit }, city) {
      let success

      if (!city) {
        success = false
        return success
      }

      try {
        const weather = await getWeatherFromCity(city)
        commit("setCity", weather.city)
        commit("setTodaysWeather", weather.todaysWeather)
        commit("setDailyForecasts", weather.dailyForecasts)
        commit("setHourlyForecasts", weather.hourlyForecasts)
        commit("setLastRefreshTime")
        commit("setIsLastRefreshFromSearch", true)
        success = true
      } catch {
        success = false
      }
      return success
    },
  },
  plugins: [createPersistedState()],
})
