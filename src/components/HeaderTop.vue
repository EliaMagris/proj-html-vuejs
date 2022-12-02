<template>
  <div class="container">
    <nav class="navBar">
      <div><img src="../assets/logo.png" alt="" /></div>
      <div class="nav-button">
        <NavBar v-for="(element, index) in propsNav" :key="index" :secPropsNav="element" />
        <button class="">Join us</button>
        <div><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></div>
      </div>
    </nav>
    <div class="techForum">

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
  .navBar {
    width: 70%;
    margin: auto;
    display: flex;
    align-items: center;
    color: white;
    justify-content: space-between;
    padding: 5px;

    .nav-button {
      display: flex;
      align-items: center;

      button {
        margin: 0 15px;
        padding: 8px 15px;
        background-color: #1a1b1b;
        color: white;
      }

      div {
        padding: 0 15px;
      }
    }
  }
    
  .techForum {
    background-image: url(../assets/home_slider_bg.jpg);
  }
}
</style>
