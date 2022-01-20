---
title: 目录结构
---
:::warning
待完善
:::
```shell
|-- src
    |-- service //后端目录
        |-- app
            |-- adminapi //后台管理系统接口
                |-- controller //控制器
                |-- middleware //中间件
                |-- route //路由
                |-- service //service层,用于复杂的业务
                |-- validate //验证器
                |-- Controller //基础控制器
            |-- model //公共模型
        |-- extend //第三方类库
            |-- plum //plumadmin核心类库
        |-- public //入口
            |-- admin //打包后的后台管理系统          
        |-- vendor //composer包    
    |-- template //前端目录
        |-- admin //前端后台管理系统   
|-- nginx.htaccess
```
