<script setup>
  import { Typed } from "@duskmoon/vue3-typed-js"
</script>

<template>
  <div class="home">
    <Typed :options="options">
      <h1>I make <span class="typing"></span></h1>
      <h1 ></h1>
    </Typed>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        strings: [
          "indie games",
          "experineces",
          "adventures",
          "bugs",
          "virtual realities",
          "memes",
          "multiplayer",
          "bullet hells",
          "shmups",
          "roguelites",
          "pixel art",
          "deck builders",
          "shooters",
        ],
        loop: true,
        typeSpeed: 30,
        delay: 10,
        backDelay: 2000,
      }
    }
  },

  mounted() {
    setInterval
  },
  methods: {
  },



};
</script>

<style scoped>
  .home{
      min-height: 100vh;
      display: flex;
      align-items: center;
  }
</style>

