---
title: 架构流程
---

## 架构
:::warning
这里需要注意一点,因为前端模块和后端接口为同域名,所以后台管理系统占用admin,如果需要新应用的时候需要避免
:::
目前大部分应用都是,前后端分离的形式,所以直接使用了TP提供的多应用模式.


---  


## HTTP加载流程  

[TP6文档传送门](https://www.kancloud.cn/manual/thinkphp6_0/1075414)  

---  

## 服务流程
PlumAdmin除tp框架正常的加载流程的改动,这里使用tp内置的服务,使得代码低耦合,如果有对服务不太清除的小伙伴可以参考文档[传送门](https://www.kancloud.cn/manual/thinkphp6_0/1037490)
:::warning
文档之后/service 就代指 /plumadmin/src/service,这里就不过多赘述了
:::

添加plumadmin服务
```php
// /service/app/service.php
return [
    \plum\core\Service::class
];
```

* 服务注册
  * 重写异常
  * 添加数据库驱动query
  * 注册验证器
  * 添加命令
* 服务启动
  * 跨域配置(这里不使用tp自带的跨域中间件是因为如果框架报错就会出现跨域情况)
  * 获取配置
