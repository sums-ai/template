<template>
  <div v-show="visible">
    <img :src="icon" />
    <div>{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
  },
  mounted() {
    console.group('Loading 提示');
    console.warn('请自行补充 loading 样式');
    console.groupEnd();
  },
};
</script>
