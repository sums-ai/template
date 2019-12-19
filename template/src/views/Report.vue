<template>
  <div class="report">
    Report

    <button @click="() => handlePayment({ money: 19.8, id: 1, item: 4 })">
      支付
    </button>

    <button @click="goto">引导页</button>

    <payment ref="payment" />
  </div>
</template>

<script>
import { Payment } from "@/components";
import { genQRUrl } from "@/utils";

export default {
  name: "Report",
  components: {
    Payment
  },
  data() {
    return {
      qrURL: ""
    };
  },
  methods: {
    /**
     * 初始化
     * 1.生成二维码分享地址
     */
    init() {
      this.qrURL = genQRUrl();
    },
    /**
     * 支付
     */
    handlePayment(payload) {
      this.$refs.payment.choosePayment(payload);
    },
    /**
     * 跳转
     */
    goto() {
      this.$router.push({ name: "Unlock", params: { id: 777 } });
    }
  }
};
</script>
