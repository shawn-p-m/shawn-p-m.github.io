import axios from "axios"

const WEATHER_API_KEY = "be2853525b64df346a912d8d1642e889"

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

const getAllForecasts = async () => {
  try {
    const allForecastsResponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=minutely,current&units=imperial&appid=${WEATHER_API_KEY}`
    )

    return allForecastsResponse.data
  } catch (err) {
    console.error(err)
  }
}

const getOrganizedWeatherData = async (allForecastsData) => {
  const days = allForecastsData.daily.slice(0, 7).map((day) => {
    return {
      minTemp: day.temp.min,
      maxTemp: day.temp.max,
      humidity: day.humidity,
      windSpeed: day.wind_speed,
      description: day.weather.description,
    }
  })

  const hours = allForecastsData.hourly.slice(0, 6).map((hour) => {
    var date = new Date(hour.dt * 1000)
    const hourAMPM = date.toLocaleString("en-US", {
      hour: "numeric",
      hour12: true,
    })
    const formattedHour = hourAMPM.replace(/\s+/g, "").toLowerCase()
    return {
      time: formattedHour,
      temp: Math.round(hour.temp),
    }
  })

  return { hours, days }
}

export const getWeatherFromCoordinates = async () => {
  try {
    const coordinates = getCoordinatesFromBrowser()
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
