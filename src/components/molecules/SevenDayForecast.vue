<template>
  <div class="pb-0 pt-4">
    <div class="px-6 pt-4">
      <p class="title is-5">7 Day Forecast</p>
      <div class="columns is-centered">
        <div
          v-for="(forecast, index) in dailyForecasts"
          :key="forecast.id"
          class="column is-flex is-justify-content-center"
          :class="index === selectedDayIndex ? 'has-background-white' : ''"
          @click="switchToSelectedDay(index)"
        >
          <div class="mb-4">
            <p class="has-text-grey-light is-size-5">
              {{ forecast.weekDayName }}
            </p>
            <p class="is-size-4 has-text-weight-semibold">
              {{ forecast.maxTemp }}<span class="title is-5">°F</span>
            </p>
            <p class="title is-6">
              {{ forecast.minTemp }}<span class="subtitle is-7">°F</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <TodaysDetails
      class="px-6 py-4 has-background-white"
      :windSpeed="selectedDay.windSpeed"
      :humidity="selectedDay.humidity"
      :lowTemp="selectedDay.minTemp"
      :highTemp="selectedDay.maxTemp"
      :weekDayName="selectedDay.weekDayNameLong"
      :weatherDescription="selectedDay.description"
    />
  </div>
</template>

<script>
import TodaysDetails from "../molecules/TodaysDetails.vue"

export default {
  components: {
    TodaysDetails,
  },
  computed: {
    selectedDay() {
      return this.dailyForecasts[this.selectedDayIndex]
    },
  },
  methods: {
    switchToSelectedDay(index) {
      this.selectedDayIndex = index
    },
  },
  props: {
    dailyForecasts: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectedDayIndex: 0,
    }
  },
}
</script>
