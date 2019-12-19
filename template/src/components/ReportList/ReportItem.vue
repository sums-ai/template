<template>
  <div class="report-item" @click="$emit('click', item)">
    <img :src="item.icon" class="report-item--icon" />
    <div class="report-item--name">{{ item.title }}</div>
    <div class="report-item--nav">
      <van-icon :name="icon" size="5.8vw" />
      <div v-if="item.isLocked && item.priceShow" class="report-item--price">
        {{ item.price }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReportItem',
  props: {
    item: {
      type: Object,
      default: () => ({}),
      validator(value) {
        const notHas = key => !(key in value);
        if (notHas('icon')) return console.error('缺少图标：icon');
        if (notHas('title')) return console.error('缺少标题：title');
        if (notHas('isLocked')) return console.error('缺少解锁状态：isLocked');

        if (notHas('price')) console.warn('缺少价格：price');
        if (notHas('priceShow')) console.warn('缺少显示价格状态：priceShow');
        return true;
      },
    },
  },
  computed: {
    icon() {
      if (!this.item.isLocked) return 'arrow';
      return require('@/assets/locked.png');
    },
  },
};
</script>

<style lang="less" scoped>
.report-item {
  .flex-box;
  width: 99%;
  height: 120px;
  background: #fff;
  border-radius: 16px;
  margin-bottom: 32px;
  padding: 0 32px;
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.06);
  &--icon {
    .size(48px);
    flex-shrink: 0;
    margin-right: 32px;
  }
  &--name {
    flex: 1;
    .font(28px, #111, 700);
  }
  &--nav {
    .flex-box(center, flex-end, column);
  }
  &--price {
    .font(24px, #ff5c70, 700, 32px);
    &::before {
      content: '¥';
    }
  }
}
</style>
