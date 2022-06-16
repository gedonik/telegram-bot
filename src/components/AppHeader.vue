<template>
  <header class="header">
    <h1 class="header__title">Durger King</h1>
    <button class="header__close" type="button">X</button>
  </header>
</template>

<script>
export default {
  name: "AppHeader"
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;


  &__title {
    padding: 20px;
    text-align: left;
    font-size: 22px;
    opacity: 0.9;
  }

  &__close {
    padding: 10px;
    margin-right: 20px;
    border: none;
    background-color: transparent;
    color: #fff;
    opacity: 0.4;
    cursor: pointer;
  }
}
</style>