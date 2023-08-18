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

    
    addMultiplesCategoriesIncomes: async (req, res) => {
        let error = []
        let CategoriesIncomes = []
        for (let CategoryIncome of req.body.data) {
        try {
                let verifyCategoryIncome = await categoriesincomes.find({ name: { $regex: CategoryIncome.name, $options: "i" } })
                if (verifyCategoryIncome.length == 0) {
                    let dataCategoryIncome = {
                        title: categoriesincomes.title,
                        
                        
                    }
                    await new categoriesincomes({
                        ...dataCategoryIncome
                    }).save()
                    CategoryIncome.push(dataCategoryIncome)
                } else {
                    error.push({
                        title: categorriesincomes.title,
                        result: "Ya existe en la base de datos con el Id: " + verifyCategoryIncome[0]._id
                    })
                }

            }
         catch (err) { error.push({name: CategoryIncome.name, err})}
        }
        res.json({
            response: error.length > 0 && categoriesIncomes.length === 0 ? "Error" : categoriesIncomes,
            success: error.length > 0 ? (categoriesIncomes.length > 0 ? "Warning" : false) : true,
            error: error
        })
    }
}
module.exports = categoriesIncomesControllers 
    


       

