"use strict";
exports.__esModule = true;
var SequelizeJS = require("sequelize");
var sequelize;
exports.sequelize = sequelize;
var Sequelize = function (database, username, password, options) {
    exports.sequelize = sequelize = new SequelizeJS(database, username, password, options);
    return sequelize;
};
exports.Sequelize = Sequelize;
//# sourceMappingURL=index.js.map