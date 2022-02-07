---

title: 重写异常

---

## 重写异常
可以参考service\extend\plum\exception\ExceptionHandle.php此文件,它重写了tp的异常

## code码
HTTP状态码都为200,若不等于200代表服务器连接不上或代码错误也没有接管异常(这种情况可以忽略不计)  
当代码抛出内部错误(非自定义抛出的异常),则会返回且记录DEBUG日志
若处于开发模式,也就是debug为true时,为了方便调试,code是为400,会返回相应的错误信息,文件,行数
```json
{
  "code": 500,
  "message": "SERVER FAIL"
}
```
:::tip
自定义异常,可以查看此目录service/extend/plum/exception/下的文件,注意自定义异常需要继承plum\exception\Exception
:::
|code码|含义|
|---|---|
|400|普通错误|
|401|权限不足|
|402|未登录|
|404|路由错误|
|500|服务器错误|

## 错误提示
前端若要接受到code为400的json

```json
{
  "code":400,
  "message": "error"
}
```
则后端需抛出\plum\exception\FailException异常即可
```php
 throw new \plum\exception\FailException('操作失败');
```
抛出401,403也是抛出响应的自定义异常即可,若非已经定义的code,自己创建即可,具体的可以参考源码
