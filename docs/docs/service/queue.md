---

title: 队列

---


## 使用方法
:::warning
需要配置redis
:::
* 创建队列类文件,/service/app/queue/sendEmailQueue.php(文件位置随意)
* 此类需要继承\plum\basic\BaseQueue,且实现抽象方法handler,name
* 文件service/app/queue/sendEmailQueue.php的示例:
```php
<?php
namespace app/queue;

use \plum\basic\BaseQueue;

class sendEmailQueue extends BaseQueue
{
    public function hanlde($data){
        // 这里处理出队列数据
    }
    
    public function name(){
        // 当前队列的名称
        return 'send_email';
    }
}
```
* 入队列
```php
//在任意位置可以入队列,参数data需要处理的数据,delay表示延时,默认为0,表示立即执行
\app\queue\sendEmailQueue::send($data,$delay);
```
* /service/config/queue.php添加此队列类
```php
//文件位置 service/config/queue.php
return [
    \app\queue\sendEmailQueue::class
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
php think run worker:queue start
//暂停
php think run worker:queue stop
//重启
php think run worker:queue reload
//状态
php think run worker:queue status
```

**守护进程**

```shell
//启动
php think run worker:queue start -d
//重启
php think run worker:queue reload -d
```

### windows环境

:::tip
线上建议使用linux环境,windows用于开发环境
:::
双击打开`plumadmin/src/service/win环境_定时器_队列.bat`会同时启动队列和定时器  
若不想同时启动,可以打开命令函单独执行

```shell
php think worker:queue
```


## 异常
若代码执行失败,会当作内部异常,自行处理记录,失败队列会进入键值为{redis-queue}-failed的redis
