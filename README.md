# sequelize-node
store your sequelize instance in module. why? you can access this instance everywhere, for example use different modules without dependency in your app code.

## Install

```
npm i sequelize-node --save-dev
```

## Using

```
const { Sequelize, sequelize } = require('sequelize-node');

const newSequelize = new Sequelize(database, username, password, options);

// newSequelize === sequelize

```

### You can use that as singleton in all your modules.

