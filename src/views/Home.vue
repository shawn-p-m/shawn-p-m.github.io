<template>
  <div>
    <NavBar />
    <Main />
  </div>
</template>

<script>
import NavBar from "@/components/organisms/NavBar.vue"
import Main from "../components/organisms/Main.vue"

export default {
  components: {
    NavBar,
    Main,
  },
}
</script>
