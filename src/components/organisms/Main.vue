<template>
  <div class="container p-4">
    <div class="columns">
      <div class="column is-narrow">
        <TodaysTemperature class="p-5" />
      </div>
      <div class="column py-0"></div>
      <div class="column is-narrow">
        <CitySearch class="p-5" />
      </div>
    </div>
    <div class="p-4">
      <HourlyTemperatures class="p-4" />
    </div>
    <div class="p-4">
      <SevenDayTemperatures class="has-background-white-ter" />
      <TodaysDetails class="p-4 m-4" />
    </div>
  </div>
</template>

<script>
import TodaysDetails from "../molecules/TodaysDetails.vue"
import TodaysTemperature from "../molecules/TodaysTemperature.vue"
import HourlyTemperatures from "../molecules/HourlyTemperatures.vue"
import SevenDayTemperatures from "../molecules/SevenDayForecast.vue"
import CitySearch from "../molecules/CitySearch.vue"
export default {
  components: {
    TodaysDetails,
    TodaysTemperature,
    HourlyTemperatures,
    SevenDayTemperatures,
    CitySearch,
  },
}
</script>
