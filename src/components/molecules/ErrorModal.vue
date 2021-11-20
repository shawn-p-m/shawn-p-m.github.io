<template>
  <div class="modal is-clipped" :class="isActive">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">
          <span class="icon-text">
            <span class="icon has-text-danger">
              <i class="mdi" :class="icon"></i>
            </span>
          </span>
        </p>
        <button class="delete" aria-label="close" @click="close"></button>
      </header>
      <section class="modal-card-body">
        <div class="column is-three-fifths is-offset-one-fifth">
          <div class="block is-size-5">{{ message }}</div>
        </div>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-primary" @click="close">Okay</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["update:show"],

  data() {
    return {
      isActive: false,
    }
  },
  props: {
    icon: {
      type: String,
      required: false,
    },

    message: {
      type: String,
      required: true,
    },

    show: {
      type: Boolean,
      required: true,
    },
  },

  watch: {
    show(newShow) {
      this.isActive = newShow ? " is-active" : ""
    },
  },

  methods: {
    close() {
      this.$emit("update:show", false)
    },
  },
}
</script>
