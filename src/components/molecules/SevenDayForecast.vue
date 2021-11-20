<template>
  <div class="pb-0 px-4 pt-4">
    <p class="title is-5">7 Day Forecast</p>
    <div class="columns is-centered">
      <div
        v-for="(forecast, index) in dailyForecasts"
        :key="forecast.id"
        class="column is-flex is-justify-content-center"
        :class="index === selectedDay ? 'has-background-white' : ''"
      >
        <div>
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
</template>

<script>
export default {
  props: {
    dailyForecasts: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectedDay: 3,
    }
  },
}
</script>
