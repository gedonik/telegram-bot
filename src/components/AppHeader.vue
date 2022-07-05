<template>
  <header class="header">

    <div class="header__inner">
      <router-link to="/" style="text-decoration: none">
        <button v-if="routeName === 'cart'" class="header__back">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" fill="currentColor" class="bi bi-arrow-left"
               viewBox="0 0 16 16">
            <path fill-rule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
          </svg>
        </button>
      </router-link>
      <h1 class="header__title">Durger King</h1>
    </div>

    <button class="header__close" type="button" @click="closeApp">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-x"
           viewBox="0 0 16 16">
        <path
            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
      </svg>
    </button>

  </header>
</template>

<script>
export default {
  name: "AppHeader",
  computed:{
    routeName(){
      return this.$route.name
    },
  },
  methods: {
    closeApp() {
      this.$emit('closeApp')
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__inner {
    display: flex;
    align-items: center;
  }

  &__back {
    margin-left: 20px;
    border: none;
    background-color: transparent;
    color: #fff;
    opacity: 0.4;
    cursor: pointer;
    transition: opacity 0.3s ease-in-out;


    &:hover {
      opacity: 0.8;
    }
  }

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
    transition: opacity 0.3s ease-in-out;

    &:hover {
      opacity: 0.8;
    }
  }
}
</style>