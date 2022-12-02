<template>
  <div>
    <div class="container">
      <div class="title-line">
        <h4>phasellus eget metus</h4>
        <h1>All the latest news</h1>
        <div class="line-middle"></div>
      </div>
      <!-- CARD 1 -->
      <div class="MainImageSec">
        <div class="card">
          <img src="../assets/post_feat_img_25-320x202.jpg" />
          <div class="card-body">
            <h5 class="card-title">Lorem ipsum dolor sit amet consectetur</h5>
            <div class="card-text">
              {{ moment(new Date()).format('MMMM Do YYYY') }} | <span style="color: black">2 comments</span>
            </div>
            <div class="secthText">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus laudantium, maxime quisquam fugit
              magnam eos, at dolor
            </div>
          </div>
        </div>
        <!-- CARD 2 -->
        <div class="card">
          <img src="../assets/post_feat_img_24-320x202.jpg" />
          <div class="card-body">
            <h5 class="card-title">Lorem ipsum dolor sit amet consectetur</h5>
            <div class="card-text">{{ moment(new Date()).format('MMMM Do YYYY') }} | <span>Comments Off</span></div>
            <div class="secthText">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus laudantium, maxime quisquam fugit
              magnam eos, at dolor
            </div>
          </div>
        </div>
        <!-- CARD 3 -->
        <div class="card">
          <img src="../assets/post_feat_img_23-320x202.jpg" />
          <div class="card-body">
            <h5 class="card-title">Lorem ipsum dolor sit amet consectetur</h5>
            <div class="card-text">{{ moment(new Date()).format('MMMM Do YYYY') }} | <span>Comments Off</span></div>
            <div class="secthText">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus laudantium, maxime quisquam fugit
              magnam eos, at dolor
            </div>
          </div>
        </div>
      </div>
      <div class="imageBigMain">
        <div class="imageBigText">
          <h4>featured article</h4>
          <h1>Cras malasuada et orci eget pharetra</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda enim tempora autem libero aspernatur,
            incidunt qui aliquid tenetur iusto voluptatem eum quo ulla
          </p>
          <button>READ MORE! <font-awesome-icon class="fa-solid" icon="fa-solid fa-chevron-right" /></button>
        </div>
      </div>
    </div>

    <MainImage />
  </div>
</template>

<script>
import MainImage from './MainImage.vue';
export default {
  name: 'MainTop',
  components: {
    MainImage,
  },
  data() {
    return {
      moment: require('moment'),
    };
  },
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  text-align: center;

  .title-line {
    padding: 80px 0;

    h1 {
      padding: 20px 0;
      font-size: 2.2rem;
    }
    .line-middle {
      height: 1px;
      border-bottom: 1px solid #fc8c5e;
      width: 5%;
      margin: auto;
    }
  }

  .MainImageSec {
    width: 70%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    .card {
      width: calc(100% / 3);
      padding: 10px;
      text-align: left;
      color: black;

      .card-title {
        font-weight: bold;
        padding-top: 5px;
        font-size: 0.9rem;
      }

      img {
        width: 100%;
      }
      .card-text {
        font-size: 0.8rem;
        color: #969799;
        padding: 5px 0;
      }
      .secthText {
        padding: 5px 0;
        font-size: 0.8rem;
        color: #969799;
        line-height: 20px;
      }
    }
  }

  .imageBigMain {
    width: 70%;
    margin: auto;
    background-image: url(../assets/featured_article_1_bg.jpg);
    background-size: cover;
    background-repeat: no-repeat;

    .imageBigText {
      padding: 200px 50px 50px 50px;
      color: white;
      text-align: left;

      h1 {
        padding: 20px 0;
      }
      p {
        padding: 0 0 30px 0;
      }
      button {
        background-color: #000000;
        border: none;
        padding: 15px 20px;
        font-weight: bold;
        color: white;
      }
    }
  }
}
</style>
