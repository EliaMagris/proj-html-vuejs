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
            incidunt qui aliquid tenetur iusto voluptatem eum quo ulla incidunt qui aliquid tenetur iusto voluptatem eum
            quo ulla
          </p>
          <button>READ MORE! <font-awesome-icon class="fa-solid" icon="fa-solid fa-chevron-right" /></button>
        </div>
      </div>
      <!-- CARD 1 -->
      <div class="MainImageSec">
        <div class="card">
          <img src="../assets/post_feat_img_22-320x202.jpg" />
          <div class="card-body">
            <h5 class="card-title">Lorem ipsum dolor sit amet consectetur</h5>
            <div class="card-text">{{ moment(new Date()).format('MMMM Do YYYY') }} | <span>Comments Off</span></div>
            <div class="secthText">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus laudantium, maxime quisquam fugit
              magnam eos, at dolor
            </div>
          </div>
        </div>
        <!-- CARD 2 -->
        <div class="card">
          <img src="../assets/post_feat_img_21-320x202.jpg" />
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
          <img src="../assets/post_feat_img_20-320x202.jpg" />
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

      <!-- IMAGE FLEX BOTTOM -->

      <div class="image-big-bottom-Flex">
        <div class="image-big-bottom">
          <h4>featured article</h4>
          <h1>Cras malasuada et orci eget pharetra eimet Cras malasuada</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda enim tempora autem libero aspernatur,
            incidunt qui aliquid tenetur iusto voluptatem eum quo ulla
          </p>
          <button class="black-button">
            READ MORE! <font-awesome-icon class="fa-solid" icon="fa-solid fa-chevron-right" />
          </button>
        </div>
        <div class="image-little-bottom">
          <div class="title-line-no">
            <h1>Tutorial & Guides</h1>
            <div class="line-middle"></div>
          </div>
          <!-- CARD 1 -->

          <div class="cardSpec">
            <img src="../assets/post_feat_img_23-147x118.jpg" />
            <div class="card-body">
              <h4 class="card-title">Lorem ipsum dolor sit amet consectetur</h4>
              <div class="card-text">{{ moment(new Date()).format('MMMM Do YYYY') }} | <span>Comments Off</span></div>
            </div>
          </div>
          <!-- CARD 2 -->
          <div class="cardSpec">
            <img src="../assets/post_feat_img_22-147x118.jpg" />
            <div class="card-body">
              <h4 class="card-title">Lorem ipsum dolor sit amet consectetur</h4>
              <div class="card-text">{{ moment(new Date()).format('MMMM Do YYYY') }} | <span>Comments Off</span></div>
            </div>
          </div>
          <!-- CARD 3 -->
          <div class="cardSpec">
            <img src="../assets/post_feat_img_20-147x118.jpg" />
            <div class="card-body">
              <h4 class="card-title">Lorem ipsum dolor sit amet consectetur</h4>
              <div class="card-text">{{ moment(new Date()).format('MMMM Do YYYY') }} | <span>Comments Off</span></div>
            </div>
          </div>
        </div>
      </div>
      <!-- BLACK LINE -->
      <div class="black-Line">
        <h3>READ OUR BLOG <font-awesome-icon icon="fa-solid fa-arrow-right" /></h3>
      </div>
      <!-- FORUM CARD -->
      <div class="ForumCard">
        <div class="imageBigTextTH">
          <h4>Phasellus egest most</h4>
          <h1>Forum Section</h1>
          <div class="line-middle"></div>
        </div>
        <div class="Cards">
          <div class="containerCard">
            <MainCards v-for="(element, index) in propsCards" :key="index" :secPropsCards="element" />
          </div>
        </div>
      </div>
      <!-- BLACK LINE -->
      <div class="black-Line">
        <h3>READ OUR BLOG <font-awesome-icon icon="fa-solid fa-arrow-right" /></h3>
      </div>
    </div>
  </div>
</template>

<script>
import MainCards from './MainCards.vue';
export default {
  name: 'MainTop',
  components: {
    MainCards,
  },
  data() {
    return {
      moment: require('moment'),
    };
  },
  props: {
    propsCards: Array,
  },
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
      padding: 200px 50px 100px 50px;
      color: white;
      text-align: left;
      margin: 50px 0;

      h1 {
        padding: 20px 0;
      }
      p {
        padding: 0 0 30px 0;
        line-height: 30px;
      }
      button {
        background-color: #1a1b1b;
        border: none;
        padding: 15px 20px;
        font-weight: bold;
        color: white;
      }
      button:hover {
          opacity: 0.8;
        }
    }
  }

  .image-big-bottom-Flex {
    width: 70%;
    margin: auto;
    display: flex;
    margin-top: 50px;
    margin-bottom: 50px;

    .image-big-bottom {
      background-image: url(../assets/featured_article_2_bg.jpg);
      background-size: cover;
      background-repeat: no-repeat;
      width: 65%;
      padding: 150px 50px 30px 50px;
      color: white;
      text-align: left;

      h1 {
        padding: 20px 0;
      }
      p {
        padding: 0 0 30px 0;
        line-height: 30px;
      }
      button {
        background-color: #1a1b1b;
        border: none;
        padding: 15px 20px;
        font-weight: bold;
        color: white;
      }
      button:hover {
          opacity: 0.6;
        }
    }
    .image-little-bottom {
      width: 35%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 10px;
      flex-wrap: wrap;
      .title-line-no {
        padding: 10px;

        h1 {
          text-align: left;
        }

        .line-middle {
          height: 1px;
          border-bottom: 1px solid #fc8c5e;
          width: 40%;
          padding: 10px;
        }
      }
      .cardSpec {
        display: flex;
        text-align: left;
        padding: 10px;

        .card-text {
          font-size: 0.8rem;
          padding: 15px 0;
        }
      }
    }
  }

  .black-Line {
    background-color: #1a1b1b;
    color: white;
    h3 {
      padding: 50px 0;
    }
  }
  .imageBigTextTH {
    padding: 30px 0;
    h1 {
      padding: 15px 0;
      font-size: 3rem;
      color: #1a1b1b;
    }
  }
  .line-middle {
    height: 1px;
    margin: auto;
    border-bottom: 1px solid #fc8c5e;
    width: 10%;
    padding: 10px;
  }
  .ForumCard {
    background-color: #f2f2f2;

    .containerCard {
      width: 70%;
      margin: auto;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      padding-bottom: 50px;
    }
  }
}
</style>