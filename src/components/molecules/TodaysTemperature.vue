<template>
  <div class="columns is-centered">
    <div class="column is-narrow">
      <p class="title is-1">71<span class="title">°F</span></p>
    </div>
    <div class="column is-narrow">
      <TodaysWindAndHumidity />
    </div>
  </div>
</template>

<script>
import TodaysWindAndHumidity from "../atoms/TodaysWindAndHumidity.vue"
export default { components: { TodaysWindAndHumidity } }
</script>
