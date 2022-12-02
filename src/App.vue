<template>
  <div id="app">
    <HeaderTop :propsNav="arrayNav" class="headerCont" />
    <MainTop />
    <FooterTop />
  </div>
</template>

<script>
import HeaderTop from './components/HeaderTop.vue';
import MainTop from './components/MainTop.vue';
import FooterTop from './components/FooterTop.vue';

export default {
  name: 'App',
  components: {
    HeaderTop,
    MainTop,
    FooterTop,
  },
  data() {
    return {
      arrayNav: [
        {
          home: 'home',
        },
        {
          home: 'Apple',
        },
        {
          home: 'Microsoft',
        },
        {
          home: 'Android',
        },
        {
          home: 'Forums',
        },
        {
          home: 'Contact us',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style: none;
}

#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  .headerCont {
    background-color: #27aabe;
  }
}
</style>
