const dotenv = require('dotenv-yaml');

dotenv.config();


import app from './app'


const server = app.listen(app.get('port'))

console.log('NODE_ENV: ', process.env.NODE_ENV);

console.log('Server on port ', app.get('port'))

export {app, server}