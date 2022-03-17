const {Sequelize, Datatypes, Model} = require('sequelize');
const sequelize = new Sequelize(process.env.DB_URI);

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
        type: Datatypes.UUID,
        primaryKey: true,
        defaultValue: Datatypes.UUIDV1,
    },
    name: {
        type: Datatypes.STRING,
        allowNull: false,
    },
})

const RecipeIngredients = sequelize.define('RecipeIngredients', {
    id: {
        type: Datatypes.UUID,
        defaultValue:Datatypes.UUIDV1,
        primaryKey: true,
    },
    recipe: {
        type: Datatypes.UUID,
        references: {
            model: Recipe,
            key:"id"
        }
    },
    ingredient: {
        type: Datatypes.UUID,
        references: {
            model: Ingredient,
            key: "name"
        }
    }

}
)

const Ingredient = sequelize.define('Ingredient', {
    //TODO: make ingredient table
    id: {
        type: Datatypes.UUID,
        defaultValue: Datatypes.UUIDV1,
        },
    name: {
        type: Datatypes.STRING,
        primaryKey: true
        },
})

exports.db = sequelize;