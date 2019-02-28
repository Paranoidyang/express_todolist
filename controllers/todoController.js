var bodyParser = require('body-parser')
var urlencodeParse = bodyParser.urlencoded({extended: false})

var data = [
  {
    item: 'get mild'
  },
  {
    item: 'walk dog'
  },
  {
    item: 'kick some coding ass'
  }
]
module.exports = function(app) {
  app.get('/todo', function (req, res) {
    res.render('todo', {todos: data})
  })
  
  app.post('/todo', urlencodeParse, function(req, res) {
    data.push(req.body)
    res.json(data)
  })
  
  app.delete('/todo/:item', function (req, res) {
    data = data.filter(function (todo) { //遍历data中的数据，return为true是要保留下来的
      return todo.item.replace(/ /g, '-') !== req.params.item
    })
    res.json(data)
  })
}