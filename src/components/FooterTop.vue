<template>
  <div>
    <div class="techCommunity">
      <div class="forumCont">
        <h1>Hei! Joiun to our commuity</h1>
        <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate consequuntur ducimus accusantium ipsum! Laborum ratione qui assumenda aperiam obcaecati ea voluptate pariatur!</div>
        <button>GET AVADA NOW!<font-awesome-icon class="fa-solid" icon="fa-solid fa-chevron-right" /></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterTop',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.techCommunity{
  background-image: url(../assets/join_now_cta_bg.jpg);

  .forumCont{
    text-align: center;
    width: 40%;
    margin: auto;
    padding: 200px 0;
    color: white;
    margin-bottom: 50px;
    h1{
      font-size: 4rem;
    }
    div{
      padding: 35px 0;
    }
     button {
        background-color: #27aabe;
        border: none;
        padding: 10px 15px;
        font-weight: bold;
        color: white;
     }
  }
}
</style>
