<template>
  <div class="columns">
    <div class="column is-narrow">
      <p class="has-text-grey-light">Tuesday</p>
      <div>
        <p class="title my-4">Clear sky</p>
        <p class="subtitle is-6 my-2">
          The high will be {{ highTemp }}°F, and the low will be {{ lowTemp }}°F
        </p>
      </div>
    </div>
    <div class="column"></div>
    <div class="column is-narrow">
      <TodaysWindAndHumidity big :windSpeed="windSpeed" :humidity="humidity" />
    </div>
  </div>
</template>

<script>
import TodaysWindAndHumidity from "../atoms/TodaysWindAndHumidity.vue"

export default {
  components: { TodaysWindAndHumidity },

  props: {
    windSpeed: {
      type: Number,
      required: true,
    },
    humidity: {
      type: Number,
      required: true,
    },
    lowTemp: {
      type: Number,
      required: true,
    },
    highTemp: {
      type: Number,
      required: true,
    },
  },
}
</script>
