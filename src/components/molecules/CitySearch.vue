<template>
  <div>
    <div class="columns">
      <div class="field has-addons column">
        <div class="control" style="width: 100%">
          <input class="input" type="text" placeholder="Search for a city" />
        </div>
        <div class="control">
          <a class="button is-info"> Search </a>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column"></div>
      <div class="column is-narrow">
        <p class="has-text-right title is-5">
          {{ today }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    today: {
      type: String,
      required: true,
    },
  },
}
</script>
