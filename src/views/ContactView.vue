<template>
  <div class="contact OpacityUp">
    <div class="blurp">
      <h1>Contact</h1>
      <div class="line"></div>
      <p><fa :icon="['fas','envelope']"/>  email:</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;dirly@hitregstudios.com</p>
      <div class="line"></div>
      <p><fa :icon="['fab','twitter']"/>  twitter:</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://twitter.com/DirlyDev">@DirlyDev</a></p>
      <div class="line"></div>
      <p><fa :icon="['fab','twitch']"/>  twitch:</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.twitch.tv/dirlyd">DirlyD</a></p>
    </div>
  </div>
</template>

<script>
export default {
  mounted(){
    document.body.style.background = "#601811";
  }
}
</script>


<style scoped>
.contact{
  background-color: #f5c55b;
  background-image: url("/Dunes.png");
  background-position: 0 100%;
  background-size: contain;
  background-repeat: no-repeat;
  flex-direction: column;
  align-content: stretch;
  justify-content: space-between;
  color:#601811;
}

.line{
  border-color: #e96b54;
}

.blurp{
  align-self: flex-start;
}

@media (min-width: 1024px) {
  .blurp{
    margin-top: 10rem;
  }
  .contact {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 0px;
  } 
}
</style>
