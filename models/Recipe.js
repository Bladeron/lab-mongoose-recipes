const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: {type:String},
  level: {type:String},
  ingredients: {type:Array},
  cousine: {type:String},
  dishType: {type:String},
  image: {type:String},
  duration: {type:Number},
  creator: {type:String},
  created: {type:Date}
});

const Recipe = mongoose.model("Recipe", userSchema);

module.exports = Recipe;