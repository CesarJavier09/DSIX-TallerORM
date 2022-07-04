'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Cargo extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // Definir relaciones
            Cargo.hasMany(models.Members, {
                foreignKey: 'idCargo'
            })
        }
    };
    Cargo.init({
        cargoDescription: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Cargo',
    });
    return Cargo;
};