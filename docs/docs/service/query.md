---

title: 数据库驱动query

---

### 重写 paginate方法

当get或post参数有size的时候,可以改变分页每页数量,默认15

### 新增 autoSearch方法

当get或post参数有对应字段的搜索器,将自动加载
示例
请求?nickname=张三&phone=18888888888&age=18
```php
UserModel::autoSerach('phone','age')
        ->select();
```
加载规则
* 若无参数,则有符合对应字段的搜索器将自动加载
* 若参数为null,空字符,数组,则无视
* 若无对应搜素器,则不加载


### 新增 autoOrder方法
* 若表字段含有sort,create_time,id其中一个,则默认进行,sort升序,create_time降序,id降序
* 若get,post参数含有sortby,order,那么将自动排序sortby对应字段,order值只能为asc或desc,相应的升序或降序
