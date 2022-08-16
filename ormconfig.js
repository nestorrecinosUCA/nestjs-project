require('dotenv').config();

module.exports = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: false,
  migrations: ['dist/src/migration/*.{js,ts}'],
  seeds: ['dist/src/seeds/*.seed.{ts,js}'],
  cli: {
    migrationsDir: 'src/migration',
  },
};
