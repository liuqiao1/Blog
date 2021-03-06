const config = require('../utils/config')
const Mock = require('mockjs')

const Random = Mock.Random
const { apiPrefix } = config


//如果直接写Random.** 那么生成的数据都是重复的 为什么？
const note = Mock.mock({
    'articles|20': [{
        'articleId': '@id',
        'articleTitle': '@title',
        'releaseTime': "@date('yyyy-mm-dd')",
        'tags|1-5': [{
            'color': '@color',
            'text': '@word',
        }],
        'text':'@paragraph',
    }]
});

// {
//     'data|80-100': [
//       {
//         id: '@id',
//         name: '@name',
//         nickName: '@last',
//         phone: /^1[34578]\d{9}$/,
//         'age|11-99': 1,
//         address: '@county(true)',
//         isMale: '@boolean',
//         email: '@email',
//         createTime: '@datetime',
//         avatar () {
//           return Mock.Random.image('100x100', Mock.Random.color(), '#757575', 'png', this.nickName.substr(0, 1))
//         },
//       },
//     ],
//   }

//console.log(note);
let database = note.articles

const queryArray = (array, key, keyAlias = 'key') => {
    console.log("关键字："+keyAlias +"  查找目标："+key);
if (!(array instanceof Array)) {
    return null
}
let data

for (let item of array) {
    if (item[keyAlias] === key) {
    data = item
    break
    }
}

if (data) {
    return data
}
return null
}

const NOTFOUND = {
message: 'Not Found',
documentation_url: 'http://localhost:8000/request',
}


module.exports = {
    [`GET ${apiPrefix}/notes`] (req, res) {
        const { query } = req
        let { pageSize, page, ...other } = query
        pageSize = pageSize || 6
        page = page || 1
    
        let newData = database
        // for (let key in other) {
        //   if ({}.hasOwnProperty.call(other, key)) {
        //     newData = newData.filter((item) => {
        //       if ({}.hasOwnProperty.call(item, key)) {
        //         if (key === 'address') {
        //           return other[key].every(iitem => item[key].indexOf(iitem) > -1)
        //         } else if (key === 'createTime') {
        //           const start = new Date(other[key][0]).getTime()
        //           const end = new Date(other[key][1]).getTime()
        //           const now = new Date(item[key]).getTime()
    
        //           if (start && end) {
        //             return now >= start && now <= end
        //           }
        //           return true
        //         }
        //         return String(item[key]).trim().indexOf(decodeURI(other[key]).trim()) > -1
        //       }
        //       return true
        //     })
        //   }
        // }
    
        res.status(200).json({
          data: newData.slice((page - 1) * pageSize, page * pageSize),
          //data: newData.slice(0, page * pageSize),
          
          total: newData.length,
        })
    },

    // [`GET ${apiPrefix}/note`] (req, res) {
    //     //console.log(res.json(note));
    //   res.json(note)
    // },

    [`GET ${apiPrefix}/note/:id`] (req, res) {
        const { id } = req.params
        const data = queryArray(database, id, 'articleId')
        if (data) {
            console.log("找到目标："+data);
          res.status(200).json(data)
        } else {
            console.log("没有找到目标");
          res.status(404).json(NOTFOUND)
        }
    },
}