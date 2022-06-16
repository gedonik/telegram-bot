<template>
  <footer class="footer">
    <h2 v-if="!viewOrder" class="footer__item footer__title">@DurgerKingBot</h2>
    <h2 v-else class="footer__item footer__order">View order</h2>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
  data() {
    return {
      viewOrder: false
    }
  },
}
</script>

<style lang="scss" scoped>
.footer {
  padding: 10px 0;
  &__item {
    padding: 10px 0;
    text-align: center;
  }

  &__title {
    font-size: 14px;
    opacity: 0.4;
  }

  &__order {
    font-size: 14px;
    text-transform: uppercase;
    color: #fff;
    background-color: #3fd939;
  }
}
</style>