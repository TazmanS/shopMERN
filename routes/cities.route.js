const {Router} = require('express')
const Cities = require('../models/cities.model')

const router = Router()

router.get('/', async (req, res) => {
  try {
    const cities = await Cities.find()
    
    res.status(200).json(cities)
  } catch (error) {
    console.log(error)
  }
})

module.exports = router