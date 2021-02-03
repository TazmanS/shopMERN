const express = require('express')

const app = express()

app.use(express.urlencoded({extended: true}))

const PORT = process.env.PORT || 3030


async function start() {
    try{
    //   await mongoose.connect(keys.MONGODB_URI, {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    //     useFindAndModify: false
    //   })
  
      app.listen(PORT, () => {
        console.log("Server run" + PORT)
      })  
    } catch(e){
      console.log(e)
    }
  }
  
  start()