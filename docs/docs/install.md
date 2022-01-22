---
title: 快速上手

---

## 环境要求
* php7.4+
  * composer
  * redis (队列需要用到)
* nginx
* mysql
* node

## 克隆源码
```git
// github克隆源码 git clone https://github.com/plum429/plumadmin.git plumadmin
git clone https://gitee.com/plum429/plumadmin.git plumadmin
```

## 安装后端
安装扩展包
```shell
//进入后端源码目录
cd plumadmin/src/service
//使用composer安装扩展包
composer install
```

:::tip
复制一份.example.env改名为.env文件,打开.env文件进行配置
:::
```shell
cp .example.env .env
```

安装数据表和数据
:::tip
后台管理系统的账号:admin 密码:123456
:::
```sql
php think migrate:run
php think seed:run
```

开发模式
:::tip
如果是win开发环境,可以双击打开同目录下的文件`win环境_定时器_队列.bat`来启动定时器,队列,进行调试
:::
```shell
//启动服务
php think run
//启动定时器
php think worker:timer start
//启动队列
php think worker:timer start
```

## 安装前端
```shell
//进入前端目录
cd ../template/admin
//安装扩展
npm install
```
开发模式
```shell
npm run serve
```
打包
:::tip
文件会打包在相对路径../service/public/admin下,如果不修改目录一般不需要理会
:::
```shell
npm run build
```

## 部署伪静态
:::tip
部署为静态,是为了隐藏thinphp框架的index.php
:::
```nginx
location / { 
   if (!-e $request_filename) {
       rewrite  ^(.*)$  /index.php?s=/$1  last;
       break;
    }
 }
```
