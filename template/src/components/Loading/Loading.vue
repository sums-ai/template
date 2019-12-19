<template>
  <div class="loading" v-show="visible">
    <img :src="icon" />
    <div>{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: "Loading",
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    }
  },
  mounted() {
    console.group("Loading 提示");
    console.warn("请自行补充 loading 样式");
    console.groupEnd();
  }
};
</script>

<style lang="less" scoped>
.loading {
  position: fixed;
  z-index: @loading;
  top: 0;
  left: 0;

  .size(100vw, 100vh);
}
</style>
