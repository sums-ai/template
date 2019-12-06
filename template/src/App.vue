<template>
  <div :id="rootID">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      rootID: process.env.VUE_APP_ROOT
    };
  }
};
</script>
