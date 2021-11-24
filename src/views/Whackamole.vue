<template>
  <div class="container p-6">
    <div class="columns">
      <button class="mb-4" @click="togglePlay" v-if="!isPlaying">Start</button>
      <button class="mb-4" @click="togglePlay" v-else>Stop</button>
      <div class="ml-4">Score: {{ score }}</div>
    </div>
    <div class="columns is-multiline">
      <div
        v-for="(whackahole, index) in whackaholes"
        class="column is-3"
        :class="whackahole.whacked ? 'has-background-primary' : ''"
        :key="index"
        @click="handleClick(whackahole)"
      >
        {{ index }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      intervalId: null,
      isPlaying: false,
      lastWhackahole: null,
      score: 0,
      whackaholes: [
        { whacked: false },
        { whacked: false },
        { whacked: false },
        { whacked: false },
        { whacked: false },
        { whacked: false },
        { whacked: false },
        { whacked: false },
      ],
    }
  },

  methods: {
    addScore() {
      this.score += 10
    },

    handleClick(whackahole) {
      if (whackahole.whacked) {
        this.addScore()
      }
    },

    highlight() {
      if (this.lastWhackahole !== null) {
        this.whackaholes[this.lastWhackahole].whacked = false
      }

      const whackaholeIndex = Math.floor(Math.random() * 8)
      this.whackaholes[whackaholeIndex].whacked = true
      this.lastWhackahole = whackaholeIndex
    },

    start() {
      this.intervalId = setInterval(() => {
        this.highlight()
      }, 2500)
    },

    stop() {
      clearInterval(this.intervalId)
    },

    togglePlay() {
      if (this.isPlaying) {
        this.stop()
        this.isPlaying = false
      } else {
        this.start()
        this.isPlaying = true
      }
    },
  },
}
</script>
