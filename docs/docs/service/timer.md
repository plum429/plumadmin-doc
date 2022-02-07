---

title: 定时器

---

## 启动方式
### linux环境
:::warning
需要注意需要在plumadmin/src/service目录下运行,不再次强调
:::
**调试模式**
```shell
//启动
php think run worker:timer start
//暂停
php think run worker:timer stop
//重启
php think run worker:timer reload
//状态
php think run worker:timer status
```
**守护进程**
```shell
//启动
php think run worker:timer start -d
//重启
php think run worker:timer reload -d
```
### windows环境
:::tip
线上建议使用linux环境,windows用于开发环境
:::
双击打开`plumadmin/src/service/win环境_定时器_队列.bat`会同时启动队列和定时器  
若不想同时启动,可以打开命令函单独执行
```shell
php think worker:timer
```

## 使用方法
