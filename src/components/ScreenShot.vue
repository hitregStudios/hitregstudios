
<template>
  <div class="ScreenShot">
    <img :src=getImgUrl(image)>
    <button @click="downloadImage">Download</button>
  </div>
</template>
<script>
  export default {
    props: {
      title: String,
      image: String
    },
    mounted(){

    },
    methods: {
      getImgUrl(name){
        return new URL("./dir/"+ name, import.meta.url).href
      },
      async downloadImage() {
          const blob = await (await fetch(getImgUrl(getImgUrl))).blob();
          const url = URL.createObjectURL(blob);
          var lastSlashIndex = this.image.lastIndexOf('/');
          Object.assign(document.createElement('a'), { href: url, download: targetString.substring(lastSlashIndex + 1)})
              .click();
          URL.revokeObjectURL(url);
      }
    }
  }
</script>

<style scoped>
.ScreenShot{
  width:100%;
  height:100%;
}
</style>
