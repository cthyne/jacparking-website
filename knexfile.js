// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
 const path = require("path");
 require("dotenv").config();
//  const { DATABASE_URL } = process.env;
//  const knex = require('knex');
 
 module.exports = {
    development: {
      client: 'pg',
      connection: 'postgres://lmtcptha:4VrzB1uEJMEsclrWVRzg7sZMqxADoW5b@heffalump.db.elephantsql.com/lmtcptha',
      migrations: {
        directory: path.join(__dirname, "src", "db", "migrations"),
        },
      seeds: {
        directory: path.join(__dirname, "src", "db", "seeds"),
      },
      useNullAsDefault: true,
    },
};

//   staging: {
//     client: 'postgresql',
//     connection: {
//       database: 'my_db',
//       user:     'username',
//       password: 'password'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   },

//   production: {
//     client: 'postgresql',
//     connection: {
//       database: 'my_db',
//       user:     'username',
//       password: 'password'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   }

// };
