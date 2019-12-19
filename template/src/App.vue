<template>
  <div :id="rootID" class="approot">
    <keep-alive :include="keepAliveComponents">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "App",
  data() {
    return {
      rootID: process.env.VUE_APP_ROOT
    };
  },
  computed: {
    ...mapState(["keepAliveComponents"])
  }
};
</script>

<style lang="less">
@import "./styles/global.less";

.approot {
  user-select: none;
}
</style>
