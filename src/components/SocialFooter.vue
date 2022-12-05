<template>
  <div class="container">
    <div :class="secSocialFooter.class"><font-awesome-icon  :icon="secSocialFooter.social" /></div>
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
    .facebook{
        background-color: #0c1f86;
            width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
       }

     .twitter{
        background-color: #6fc2d2;
            width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
     }
     .instagram{
        background-color: #516faa;
            width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
     }
     .youtube{
        background-color: #951a0c;
            width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
     }
  }
</style>