<template>
  <div class="about OpacityUp">
    <div class="blurp">
      <h1>About</h1>
      <div class="line"></div>
      <p>I'm Derek aka Dirly the developer of <a href="https://store.steampowered.com/app/2302150/Against_Great_Darkness/">Against Great Darkness</a>. I've been tinkering with game development for the last 7 years.  I've always had a passion for games and found myself making prototype after prototype. I have always dreamed about releasing one. Hitreg Studios is a company I founded to pursue that dream. I wanted to show my kids that no matter who you are or what age you are it is not to late to follow them!</p>
    </div>
  </div>
</template>
<script>
export default {
  mounted(){
    document.body.style.background = "#0d1927";
  }
}
</script>
<style scoped>
.about{
  background-color: #116399;
  background-image: url("src/assets/About.png");
  background-position: 0 100%;
  background-size: contain;
  background-repeat: no-repeat;
  flex-direction: column;
  align-content: stretch;
  justify-content: space-between;
  color:#fff;
}

.line{
  border-color: #ffffff;
}

.blurp{
  align-self: flex-start;
}

@media (min-width: 1024px) {
  .blurp{
    margin-top: 10rem;
  }
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 0px;
  }
}
</style>
