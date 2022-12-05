<template>
  <div class="container">
    <div><font-awesome-icon :icon="secSocialFooter.social" /></div>
  </div>
</template>

<script>
export default {
  name: 'SocialFooter',
  props: {
    secSocialFooter: Object
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .container{
  }
</style>