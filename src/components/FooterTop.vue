<template>
  <div>
    <div class="techCommunity">
      <div class="forumCont">
        <h1>Hey! Join to our commuity</h1>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate consequuntur ducimus accusantium ipsum!
          Laborum ratione qui assumenda aperiam obcaecati ea voluptate pariatur!
        </div>
        <button>SIGN UP!<font-awesome-icon class="fa-solid" icon="fa-solid fa-chevron-right" /></button>
      </div>
    </div>
    <div class="newsLetter">
      <h2>Subscribe to our newsletter</h2>
      <div class="inputText">
        <input placeholder="Insert your email*" type="text" />
        <button>SEND</button>
      </div>
    </div>
    <div class="answerZone">
      <div class="answer">
        <ul>
          <li><h2>AVADA TECH FORUM</h2></li>
          <li class="light">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero nihil voluptatem ipsum libero officia
            nesciunt magnam sapiente, consequatur blanditiis. Deserunt harum autem a iste dolor quia in mollitia officia
            voluptate!
          </li>
        </ul>

        <ul>
          <li><h2>POPULAR TOPICS</h2></li>
          <li class="bottom">
            <font-awesome-icon class="icon" icon="fa-solid fa-chevron-right" />sit amet consectetur adipisicing elit.
            Vero nihil voluptatem ipsum libero officia nesciunt
          </li>
          <li class="bottom">
            <font-awesome-icon class="icon" icon="fa-solid fa-chevron-right" />sit amet. Vero nihil voluptatem ipsum
            libero officia nesciunt magnam sapiente
          </li>
          <li class="bottom">
            <font-awesome-icon class="icon" icon="fa-solid fa-chevron-right" />sit amet Vero nihil voluptatem ipsum
            libero officia nesciunt magnam sapiente
          </li>
          <li class="bottom">
            <font-awesome-icon class="icon" icon="fa-solid fa-chevron-right" />sit amet consectetur adipisicing elit.
            Vero nihil voluptatem nesciunt magnam sapiente
          </li>
        </ul>

        <ul>
          <li><h2>RECENT TOPICS</h2></li>
          <li class="bottom">
            <font-awesome-icon class="icon" icon="fa-solid fa-chevron-right" />sit amet consectetur elit. Vero nihil
            voluptatem ipsum libero officia nesciunt magnam sapiente
          </li>
          <li class="bottom">
            <font-awesome-icon class="icon" icon="fa-solid fa-chevron-right" />sit amet consectetur adipisicing elit.
            Vero ipsum libero officia
          </li>
          <li class="bottom">
            <font-awesome-icon class="icon" icon="fa-solid fa-chevron-right" />sit amet consectetur Vero nihil
            voluptatem ipsum libero officia
          </li>
          <li class="bottom">
            <font-awesome-icon class="icon" icon="fa-solid fa-chevron-right" />sit amet consectetur. Vero nihil
            voluptatem ipsum libero officia nesciunt magnam sapiente
          </li>
        </ul>

        <ul>
          <li><h2>LATEST REPLIES</h2></li>
          <li class="bottom">
            <font-awesome-icon class="icon" icon="fa-solid fa-chevron-right" />sit amet elit. Vero nihil voluptatem
            ipsum libero officia sapiente
          </li>
          <li class="bottom">
            <font-awesome-icon class="icon" icon="fa-solid fa-chevron-right" />sit amet elit. oluptatem ipsum libero
            officia nesciunt magnam sapiente
          </li>
          <li class="bottom">
            <font-awesome-icon class="icon" icon="fa-solid fa-chevron-right" />sit amet consectetur a ipsum libero
            officia nesciunt magnam sapiente
          </li>
          <li class="bottom">
            <font-awesome-icon class="icon" icon="fa-solid fa-chevron-right" />sit amet consectetur adipisicing elit.
          </li>
        </ul>
      </div>
    </div>
    <div class="socialIcon">
      <p>© Copyright 2012- 2022 | Avada Theme by <span style="color: black">Theme Fusion</span> | All Right Reserved | Powered by <span style="color: black">WordPress</span>
      </p>
      <div class="socialFlex"><SocialFooter class="icon" v-for="(element, index) in propsSocial" :key="index" :secSocialFooter="element"/></div> 
      <div class="arrowUp">
           <font-awesome-icon icon="fa-solid fa-chevron-up" />
        </div>
    </div>
    
  </div>
</template>

<script>

import SocialFooter from "./SocialFooter";

export default {
  name: 'FooterTop',
  components:{
   SocialFooter
  },
  props: {
    propsSocial: Array
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.techCommunity {
  background-image: url(../assets/join_now_cta_bg.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  .forumCont {
    text-align: center;
    width: 40%;
    margin: auto;
    padding: 200px 0;
    color: white;
    h1 {
      font-size: 4rem;
    }
    div {
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
    button:hover {
          background-color: #088396;
        }
  }
}
.newsLetter {
  background-color: #f2f2f2;
  text-align: center;
  padding: 100px;
  font-size: 1.4rem;

  .inputText {
    display: flex;
    width: 45%;
    margin: auto;
    justify-content: space-between;
    padding-top: 50px;

    input {
      width: 66%;
      height: 50px;
      padding: 5px;
      border: none;
    }
    button {
      width: 30%;
      background-color: #1a1b1b;
      border: none;
      font-weight: bold;
      color: white;
    }
    button:hover {
          opacity: 0.8;
        }
  }
}
.answerZone {
  border-bottom: 1px solid lightgray;
  padding-bottom: 50px;
  .answer {
    width: 70%;
    margin: auto;
    display: flex;
    justify-content: space-around;
    .bottom {
      border-bottom: 1px solid lightgray;
    }

    ul {
      width: calc(100% / 4);
      padding: 10px;
      line-height: 25px;
      .light {
        color: rgb(141, 140, 140);
      }
      li {
        padding: 15px 0;
        font-size: 0.8rem;

        h2 {
          font-weight: bold;
        }

        .icon {
          padding-right: 10px;
        }
      }
    }
  }
}
.socialIcon{
  display: flex;
    width: 70%;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0;
    position: relative;
    .socialFlex{
      display: flex;
      width: 20%;
      
      .icon{
        padding: 10px;
        color: white;
      }
    }
  p{
    color: #969799;
    font-size: 0.8rem;
  }
  .arrowUp{
  background-color: #62676c;
  color: white;
  position:  absolute;
  bottom: 0px;
  right: -150px;
  height: 40px;
  width: 45px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius:5px 5px 0px 0px;
}
}


</style>
