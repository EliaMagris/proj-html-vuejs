<template>
  <div class="card-body">
    <div class="card-title">
      <div class="containerIcon"><font-awesome-icon class="icon" :icon="secPropsCards.fontAwesome" /></div>
      <h2>{{ secPropsCards.card }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainCards',
  props: {
    secPropsCards: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card-body {
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 2px solid #4562b0;
  margin: 10px 10px;
  background-color: white;

  .icon {
    background-color: #fc8c5e;
    border-radius: 50%;
    padding: 20px;
    height: 40px;
    width: 40px;
    color: white;
  }
}
</style>
