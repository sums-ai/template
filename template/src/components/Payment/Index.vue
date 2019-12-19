<template>
  <h5-pay v-model="show" :info="info" @onpay="handlePay" />
</template>

<script>
import { H5Pay } from 'sums-components';
import { checkENV, getRelation } from '@/utils';
import apis from '@/services';

export default {
  name: 'Payment',
  components: { H5Pay },
  data() {
    return {
      show: false,
      info: {}, // info 中必须包含 money 属性，用于 H5Pay 展示价格
    };
  },
  methods: {
    /**
     * 选择支付方式
     * 微信环境下直接调用微信支付
     */
    choosePayment(info = {}) {
      this.info = info;
      if (checkENV() === 'wechat') return this.handlePay();
      this.show = true;
    },
    /**
     * 调起支付
     */
    async handlePay() {
      // 提取支付所需内容
      const { id, item } = this.info;

      // 提取代理信息
      const agent = JSON.stringify(getRelation());
      const payload = { id, item, agent };

      console.group('Payment 提示');
      console.warn('请完善handlePay方法：', payload);
      console.groupEnd();

      return await apis.payment(payload);
    },
  },
};
</script>
