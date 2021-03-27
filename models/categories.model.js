const {Schema, model} = require('mongoose')

const schema = new Schema({
  title: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  subCategories: [
    {
      title: {
        type: String,
        required: true
      },
      url: {
        type: String,
        required: true
      }
    }
  ]
})

module.exports = model('categories', schema)