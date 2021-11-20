<template>
  <p :class="classes">
    Wind: {{ windSpeed }} mph<br />
    Humidity: {{ humidity }}%
  </p>
</template>

<script>
export default {
  props: {
    big: {
      type: Boolean,
      default: false,
    },
    humidity: {
      type: Number,
      required: true,
    },
    windSpeed: {
      type: Number,
      required: true,
    },
  },
  computed: {
    classes() {
      return this.big
        ? "has-text-grey subtitle is-5"
        : "has-text-grey-light subtitle is-6"
    },
  },
}
</script>
