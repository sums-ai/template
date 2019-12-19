<template>
  <div class="reports">
    <div class="reports--title">
      我的{{ project }}测算报告
      <van-button
        round
        hairline
        icon="plus"
        type="default"
        @click="addReport"
      />
    </div>

    <report-list
      v-if="list.length"
      v-model="active"
      :list="list"
      :number="number"
      @clickItem="handleClickItem"
      @unlockAll="handleUnlockAll"
    />
    <empty v-else />
  </div>
</template>

<script>
// TODO
// 生成 报告单项 demo
const genItems = () => {
  const value = () => Math.random() > 0.5;
  return Array(10)
    .fill({
      icon: 'https://via.placeholder.com/48x48/000',
      price: 19.8,
    })
    .map((item, id) => ({
      ...item,
      id,
      title: '标题' + id,
      isLocked: value(),
      priceShow: value(),
    }));
};
// TODO
// 生成 报告列表 demo
const genList = () => {
  const value = () => Math.random() > 0.5;
  return Array(10)
    .fill({
      items: genItems(),
      price: 69.8,
    })
    .map((item, id) => ({
      ...item,
      id,
      name: '姓名' + id,
      isLocked: value(),
    }));
};

// const list = [
//   {
//     id: 0, // 报告id
//     name: 'ABC', // 报告名
//     icon: '', // [可选]报告图标，用于删除报告
//     price: 69.8, // 一键解锁价格
//     isLocked: true, // 整份报告是否锁定
//     items: [
//       {
//         id: 0, // 单个解锁项id
//         title: '标题', // 单个解锁项标题
//         icon: '', // 单个解锁项图标
//         price: 19.8, // 单个解锁项价格
//         isLocked: false, // 单个解锁项是否锁定
//         priceShow: true, // 是否显示单项价格，用于报告列表
//       },
//     ],
//   },
// ];

/** ****************************************** */

import { Empty, ReportList } from '@/components';
import { delay } from '@/utils';

export default {
  name: 'Reports',
  components: {
    Empty,
    ReportList,
  },
  data() {
    return {
      project: '产品名称',
      list: [],
      number: 24601, // 已解锁人数
      active: 0,
      show: false,
    };
  },
  async mounted() {
    const loading = this.$loading();
    await this.getReports();
    loading.close();
  },
  methods: {
    async getReports() {
      this.list = await delay(genList());
    },
    /**
     * 添加新报告
     */
    addReport() {
      this.$store.commit('pushKeepAlive', { name: 'Reports' });
      return this.$router.push({ name: 'Add' });
    },
    /**
     * @event
     * 点击报告项
     */
    handleClickItem(payload) {
      console.group('handleClickItem');
      console.warn('请完善 handleClickItem 方法', payload);
      console.groupEnd();
    },
    /**
     * @event
     * 点击一键解锁
     */
    handleUnlockAll(payload) {
      console.group('handleUnlockAll');
      console.warn('请完善 handleUnlockAll 方法', payload);
      console.groupEnd();
    },
  },
};
</script>

<style lang="less" scoped>
.reports {
  width: 100vw;
  min-height: 100vh;
  padding: 40px 48px;

  background: #f9f9f9;

  .flex-box(flex-start, @flow:column);

  &--title {
    width: 100%;

    .flex-box(space-between);
    .font(36px, #111, 700, 50px);
  }
}
</style>
