<template>
  <div class="pb-0 px-4 pt-4">
    <p class="title is-5">7 day forecast</p>
    <div class="columns is-centered">
      <div
        v-for="index in 7"
        :key="index"
        class="column is-justify-content-center"
        :class="index === selectedDay ? 'has-background-white' : ''"
      >
        <p class="has-text-grey-light is-size-5">Tue</p>
        <p class="is-size-4 has-text-weight-semibold">
          71<span class="title is-5">°F</span>
        </p>
        <p class="title is-6">55<span class="subtitle is-7">°F</span></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedDay: 3,
    }
  },
}
</script>
