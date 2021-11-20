<template>
  <div>
    <div v-if="geoLocationSuccessful">
      <div class="columns">
        <div class="column is-narrow">
          <TodaysTemperature
            class="px-6 pt-6 pb-4"
            :windSpeed="getTodaysWeather.windSpeed"
            :humidity="getTodaysWeather.humidity"
            :temp="getTodaysWeather.temp"
          />
        </div>
        <div class="column py-0"></div>
        <div class="column is-narrow">
          <CitySearch
            class="px-6 pt-6 pb-4"
            :today="getTodaysWeather.weekDayNameLong"
          />
        </div>
      </div>
      <div class="p-4">
        <HourlyTemperatures
          class="px-5 pb-5 pt-0"
          :hourlyForecasts="getHourlyForecasts"
        />
      </div>
      <SevenDayForecast
        class="has-background-white-ter"
        :dailyForecasts="getDailyForecasts"
      />
    </div>
    <ErrorModal
      v-model:show="showErrorModal"
      :message="errorMessage"
      icon="mdi-alert-circle"
    />
  </div>
</template>

<script>
import TodaysTemperature from "../molecules/TodaysTemperature.vue"
import HourlyTemperatures from "../molecules/HourlyTemperatures.vue"
import SevenDayForecast from "../molecules/SevenDayForecast.vue"
import CitySearch from "../molecules/CitySearch.vue"
import { mapActions, mapGetters } from "vuex"
import ErrorModal from "../molecules/ErrorModal.vue"

export default {
  data() {
    return {
      errorMessage: "",
      showErrorModal: false,
      geoLocationSuccessful: false,
    }
  },
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
    TodaysTemperature,
    HourlyTemperatures,
    SevenDayForecast,
    CitySearch,
    ErrorModal,
  },

  async created() {
    const success = await this.refreshWeather()
    if (!success) {
      this.errorMessage =
        "You can enable geolocation in your browser settings and refresh to continue"
      this.showErrorModal = true
    } else {
      this.geoLocationSuccessful = success
    }
  },
}
</script>
