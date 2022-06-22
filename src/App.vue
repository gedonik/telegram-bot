<template>
  <div class="app">
    <AppHeader/>
      <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";

export default {
  components: {AppHeader}
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.app {
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  background-color: #1F2937;
  color: #fff;
  border-radius: 7px;
  box-shadow: 0 0 8px 3px rgba(34, 60, 80, 0.2);
}
</style>
