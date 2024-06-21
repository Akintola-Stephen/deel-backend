import { Sequelize } from 'sequelize';
import { sequelize } from '../config/database';
import { Profile } from './profile';
import { Contract } from './contract';
import { Job } from './job';

Profile.hasMany(Contract, { as: 'Client', foreignKey: 'ClientId' });
Profile.hasMany(Contract, { as: 'Contractor', foreignKey: 'ContractorId' });
Contract.belongsTo(Profile, { as: 'Client' });
Contract.belongsTo(Profile, { as: 'Contractor' });
Contract.hasMany(Job, { foreignKey: 'ContractId' });
Job.belongsTo(Contract, { foreignKey: 'ContractId' });

export { Profile, Contract, Job, sequelize };
