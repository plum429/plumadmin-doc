---

title:重写异常

---

若需抛出错误可用如下方式:
```php
 throw new \plum\exception\FailException('操作失败');
```

具体可以参考service\extend\plum\exception\ExceptionHandle.php此文件,它重写了tp的异常
