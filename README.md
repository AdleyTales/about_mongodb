# nodejs 操作 mongodb

- nodejs
- mongodb
- mongoose 

###  数据库的增、删、改、查

1. 增（添加数据）

```javascript
exports.insert = function(username,password,email,callback){
    const mEntity = new mModel({
        username:username,
        password:password,
        email:email
    })

    mEntity.save(function(err,doc){
        if(err) {
            throw err
        }else{
            console.log(doc)
        }
    })
}
```
2. 查（查询数据）

```javascript
exports.query = function(obj,cb){
    mModel.find(obj,function(err,doc){
       cb(err,doc)
    })
}
```
3. 改（修改数据）

```javascript
exports.update = function(findObj,setObj,cb){
    mModel.update(findObj,{ $set : setObj },function(err) {
        cb(err)
    })
}
```
4. 删（删除数据）

```javascript
exports.remove = function(obj,cb){
    mModel.remove(obj,function(err){
        cb(err)
    })
}
```

