const {Sequelize, DataTypes, Model} = require('sequelize');
const sequelize = new Sequelize(process.env.DB_URI);

//authenticate sequelize
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
})();

const Recipe = sequelize.define('Recipe', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV1,
    },
    recipe: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    instructions: {
        type: DataTypes.STRING,
        defaultValue: "",
    }

});

const Ingredient = sequelize.define('Ingredient', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        },
    ingredient: {
        type: DataTypes.STRING,
        primaryKey: true
        },
});

Recipe.belongsToMany(Ingredient, {through: 'RecipeIngredients'})
Ingredient.belongsToMany(Recipe, {through: 'RecipeIngredients'})


async function syncAllModels(){
    await sequelize.sync();
    console.log("all models synced")
}
syncAllModels();


module.exports = {sequelize, Recipe, Ingredient};
