<template>
  <div class="delete-item" @click="handleClick">
    <img v-if="report.icon" :src="report.icon" class="delete-item--icon" />
    <div class="delete-item--main">
      <div class="delete-item--name">{{ report.name }}</div>
      <div class="delete-item--desc">{{ project }}报告</div>
    </div>
    <van-icon :name="icon" size="5.8vw" />
  </div>
</template>

<script>
export default {
  name: 'DeleteItem',
  props: {
    project: {
      type: String,
      default: '',
    },
    report: {
      type: Object,
      default: () => ({}),
      validator(value) {
        const notHas = key => !(key in value);
        if (notHas('name')) return console.error('缺少名称：name');

        if (notHas('icon')) console.warn('缺少图标：icon');
        return true;
      },
    },
    status: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    icon() {
      return this.status ? 'delete' : 'arrow';
    },
  },
  methods: {
    handleClick() {
      const emit = () =>
        this.$emit('clickItem', {
          report: this.report,
          isDelete: this.status,
        });

      if (!this.status) return emit();

      return this.$dialog
        .confirm({ title: '温馨提示', message: '您确定要删除该报告吗？' })
        .then(emit)
        .catch(console.log);
    },
  },
};
</script>

<style lang="less" scoped>
.delete-item {
  .size(654px, 120px);
  border-radius: 16px;
  background: #fff;
  margin-bottom: 32px;
  padding: 0 32px;
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.06);
  .flex-box;
  &--icon {
    flex-shrink: 0;
    .size(72px);
    border-radius: 1000px;
    margin-right: 40px;
  }
  &--main {
    flex: 1;
  }
  &--name {
    .font(28px, #111, 700, 40px);
  }
  &--desc {
    .font(28px, #666, 400, 40px);
  }
}
</style>
