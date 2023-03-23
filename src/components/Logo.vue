<template>
  <router-link :to="{name: 'main'}" class="logo object-fit" href="/">
    <img src="../assets/logo.svg" alt="logo"/>
  </router-link>
</template>

<script>
import {RouterLink} from "vue-router";

export default {
  name: "LogoComponent",
  components: {
    RouterLink
  }
}
</script>

<style scoped>
  .logo {
    display: block;
    margin-left: 8px;
    min-width: 112px;
    height: 46px;
  }
</style>