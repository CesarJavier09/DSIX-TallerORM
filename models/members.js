'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Members extends Model {

        static associate(models) {
            // Definir relaciones
            Members.belongsTo(models.Cargo, {
                foreignKey: 'id',
                target_key: 'idCargo'
            })
        }
    };

    Members.init({
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
        location: DataTypes.STRING,
        idCargo: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Members',
    });
    return Members;
};