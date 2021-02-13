const {Router} = require('express')
const Cities = require('../models/cities.model')

const router = Router()

router.get('/', async(req, res) => {
  console.log('eeee')
})

router.post('/', async (req, res) => {
  const city = new Cities({
    title: req.body.title,
    value: req.body.value
  })

  await city.save()
  res.status(200).json("Article add")
})

module.exports = router