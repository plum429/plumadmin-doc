---

title: 日志

---

## DEBUG日志

### 文件记录
* 日志路径在service/runtime/log下,内含错误信息,trace,请求参数,请求头,ip,路由
### 数据库记录
* 需要数据库配置完成后方可生效,内含错误信息,trace,请求参数,请求头,ip,路由
### 邮箱通知
:::tip
强烈建议开启
:::
* 开发的时候有时候会出现偶发性异常,一般开发者无法第一时间获得信息,开启后,将邮箱通知服务异常(只含错误信息和报错的文件,起到简单提示,具体错误详情看数据库记录或文件记录)
* 注意事项
  * 需配置完环境后,打开后台管理系统,进行开启,且配置stmp服务(可以使用163邮箱,不会可以百度,这里不过多赘述)
  * .env文件记得SERVICE_NAME给字段赋值,因为邮箱通知,会带着这个参数,方便开发者知道是那个应用出错

## 操作日志
### 使用方法
* 需要记录操作日志的路由,需要使用中间件\app\adminapi\middleware\OperationLogMiddleware
```php
Route::post('login/account', 'Login/account')
    ->middleware(\app\adminapi\middleware\OperationLogMiddleware::class);
```
* 在此路由调用的任意位置,写入op类型的日志
```php
//文件位置service/app/adminapi/controller/Login.php
//此类account方法中或调用其他类库的任意位置写入日志
//这里使用的助手函数trace,你也可以调用Log类,只要是写入内存就可以
trace("{$data['username']} ,用户登录", 'op');
```
总结:该路由调用OperationLogMiddleware中间件,写入op类型的日志到内存.就可以记录操作日志ip,参数,header头会自动写入.
