const {Router} = require('express')
const Categories = require('../models/categories.model')

const router = Router()

router.get('/', async (req, res) => {
  res.status(200).json({data: '1111'}) 
})

router.post('/add', async (req, res) => {
  try {
    const category = new Categories({
      title: req.body.title,
      img: req.body.img,
      subCategories: req.body.subCategories
    })

    await category.save()
    let categories = await Categories.find()
    res.status(200).json(categories)
  } catch (e) {
    console.log(e)
  }
})


module.exports = router