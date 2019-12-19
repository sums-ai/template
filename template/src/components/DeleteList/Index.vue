<template>
  <div class="delete-list">
    <delete-item
      v-for="report in list"
      :key="report.id"
      :report="report"
      :project="project"
      :status="status"
      @clickItem="child => $emit('clickItem', child)"
    />

    <button
      class="delete-list--button"
      :class="{ 'delete-list--button__active': status }"
      @click="status = !status"
    >
      <span v-if="status">完成</span>
      <van-icon v-else name="delete" />
    </button>
  </div>
</template>

<script>
import DeleteItem from './DeleteItem.vue';

export default {
  name: 'DeleteList',
  components: {
    DeleteItem,
  },
  props: {
    project: {
      type: String,
      default: '',
    },
    list: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      status: false,
    };
  },
  computed: {
    icon() {
      return this.status ? '' : 'delete';
    },
    label() {
      return this.status ? '完成' : '';
    },
  },
};
</script>

<style lang="less" scoped>
.delete-list {
  .flex-box(flex-start, @flow:column);
  &--button {
    background: #fff;
    margin-top: 48px;
    box-shadow: 0 20px 80px -4px rgba(215, 223, 232, 0.57);
    border: none;
    .size(88px);
    .flex-box;
    border-radius: 1000px;
    .font(36px);
    transition: border-radius 0.3s ease-in-out, width 0.3s ease-in-out;
    &__active {
      width: 216px;
      border-radius: 20px;
      font-size: 28px;
    }
  }
}
</style>
