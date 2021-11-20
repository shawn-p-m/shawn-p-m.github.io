<template>
  <div class="container">
    <div class="columns">
      <div class="column is-narrow">
        <TodaysTemperature
          class="p-5"
          :windSpeed="getTodaysWeather.windSpeed"
          :humidity="getTodaysWeather.humidity"
          :temp="getTodaysWeather.temp"
        />
      </div>
      <div class="column py-0"></div>
      <div class="column is-narrow">
        <CitySearch class="p-5" :today="getTodaysWeather.weekDayNameLong" />
      </div>
    </div>
    <div class="p-4">
      <HourlyTemperatures class="p-4" :hourlyForecasts="getHourlyForecasts" />
    </div>
    <div class="p-4">
      <SevenDayForecast
        class="has-background-white-ter"
        :dailyForecasts="getDailyForecasts"
      />
      <TodaysDetails
        class="p-4 m-4"
        :windSpeed="getTodaysWeather.windSpeed"
        :humidity="getTodaysWeather.humidity"
        :lowTemp="getTodaysWeather.minTemp"
        :highTemp="getTodaysWeather.maxTemp"
      />
    </div>
  </div>
</template>

<script>
import TodaysDetails from "../molecules/TodaysDetails.vue"
import TodaysTemperature from "../molecules/TodaysTemperature.vue"
import HourlyTemperatures from "../molecules/HourlyTemperatures.vue"
import SevenDayForecast from "../molecules/SevenDayForecast.vue"
import CitySearch from "../molecules/CitySearch.vue"
import { mapActions, mapGetters } from "vuex"

export default {
  computed: {
    ...mapGetters([
      "getDailyForecasts",
      "getHourlyForecasts",
      "getTodaysWeather",
    ]),
  },

  methods: {
    ...mapActions(["refreshWeather"]),
  },

  components: {
    TodaysDetails,
    TodaysTemperature,
    HourlyTemperatures,
    SevenDayForecast,
    CitySearch,
  },

  async created() {
    await this.refreshWeather()
  },
}
</script>
