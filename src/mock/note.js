const config = require('../utils/config')
const Mock = require('mockjs')

const Random = Mock.Random
const { apiPrefix } = config

const note = Mock.mock({
    'articles|20': [{
        'articleId|+1': 0,
        'articleTitle': Random.title(),
        'releaseTime': Random.date('yyyy-mm-dd'),
        'tags|1-5': [{
            'color': Random.color(),
            'text': Random.word(),
        }],
        'text':Random.paragraph(),
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

module.exports = {
    [`GET ${apiPrefix}/note`] (req, res) {
        //console.log(res.json(note));
      res.json(note)
    },
}