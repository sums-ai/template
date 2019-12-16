<template>
  <div class="add">
    <button @click="addReport">Add</button>
  </div>
</template>

<script>
import apis from '@/services';
import { checkENV, updateStorage, getStorage } from '@/utils';

export default {
  name: 'Add',
  data() {
    return {
      name: '',
    };
  },
  mounted() {
    this.goReportIfExist();
  },
  methods: {
    goReportIfExist() {
      const id = getReport();
      if (!id) return;
      return this.goReport(id);
    },
    /**
     * 添加报告
     */
    async addReport() {
      const { name } = this;
      // 验证数据：姓名
      if (!name || /^\s+$/.test(name)) {
        return this.$toast.fail({ message: '请输入姓名' });
      }
      if (/[^\u4e00-\u9fa5\w ]/.test(name)) {
        return this.$toast.fail({ message: '请勿输入特殊字符' });
      }

      const loading = this.$toast.loading('EXAMPLE');

      // 调用接口
      const payload = { name };
      const { id = '' } = await apis.addReport(payload);
      // 保存报告id
      setReport(id);

      loading.clear();

      return this.goReport(id);
    },
    /**
     * 跳转报告页
     */
    goReport(id) {
      return this.$router.replace({ name: 'report', params: { id } });
    },
  },
};

/**
 * h5本地缓存报告id
 * @param {string} id h5报告id
 */
function setReport(id) {
  if (checkENV() === 'wechat') return;
  return updateStorage('h5report', process.env.VUE_APP_APPID, id);
}

/**
 * 调取h5缓存报告
 * @return {string}
 */
function getReport() {
  if (checkENV() === 'wechat') return;
  const h5report = getStorage('h5report');
  return h5report && h5report[process.env.VUE_APP_APPID];
}
</script>
