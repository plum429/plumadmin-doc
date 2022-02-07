---

title: 附件

---

* 附件支持本地,七牛云,阿里云,腾讯云  
* 为了方便迁移,附件单独新建立在一张表中,数据库记录附件只记录id,可以是字符串也可以是整型
* 若为多附件,则为数组,用json写入到数据库,可以配合模型的type,会自动转变类型
```php
// 例如字段banner轮播图,需要多张图片,可以设置数据库的表类型为字符串,设置模型为json
protected $type = ['banner'=>'json'];
```

**示例**  

banner数据库字段

|字段|类型|备注|
|--|--|--|
|id|int(11)||
|banner|string(255)|轮播图(多图)|
|cover|int(11)|封面图(单图)|

banner数据库
|id|banner|cover|
|--|--|--|
|1|[1,2,3,4,5]|2|
|2|[1,2,3,4,5]|1|
|3|[1,4,5]|3|

获取图片地址
```php
//取多行
$list = BannerModel::select();
//这里引用了不需要在赋值
\plum\utils\Attachment::getItem($list,['banner','cover'])
//取一行也是同理,如何区分单行多行具体可以看源码
```

获取图片id
`前端接收过来的数据`

```json
{
  "id": 1,
  "banner": [
    {
      "id": 2
    },
    {
      "id": 3
    },
    {
      "id": 6
    }
  ],
  "cover": {
    "id": 6
  }
}
```
```php
//获取参数
$data = input('param.');
//这里引用了不需要在赋值
\plum\utils\Attachment::getId($data['banner']);
\plum\utils\Attachment::getId($data['cover']);
//更新数据
BannerModel::update($data);
```
