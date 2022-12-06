<template>
  <div class="container">
    <div class="fixed-nav">
      <nav class="navBar">
        <div><img src="../assets/logo.png" alt="" /></div>
        <div class="nav-button">
          <NavBar v-for="(element, index) in propsNav" :key="index" :secPropsNav="element" />
          <button class="">Join us</button>
          <div><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></div>
        </div>
        <div class="triangle">
          <font-awesome-icon icon="fa-solid fa-play" />
        </div>
      </nav>
    </div>

    <div class="techForum">
      <div class="forumCont">
        <h1>Tech Forum!</h1>
        <div>Discussion all the latest thecnologies news and trend</div>
        <button>GET AVADA NOW!<font-awesome-icon class="fa-solid" icon="fa-solid fa-chevron-right" /></button>
      </div>
      <div class="headerDescription">
        <div class="descriptionsH">
          <h2>avara forum is the place to be</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum id eaque facilis officia in fugit eum
            voluptatem perferendis assumenda necessitatibus? Autem repellendus cumque dolorem molestias in excepturi
            officia alias inventore.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from './NavBar.vue';

export default {
  name: 'HeaderTop',
  components: {
    NavBar,
  },
  props: {
    propsNav: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  .fixed-nav {
    position: fixed;
    width: 100%;
    background-color: #27aabe;
    z-index: 2;
    .navBar {
      width: 70%;
      margin: auto;
      display: flex;
      align-items: center;
      color: white;
      justify-content: space-between;
      padding: 5px;
      position: relative;
      .nav-button {
        display: flex;
        align-items: center;

        button {
          margin: 0 15px;
          padding: 8px 15px;
          background-color: #1a1b1b;
          color: white;
          border: none;
          cursor: pointer;
        }
        button:hover {
          opacity: 0.5;
        }
        div {
          padding: 0 15px;
        }
      }
      .triangle {
        position: absolute;
        bottom: -25px;
        rotate: 90deg;
        color: #27aabe;
        font-size: 3rem;
        left: 500px;
      }
    }
  }

  //  END NAV-BAR START TECH FORUM

  .techForum {
    background-image: url(../assets/home_slider_bg.jpg);
    background-size: auto;
    background-repeat: no-repeat;

    .forumCont {
      width: 70%;
      margin: auto;
      padding: 300px 0;
      color: white;
      h1 {
        font-size: 8rem;
      }
      div {
        font-size: 1.5rem;
        padding: 30px 0;
      }
      button {
        background-color: #27aabe;
        border: none;
        padding: 10px 15px;
        font-weight: bold;
        color: white;
        cursor: pointer;

        .fa-solid {
          padding-left: 10px;
        }
      }
      button:hover {
        background-color: #088396;
      }
    }
  }

  .headerDescription {
    background-color: #eee3d6;
    padding: 20px;

    .descriptionsH {
      width: 40%;
      margin: auto;
      text-align: center;
      padding: 30px 0;

      h2 {
        padding: 20px 0;
      }
      p {
        line-height: 20px;
        width: 80%;
        margin: auto;
      }
    }
  }
}
</style>
