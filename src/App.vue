<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import { Typed } from "@duskmoon/vue3-typed-js"
</script>

<template>
  <header>
    <img alt="hitregLogo" class="logo" src="@/assets/logo.svg"/>
    <Typed id="typed" :options="options">
      <h1>We make <span class="typing"></span></h1>
    </Typed>
    <div class="wrapper">
      <nav>
        <RouterLink to="/games/AgainstGreatDarkness">Games</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/Contact">Contact</RouterLink>
      </nav>
    </div>  
  </header>
  <div class="display">
      <RouterView />
  </div>
  <footer>
    <p><fa :icon="['fab', 'discord']" /></p>
  </footer>
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
          "bullet hells",
          "shmups",
          "roguelites",
          "pixel art",
          "deck builders",
          "shooters"
        ],
        loop: true,
        typeSpeed: 30,
        delay: 10,
        backDelay: 2000,
      }
    }
  },
};
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  display: flex;
  place-items: center;
  padding-right: calc(var(--section-gap) / 2);
  padding-left: calc(var(--section-gap) / 2);
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1rem;
}

.display{
  flex-grow: 1;
  flex-basis: auto;
  align-self: stretch;
  overflow-y: auto;
  overflow-x: hidden;
  margin-right: -2rem;
  margin-left: -2rem;
  margin-bottom: -2rem;
}

.display > *{
  width: 100%;
  height: 100%;
  padding: 2rem;
  background-color: white;
}

footer{
  position:fixed;
  bottom: 0;
  height:50px;
  width:50px;
  margin: 0px;
  margin-left: -2rem;
  border-top-right-radius: 5px;
  font-size:30px;
  text-align: center;
  color:black;
  background-color: white;
}

.logo {
  display: block;
  margin: 0 auto 1rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 1rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

#typed{
  text-align: left;
  width: 100%;
  display:none;
}


@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    min-width: 670px;
  }

  .display{
    margin-left: 0;
    background-color: white;
    margin-bottom: 0px;
  }

  #typed{
    text-align: left;
    width: 100%;
    display:inline;
    margin-top: 10px;
    padding-left: 214px;
  }

  .logo {
    margin: 0 0rem 0 0;
  }

  header .wrapper {
     width: 100%;
  }

  nav {
    text-align: center;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 10rem;
  }
}

</style>
