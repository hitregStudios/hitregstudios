<script setup>
  import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
  import ScreenShot from '../components/ScreenShot.vue'
  import 'vue-lite-youtube-embed/style.css'
</script>

<template>
  <div class="backButton" @click="$router.go(-1)"> back </div>
  <div class="pressKit">
    <img :src="getImgUrl(titleImage)" class="illustration"/>
    <div class="line"></div>
    <h2>Description</h2>
    <p>{{description}}</p>
    <div class="line"></div>
    <h2>Features</h2>
    <p>{{features}}</p>
    <div class="line"></div>
    <h2>About the Developer</h2>
    <p>{{developer}}</p>
    <div class="line"></div>
    <h2>Video</h2>
    <div class="videos" v-for="(video, index) in videos" :key="index">
      <LiteYouTubeEmbed 
        :id="video.id" 
        :title="video.title"
      />
    </div>
    <div class="line"></div>
    <h2>Screen Shots</h2>
    <div class="screenshots" v-for="(image, index) in images" :key="index">
      <ScreenShot 
        :image="image.image" 
        :title="image.title"
      />
    </div>
    <div class="line"></div>
    <h2>Branding</h2>
    <div class="screenshots" v-for="(image, index) in images" :key="index"></div>
  </div>
</template>

<script>
  export default {
    props: {
      titleImage: String,
      description: String,
      history: String,
      features: String,
      developer: String,
      videos: Array,
      images: Array
    },
    mounted(){

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
<style>

.screenshots{
  width:200px;
}
@media (min-width: 1024px) {
  .pressKit {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: left;
  }
}
</style>
