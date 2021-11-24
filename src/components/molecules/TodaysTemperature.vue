<template>
  <div class="columns">
    <div class="column is-narrow">
      <p class="title is-1">{{ temp }}<span class="title">°F</span></p>
    </div>
    <div class="column is-narrow">
      <TodaysWindAndHumidity :windSpeed="windSpeed" :humidity="humidity" />
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
    temp: {
      type: Number,
      required: true,
    },
  },
}
</script>
