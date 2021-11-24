<template>
  <div>
    <div v-if="geoLocationSuccessful">
      <div class="columns is-multiline">
        <div class="column is-narrow is-4">
          <TodaysTemperature
            class="pt-4 pb-4 px-4"
            :windSpeed="getTodaysWeather.windSpeed"
            :humidity="getTodaysWeather.humidity"
            :temp="getTodaysWeather.temp"
          />
        </div>
        <div
          class="
            column
            is-4
            pt-4
            pb-4
            has-text-centered
            is-flex is-align-items-center is-justify-content-center
          "
        >
          <span class="title is-capitalized">
            {{ getCity }}
          </span>
        </div>
        <div class="column is-narrow is-4">
          <CitySearch
            class="pt-4 pb-4 px-4"
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
      "getCity",
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
