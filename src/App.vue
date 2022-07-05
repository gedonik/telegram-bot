<template>
  <button v-if="isAppActive" @click="closeApp" class="open-app" type="button">
    Order Food
  </button>

  <div v-else class="app">
    <AppHeader @closeApp="closeApp"/>

    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";

export default {
  components: {AppHeader},
  data() {
    return {
      isAppActive: true,
    }
  },
  methods: {
    closeApp() {
      this.isAppActive = !this.isAppActive;
      this.$store.state.cart = [];
    }
  }
}
</script>

<style lang="scss">
.app {
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  background-color: #1F2937;
  color: #fff;
  border-radius: 7px;
  box-shadow: 0 0 8px 3px rgba(34, 60, 80, 0.2);
}

.open-app {
  width: 400px;
  padding: 10px 0;
  margin: 0 auto;
  background-color: #1F2937;
  color: #fff;
  border-radius: 7px;
  box-shadow: 0 0 8px 3px rgba(34, 60, 80, 0.2);
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #fca405;
  }
}
</style>
