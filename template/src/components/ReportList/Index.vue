<template>
  <div class="report-list">
    <van-tabs
      :value="active"
      :ellipsis="false"
      :line-height="0"
      :line-width="0"
      background="#f9f9f9"
      animated
      swipeable
      class="report-list--main"
      @click="name => $emit('change', name)"
    >
      <van-tab v-for="(report, i) in list" :key="report.id">
        <div
          slot="title"
          class="report-list--title"
          :class="{ 'report-list--title__active': i === active }"
        >
          {{ report.name }}
        </div>
        <report-item
          v-for="item in report.items"
          :key="item.id"
          :item="item"
          @click="child => $emit('clickItem', { report, item: child })"
        />
      </van-tab>
    </van-tabs>

    <div
      v-show="currentReport.isLocked"
      ref="button"
      class="report-list--all report-list--all__normal"
      :style="buttonStyle"
      @click="$emit('unlockAll', { report: currentReport })"
    >
      一键解锁全部
    </div>

    <div class="report-list--number">{{ number }}人已解锁</div>
  </div>
</template>

<script>
import ReportItem from './ReportItem.vue';

export default {
  name: 'ReportList',
  components: { ReportItem },
  model: {
    prop: 'active',
    event: 'change',
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    theme: {
      type: String,
      default: '#3F56E2',
    },
    active: {
      type: [Number, String],
      default: 0,
    },
    number: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return { show: false };
  },
  computed: {
    buttonStyle() {
      return { background: this.theme };
    },
    currentReport() {
      return this.list[this.active] || {};
    },
  },
};
</script>

<style lang="less" scoped>
.report-list {
  .flex-box(flex-start, @flow:column);
  &--title {
    .font(28px, #999, 700);
    letter-spacing: 1px;
    height: 56px;
    .flex-box;
    padding: 0 0.5em;
    background: #fff;
    &__active {
      color: #111;
    }
  }

  &--main {
    width: 654px;
    margin-top: 40px;
  }

  &--all {
    border-radius: 20px;
    margin-top: 64px;
    .size(582px, 88px);
    .flex-box;
    .font(28px, #fff, 700);
    &__normal {
      position: sticky;
      bottom: 24px;
    }
  }

  &--number {
    margin-top: 24px;
    .font(24px, #858585);
  }
}
</style>
