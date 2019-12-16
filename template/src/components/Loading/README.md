# Loading 组件

> 每次调用都会实例化一个 Loading 组件, 已经挂载到全局

## 使用

1. 通过组件的方式引入

```js
import { Loading } from 'Components';

export default {
  components: { Loading }
};
```

1. 通过方法使用

```js
export default {
  mounted() {
    const loading = this.$loading();
    loading.close();
  }
};
```
