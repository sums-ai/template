<template>
  <div class="empty">
    <img :src="placeholder" class="empty--placeholder" />
    <div class="empty--tips">目前暂无报告</div>
    <van-button :color="theme" class="empty--button" @click="$emit('addReport')"
      >添加新的测算报告</van-button
    >
  </div>
</template>

<script>
export default {
  name: 'Empty',
  props: {
    placeholder: {
      type: String,
      default: 'https://faceplus.vsuan.com/UI_daili/common--icon/empty_placeholder.png',
    },
    theme: {
      type: String,
      default: '#3F56E2',
    },
  },
};
</script>

<style lang="less" scoped>
.empty {
  flex: 1;

  .size(100%);
  .flex-box(@flow:column);
  &--placeholder {
    margin-bottom: 24px;

    .size(248px);
  }
  &--tips {
    margin-bottom: 64px;

    .font(28px, #333, 400, 40px);
  }
  &--button {
    border-radius: 20px;

    .size(448px, 88px);
  }
}
</style>
