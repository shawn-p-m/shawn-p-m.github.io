<template>
  <p :class="classes">
    Wind: 11 mph<br />
    Humidity: 48%
  </p>
</template>

<script>
export default {
  props: {
    big: {
      type: Boolean,
      default: false,
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
