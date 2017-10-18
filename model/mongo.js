const mongoose = require('mongoose')

const mSchema = new mongoose.Schema({
    username : { type:String },
    password : { type:String },
    stamp : { type:Date,default:Date.now },
    email : { type:String,default:'' }
}) 

const db = mongoose.connect('mongodb://127.0.0.1:27017/test_me')

//user是数据库中的集合名称，不存在会创建 
const mModel = db.model('user',mSchema,'user')

// 增
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

// 查
exports.query = function(obj,cb){
    mModel.find(obj,function(err,doc){
       cb(err,doc)
    })
}

// 改 
exports.update = function(findObj,setObj,cb){
    mModel.update(findObj,{ $set : setObj },function(err) {
        cb(err)
    })
}

// 删
exports.remove = function(obj,cb){
    mModel.remove(obj,function(err){
        cb(err)
    })
}