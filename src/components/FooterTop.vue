<template>
  <div>
    <div class="techCommunity">
      <div class="forumCont">
        <h1>Hey! Join to our commuity</h1>
        <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate consequuntur ducimus accusantium ipsum! Laborum ratione qui assumenda aperiam obcaecati ea voluptate pariatur!</div>
        <button>SIGN UP!<font-awesome-icon class="fa-solid" icon="fa-solid fa-chevron-right" /></button>
      </div>
    </div>
    <div class="newsLetter">
      <h2>Subscribe to our newsletter</h2>
      <div class="inputText">
         <input placeholder="Insert your email*" type="text">
         <button>SEND</button>
      </div>
    </div>
    <div class="answerZone">
      <div class="answer">
         <ul>
          <li><h2>AVADA TECH FORUM</h2></li>
          <li></li>
         </ul>

         <ul>
          <li><h2>POPULAR TOPICS</h2></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
         </ul>

         <ul>
          <li><h2>RECENT TOPICS</h2></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
         </ul>

         <ul>
          <li><h2>LATEST REPLIES</h2></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
         </ul>
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
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  .forumCont{
    text-align: center;
    width: 40%;
    margin: auto;
    padding: 200px 0;
    color: white;
    h1{
      font-size: 4rem;
    }
    div{
      padding: 35px 0;
      line-height: 30px;
    }
     button {
        background-color: #27aabe;
        border: none;
        padding: 15px 35px;
        font-weight: bold;
        color: white;
     }
  }
}
.newsLetter{
  background-color: #f2f2f2;
  text-align: center;
  padding: 100px;
  font-size: 1.4rem;
  
  .inputText{
    display: flex;
    width: 45%;
    margin: auto;
    justify-content: space-between;
    padding-top: 50px;

    input{
      width: 66%;
      height: 50px;
      padding: 5px;
      border: none;
    }
    button{
      width: 30%;
      background-color: #1a1b1b;
        border: none;
        font-weight: bold;
        color: white;
    }
  }
}
.answerZone{
  .answer{
    width: 70%;
    margin: auto;
    display: flex;
  }
}
</style>
