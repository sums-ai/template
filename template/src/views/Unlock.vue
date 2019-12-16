<template>
  <div class="unlock">
    单项解锁引导页
    <button @click="() => handlePayment({ money: 19.8, id: 2, item: 17 })">
      支付
    </button>

    <payment ref="payment" />
  </div>
</template>

<script>
import { Payment } from '@/components';

export default {
  name: 'Unlock',
  components: {
    Payment,
  },
  methods: {
    /**
     * 支付
     */
    handlePayment(payload) {
      this.$refs.payment.choosePayment(payload);
    },
  },
};
</script>
