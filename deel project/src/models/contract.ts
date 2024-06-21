import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

export class Contract extends Model {
    public id!: number;
    public terms!: string;
    public status!: 'new' | 'in_progress' | 'terminated';
    public ClientId!: number;
    public ContractorId!: number;
}

Contract.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    terms: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('new', 'in_progress', 'terminated'),
        allowNull: false,
    },
    ClientId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    ContractorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Contract',
});
