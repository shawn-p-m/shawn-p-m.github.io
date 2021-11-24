<template>
  <div>
    <div class="columns">
      <div class="field has-addons column">
        <div class="control" style="width: 100%">
          <input
            v-model="city"
            class="input"
            type="text"
            placeholder="Search for a city"
            @keyup.enter="submit"
          />
        </div>
        <div class="control">
          <a class="button is-primary" @click="submit"> Search </a>
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
    <ErrorModal
      v-model:show="showErrorModal"
      :message="errorMessage"
      icon="mdi-alert-circle"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex"
import ErrorModal from "@/components/molecules/ErrorModal.vue"
import { throttle } from "lodash"

export default {
  components: {
    ErrorModal,
  },
  data() {
    return {
      city: "",
      errorMessage: "",
      showErrorModal: false,
    }
  },

  methods: {
    ...mapActions(["searchForCityWeather"]),
    submit: throttle(async function () {
      const success = await this.searchForCityWeather(this.city)
      if (success) {
        return
      } else {
        this.errorMessage = "City not found, please try again."
        this.showErrorModal = true
      }
    }, 1000),
  },

  props: {
    today: {
      type: String,
      required: true,
    },
  },
}
</script>
