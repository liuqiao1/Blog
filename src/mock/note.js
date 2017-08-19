const config = require('../utils/config')
const Mock = require('mockjs')

const Random = Mock.Random
const { apiPrefix } = config

const note = Mock.mock({
    'articles|10': [{
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

console.log(note);

module.exports = {
    [`GET ${apiPrefix}/note`] (req, res) {
      res.json(note)
    },
}