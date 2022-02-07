---

title: 定时器

---

## 使用方法

* 创建定时器类文件,/service/app/timer/ClearLogTimer.php(文件位置随意)
* 此类需要继承\plum\basic\BaseTimer,且实现抽象方法handler,name,timer   
* 文件service/app/timer/ClearLogTimer.php的示例:
```php
<?php

namespace app/timer;

use \plum\basic\BaseTimer;

class ClearLogTimer extends BaseTimer
{
    public function hanlde(){
        // 这里是需要执行定时器的内容
        // 例如:清除日志
    }
    
    public function name(){
        // 当前定时器的命名
        return 'log_clear';
    }
    
    pubcli function timer(){
        // 当前定时器循环时间
        // 每一秒执行一次
        $this->setsetSecond(1);
        // 还有更多定时选择
        // 每小时 20分执行一次
        // $this->setEveryHour(20);
        // 每天8点20执行一次
        // $this->setEveryDay(8,20);
        // 每周一20点30执行一次
        // $this->setEveryWeek(1,20,30);
        // 每月第4天20点30执行一次
        // $this->setEveryMonth(4,20,30);
    }
}
```
* /service/config/timer.php添加此定时器类
```php
//文件位置 service/config/timer.php
return [
    \app\timer\ClearLogTimer::class
];
```

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


## 异常
若代码执行失败,会当作内部异常,自行处理记录
