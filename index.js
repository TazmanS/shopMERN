const express = require('express')
const options = require('./config')
const mongoose = require('mongoose')
const path = require('path')

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json({ extended: true }))

app.use('/api/cities', require('./routes/cities.route'))
app.use('/api/categories', require('./routes/categories.route'))



if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || options.PORT

async function start() {
    try{
      await mongoose.connect(options.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
      })
  
      app.listen(PORT, () => {
        console.log("Server run" + PORT)
      })  
    } catch(e){
      console.log(e)
    }
  }
  
  start()