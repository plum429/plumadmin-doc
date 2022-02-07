---

title: 验证器

---

## 自定义验证方法

若要新增验证方法,可在service/config/validate.php,文件中新增验证方法  
具体写法,参考TP文档[传送门](https://www.kancloud.cn/manual/thinkphp6_0/1037624)

## 验证方法
除tp内置规则方法,还有如下方法 

### requireIn 
验证某个字段的值是否在某个范围的时候必须，例如
```php
// 当type为1,2,3的时候,password必须
'password'=>'requireIn:type,1,2,3'
```

### arrayColumn
二位数组验证

```php
//需要校验的数组
[
    [
        'age'=>18,
        'username'=>'plum'
    ]
]
//规则
'users'=>[
    'age'=>'integer',
    'username'=>'require'
]
```
