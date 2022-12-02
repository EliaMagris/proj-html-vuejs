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
  }
}
</style>
