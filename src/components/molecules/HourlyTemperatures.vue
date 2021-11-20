<template>
  <div class="content">
    <p class="title is-5">Today's Hourly Temperatures</p>
    <div class="columns">
      <div
        v-for="hour in hourlyForecasts"
        :key="hour.id"
        class="column is-flex is-justify-content-center"
      >
        <div>
          <p class="has-text-grey-light">{{ hour.hourTime }}</p>
          <p class="title is-4">
            {{ hour.temp }}<span class="title is-5">°F</span>
          </p>
        </div>
      </div>
      <div class="column"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hourlyForecasts: {
      type: Array,
      required: true,
    },
  },
}
</script>
