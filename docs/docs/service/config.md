---

title: 配置

---

有些配置需要想通过数据库进行覆盖,例如上传,邮箱通知配置

## 流程
* 通过服务的启动方法,获取\app\model\system\SystemConfigModel::ALLOW_FIELDS的字段,相应的获取config配置
* 在通过数据库(有做缓存)的数据覆盖原有的config(若为索引数组不会累加,会直接覆盖掉)
