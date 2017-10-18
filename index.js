
const mongo = require('./model/mongo')

// 插入数据
//mongo.insert('adley','adley1234','adley_app@126.com')

// 查找数据
// mongo.query({username:'admin'},function(err,doc) {
//     if(err){

//     } else {
//         console.log(doc)
//         if(doc.length == 0){
//             console.log('数据库中没有该数据')
//         }
//     }
// })

//修改数据update
// mongo.update({username:'admin'},{password:'root'},function(err){
//     if(err){
//         console.log('修改失败')
//     } else {
//         console.log('修改成功')
//     }
// })

//删除数据
// mongo.remove({ username: 'adley' }, function (err) {
//     if (err) {
//         console.log('删除失败')
//     } else {
//         console.log('删除成功')
//     }
// })
