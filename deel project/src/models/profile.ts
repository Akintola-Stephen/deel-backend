import { Model, DataTypes } from "sequelize"
import { sequelize } from "../config/database"

export class Profile extends Model {
    public id!: number;
    public firstName!: string;
    public lastName!: string;
    public profession!: string;
    public balance!: number;
    public type!: 'client' | 'contractor';
}

Profile.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    profession: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.ENUM('client', 'contractor'),
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Profile'
})