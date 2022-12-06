<template>
  <div class="container">

      <li>{{ secPropsNav.home }}</li>

  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    secPropsNav: Object,
  },
};
</script>
 .container{
  display
 }
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container{
  li{
    padding: 0 15px;
    cursor: pointer;
  }
  li::after {
      content: "";
      display: block;
      margin: auto;
      height: 2px;
      width: 5px;
      transition: all 0.4s;
    }

    li:hover::after {
      width: 100%;
      background: #fc8c5e;
    }
}
</style>
