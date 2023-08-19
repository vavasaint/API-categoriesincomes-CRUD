const categoriesincomes = require("../models/modelsCategory")


const categoriesIncomesControllers = {
    getCategoriesIncomes: async (req, res) => {
        let CategoriesIncomes
        let error = null

        try {
            CategoriesIncomes = await categoriesincomes.find()
        }
        catch
        (err) { console.log(error = err)}


        res.json({
            response: error ? "Error" : { CategoriesIncomes },
            success: error ? false : true,
            error: error
        })
    },

    getOneCategoryIncome: async (req, res) => {
        const id = req.params.id
        let CategoryIncome
        let error = null

        try {
            CategoryIncome = await categoriesincomes.findOne({ _id: id })
        }
        catch
        (err) { error = err }

        res.json({
            response: error ? "Error" : { CategoryIncome },
            success: error ? false : true,
            error: error
        })
    },

    addCategoryIncome: async (req, res) => {
        const {title } = req.body.data
        let CategoryIncome
        let error = null

        try {
            CategoryIncome = await new categoriesincomes({
             title:title
            }).save()
        }
        catch
        (err) { error = err }

        res.json({
            response: error ? "Error" : CategoryIncome,
            success: error ? false : true,
            error: error
        })

    },

    modifyCategoryIncome: async (req, res) => {
        const id = req.params.id;
        const CategoryIncome = req.body.data;
        let CategoryIncomedb
        let error = null

        try {
            CategoryIncomedb = await categoriesincomes.findOneAndUpdate({ _id: id }, categoryincome, { new: true })
        }
        catch (err) { error = err }

        res.json({
            response: error ? "Error" : CategoryIncome,
            success: error ? false : true,
            error: error
        })
    },

    removeCategoryIncome: async (req, res) => {
        const id = req.params.id
        let CategoryIncome
        let error = null

        try {
            CategoryIncome = await categoriesincomes.findOneAndDelete({ _id: id })
        }
        catch
        (err) { error = err }

        res.json({
            response: error ? "Error" : { CategoryIncome },
            success: error ? false : true,
            error: error
        })
    },

}
module.exports = categoriesIncomesControllers 
    


       

