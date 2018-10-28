import * as SequelizeJS from 'sequelize';

let sequelize: SequelizeJS.Sequelize;

const Sequelize = (
  database: string,
  username: string,
  password: string,
  options: any
) => {
  sequelize = new SequelizeJS(database, username, password, options);

  return sequelize;
};

export { sequelize, Sequelize };
