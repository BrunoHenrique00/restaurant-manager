// Update with your config settings.
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: "kitchen_api",
      user: "postgres",
      password: "postgres"
    },
    migrations:{
      tableName: 'kitchen_migrations',
      directory: `${__dirname}/src/database/migrations`
    },
    seeds:{
      directory: `${__dirname}/src/database/seeds`
    }
  }
}