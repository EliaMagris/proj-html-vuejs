<template>
  <div id="app">
    <HeaderTop :propsNav="arrayNav" class="headerCont" />
    <MainTop :propsCards="propsForum"/>
    <FooterTop :propsSocial="PropSocials"/>
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
      propsForum: [
         {
          card: 'News & Community',
          fontAwesome: 'fa-solid fa-file-lines'
        },
        {
          card: 'Apple Forum',
          fontAwesome: 'fa-brands fa-apple'
        },
        {
          card: 'Microsoft Forum',
          fontAwesome: 'fa-brands fa-windows'
        },
        {
          card: 'Android Forum',
          fontAwesome: 'fa-brands fa-android'
        },
        {
          card: 'General Discussion',
          fontAwesome: 'fa-solid fa-mug-saucer'
        },
        {
          card: 'Apps & Software',
          fontAwesome: 'fa-solid fa-cubes'
        },
        {
          card: 'Gadgets & Stuff',
          fontAwesome: 'fa-solid fa-laptop'
        },
        {
          card: 'Tutorials & Guides',
          fontAwesome: 'fa-solid fa-wrench'
        },
      ],
      PropSocials: [
        {
          social: 'fa-brands fa-facebook-f',
          class: 'facebook'
        },
        {
          social: 'fa-brands fa-twitter',
          class: 'twitter'
        },
        {
          social: 'fa-brands fa-instagram',
          class: 'instagram'
        },
        {
          social: 'fa-brands fa-youtube',
          class: 'youtube'
        },
      ] 
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
  font-family: Lato;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
