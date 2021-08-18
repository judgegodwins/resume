exports.environment = process.env.NODE_ENV;

exports.logDirectory = process.env.LOG_DIR;

exports.corsUrl = process.env.CORS_URL;

exports.port = process.env.PORT || 8080;

exports.jwtSecret = process.env.JWT_SECRET;

exports.dbConfig = {
  name: process.env.DB_NAME || '',
  host: process.env.DB_HOST || '',
  port: process.env.DB_PORT || '',
  user: process.env.DB_USER || '',
  password: process.env.DB_USER_PWD || '',
}