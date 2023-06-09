<template>
  <div class="game OpacityUp" :style="backgroundStyle">
    <div class="subHeader"></div>
    <h1>This is games view</h1>
    <div class="subHeader"></div>
    <div class="subHeader"></div>
    <iframe src="https://store.steampowered.com/widget/{{widget}}/" frameborder="0" width="646" height="190"></iframe>
  </div>
</template>

<script>
  export default {
    props: {
      background: String,
      widget: String,
    },
    mounted(){
      console.log(this.background);
    },
    computed: {
      backgroundStyle() {
        return "background-image: url(" + this.getImgUrl(this.background) + ")";
      }
    },
    methods: {
      getImgUrl(name){
        return new URL("./dir/"+ name, import.meta.url).href
      },
      backBtn(){
        this.$route.name;
      }
    }
  }
</script>



<style scoped>
@media (min-width: 1024px) {
  .game {
    min-height: 100vh;
    display: flex;
    align-items: center;
    background-size: cover;
  }
}
</style>
