import axios from "axios"
import _ from "lodash"

const WEATHER_API_KEY = process.env.VUE_APP_WEATHER_API_KEY

const getCoordinatesFromBrowser = async () => {
  const pos = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject)
  })

  return {
    lon: pos.coords.longitude,
    lat: pos.coords.latitude,
  }
}

const getCoordinatesFromCity = async (city) => {
  try {
    const cityResponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast/daily?cnt=1&q=${city}&appid=${WEATHER_API_KEY}`
    )
    return cityResponse.data.city.coord
  } catch (err) {
    console.error(err)
  }
}

const getAllForecasts = async (lon, lat) => {
  try {
    const allForecastsResponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,current&units=imperial&appid=${WEATHER_API_KEY}`
    )

    return allForecastsResponse.data
  } catch (err) {
    console.error(err)
  }
}

const getOrganizedWeatherData = async (allForecastsData) => {
  const dailyForecasts = allForecastsData.daily
    .slice(0, 7)
    .map((allDayData, index) => {
      var date = new Date(allDayData.dt * 1000)
      const weekDayName = date.toLocaleString("en-US", {
        weekday: "short",
      })

      let dailyForecast = {}
      if (index === 0) {
        dailyForecast["weekDayNameLong"] = date.toLocaleString("en-US", {
          weekday: "long",
        })
        dailyForecast["humidity"] = allDayData.humidity
        dailyForecast["windSpeed"] = Math.round(allDayData.wind_speed)
        dailyForecast["description"] = allDayData.weather.description
      }

      dailyForecast = {
        ...dailyForecast,
        id: _.uniqueId("dailyForecasts-"),
        weekDayName: weekDayName,
        minTemp: Math.round(allDayData.temp.min),
        maxTemp: Math.round(allDayData.temp.max),
      }
      return dailyForecast
    })

  const hourlyForecasts = allForecastsData.hourly.slice(0, 6).map((hour) => {
    var date = new Date(hour.dt * 1000)
    const hourAMPM = date.toLocaleString("en-US", {
      hour: "numeric",
      hour12: true,
    })
    const formattedHour = hourAMPM.replace(/\s+/g, "").toLowerCase()

    return {
      id: _.uniqueId("hourlyForecasts-"),
      hourTime: formattedHour,
      temp: Math.round(hour.temp),
    }
  })

  const todaysWeather = { ...dailyForecasts[0], temp: hourlyForecasts[0].temp }

  return { hourlyForecasts, dailyForecasts, todaysWeather }
}

export const getWeatherFromCoordinates = async () => {
  try {
    const coordinates = await getCoordinatesFromBrowser()
    const allForecastsData = await getAllForecasts(
      coordinates.lon,
      coordinates.lat
    )

    return getOrganizedWeatherData(allForecastsData)
  } catch (err) {
    console.error(err)
  }
}

export const getWeatherFromCity = async (city) => {
  try {
    const coordinates = await getCoordinatesFromCity(city)
    const allForecastsData = await getAllForecasts(
      coordinates.lon,
      coordinates.lat
    )

    return getOrganizedWeatherData(allForecastsData)
  } catch (err) {
    console.error(err)
  }
}
