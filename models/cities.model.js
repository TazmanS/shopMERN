const {Schema, model} = require('mongoose')

const schema = new Schema({
  title: {
    type: String
  },
  value: {
    type: String
  }
})


module.exports = model('Cities', schema)