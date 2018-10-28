import * as SequelizeJS from 'sequelize';
declare let sequelize: SequelizeJS.Sequelize;
declare const Sequelize: (database: string, username: string, password: string, options: any) => SequelizeJS.Sequelize;
export { sequelize, Sequelize };
