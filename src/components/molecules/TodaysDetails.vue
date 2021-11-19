<template>
  <div class="columns">
    <div class="column is-narrow">
      <p class="has-text-grey-light">Tuesday</p>
      <div>
        <p class="title my-4">Clear sky</p>
        <p class="subtitle is-6 my-2">
          The high will be 75°F, and the low will be 55°F
        </p>
      </div>
    </div>
    <div class="column"></div>
    <div class="column is-narrow">
      <TodaysWindAndHumidity big />
    </div>
  </div>
</template>

<script>
import TodaysWindAndHumidity from "../atoms/TodaysWindAndHumidity.vue"
export default { components: { TodaysWindAndHumidity } }
</script>
