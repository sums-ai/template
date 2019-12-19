<template>
  <div class="delete">
    <div class="delete--title">
      <img v-if="avatar" :src="avatar" class="delete--avatar" />
      我添加的{{ project }}测算报告
    </div>

    <delete-list
      v-if="list.length"
      :list="list"
      :project="project"
      @clickItem="handleClickItem"
    />
    <empty v-else @addReport="addReport" />
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
      icon: 'https://via.placeholder.com/48x48/000',
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

import { Empty, DeleteList } from '@/components';
import { delay, getStorage } from '@/utils';

export default {
  name: 'Delete',
  components: { DeleteList, Empty },
  data() {
    return {
      project: '产品名称',
      list: [],
      avatar: '',
    };
  },
  async mounted() {
    const loading = this.$loading();
    this.getAvatar();
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
      return this.$router.push({ name: 'Add' });
    },
    /**
     * 获取头像
     */
    getAvatar() {
      const { face: avatar = '' } = getStorage('userInfo') || {};
      this.avatar = avatar;
    },
    /**
     * @event
     * 处理列表项点击
     */
    handleClickItem(payload) {
      console.group('handleClickItem');
      console.warn('请完善 handleClickItem 方法', payload);
      console.warn('isDelete表示是否是删除操作', payload.isDelete);
      console.groupEnd();
    },
  },
};
</script>

<style lang="less" scoped>
.delete {
  width: 100vw;
  min-height: 100vh;
  padding: 40px 48px;

  background: #f9f9f9;

  .flex-box(flex-start, @flow:column);

  &--title {
    width: 100%;
    margin-bottom: 32px;

    .flex-box(flex-start);
    .font(36px, #111, 700, 50px);
  }
  &--avatar {
    margin-right: 24px;

    border-radius: 1000px;

    .size(60px);
  }
}
</style>
