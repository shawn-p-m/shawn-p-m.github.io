<template>
  <div class="content">
    <p class="title is-5">Today's Hourly Temperatures</p>
    <div class="columns">
      <div v-for="index in 6" :key="index" class="column">
        <p class="has-text-grey-light">1pm</p>
        <p class="title is-4">71<span class="title is-5">°F</span></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
