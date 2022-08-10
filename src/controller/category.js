const categoryModel = require('../models/category')
const categoryController = {
    getAllCategory: (req, res) => {
        categoryModel.selectAll()
        .then(
            result => res.json(result.rows)
          )
          .catch(err => res.send(err)
          )
    },
    getCategory: (req, res) => {
        const id = Number(req.params.id)
        categoryModel.select(id)
          .then(
            result => res.json(result.rows)
          )
          .catch(err => res.send(err)
          )
      },
    insert : (req, res) =>{
        const {id,name} = req.body;
        categoryModel.insert(id,name)
          .then(
            res.json('category created')
          )
          .catch(err => res.send(err)
          )
      },
    update : (req, res) => {
      const id = Number(req.params.id)
      const name = req.body.name
      categoryModel.update(id, name)
        .then(
           res.json('Product updated')
        )
        .catch(err => res.send(err)
        )
    },
    delete: (req, res)=>{
      const id = Number(req.params.id)
      categoryModel.deleteCategory(id)
      .then(
        res.json('Product deleted')
      )
      .catch(err => res.send(err)
      )
    }
}

module.exports = categoryController