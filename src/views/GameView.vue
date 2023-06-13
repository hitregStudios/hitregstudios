<script setup>
  import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
  import SteamWidget from '../components/SteamWidget.vue'
  import 'vue-lite-youtube-embed/style.css'
</script>

<template>
  <div class="game OpacityUp" :style="backgroundStyle(background)">
    <div class="innerContainer">
      <!-- <div class="subHeader" :style="headerStyle"></div> -->
      <div class="innerRow">
        <div>
          <LiteYouTubeEmbed 
          :id="video.id" 
          :title="video.title"
          />
        </div>
        <div class="descriptionText" :style="{ 'color' : textColor, 'backgroundColor' : boxColor}">
          <h1>{{title}}</h1>
          <p>{{description}}</p>
        </div>
      </div>
      <silent-box class="gallery" :gallery="images"></silent-box>
      <SteamWidget :steamPath="steamPath" />
    </div>  
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
      description: String,
      background: String,
      steamWidget: String,
      textColor: String,
      boxColor: String,
      video: Object,
      images: Array,
    },
    mounted(){
      document.body.style.background = "#010101";
    },
    computed: {
      steamPath() {
        return "https://store.steampowered.com/widget/" + this.steamWidget + "/";
      }
    },
    methods: {
      backgroundStyle(file) {
        return "background-image: url(" + file + ")";
      },
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

.innerRow{
  align-items: stretch;
  align-content: stretch;
  width:100%;
}

.descriptionText{
  padding:30px;
}

.innerRow > *{
  flex-grow: 1;
}
.subHeader{
  width:100%;
  height:16rem;
  background-size: contain;
  background-position: 0;
  background-repeat: no-repeat;
}

.steamFrame{
  flex:none;
  margin-bottom:40px;
}

.innerContainer{
  display:flex;
  flex-direction: column;
  width:100%;
  align-items: center;
}

.game{
  image-rendering: pixelated;
  background-size: cover;
  background-position: center;
  overflow-y: auto;
  overflow-x: hidden;
}

@media (min-width: 1024px) {

  .innerContainer{
    padding:131px;
    height:100%;

    justify-content: center;
  }
  .innerRow{
    display:flex;
    flex-direction: row;
  }

  .descriptionText{
    max-width: 23vw;
  }
  .subHeader{
    width:100%;
    height:16rem;
    background-size: cover;
    background-position: 0;
    background-repeat: no-repeat;
  }
  .game {
    min-height: 100vh;
    align-items: center;
    background-size: cover;
    background-position: center;
    padding: 0px;
  }
}
</style>
