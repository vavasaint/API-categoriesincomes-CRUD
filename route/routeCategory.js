const Router= require("express").Router()

const controllersCategory = require("../controllers/controllersCategory")
const {getCategoriesIncomes,getOneCategoryIncome,removeCategoryIncome,modifyCategoryIncome,addCategoryIncome,} = controllersCategory  


Router.route("/categoriesincomes")
 .get(getCategoriesIncomes)
 .post(addCategoryIncome)


 Router.route("/categoriesincomes/:id")
.get(getOneCategoryIncome)
.delete(removeCategoryIncome)
.put(modifyCategoryIncome)
 
 



module.exports = Router;