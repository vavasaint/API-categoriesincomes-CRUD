const mongoose=require("mongoose")

const categoriesIncomeSchema= new mongoose.Schema({
    id:{type:String, required:true},
    title: {type:String, required:true},
    
})

const categoriesincomes = mongoose.model("categoriesincomes",categoriesIncomeSchema)




module.exports= categoriesincomes