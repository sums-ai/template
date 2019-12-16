# sums-template

流量产品模板

## 本地缓存

本地缓存统一进行了 `JSON.stringify`，取出后需要`JSON.parse`

1. userInfo 用户信息
2. relation 分享入口参数
3. user 用户 id

```json
// key 是 产品id
// value 是 用户在该产品的id
{
  11: 14,
  12: 78
}
```

4. h5report

```json
// key 是 产品id
// value 是 用户在该产品的报告id
{
  11: 14,
  12: 78
}
```

5. uh 用户独有 id，用于 PV、UV 统计
6. token 请求头部携带 token
7. unionid 用户公众平台统一 id

## 通用方法

1. getStorage 读取缓存
2. setStorage 写入缓存
3. updateStorage 更新缓存对象
4. checkENV 判断环境
