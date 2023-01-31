const mongoose = require('mongoose')
const host = process.env.DB_HOST || '127.0.0.1'
const dbURI =`mongodb://${host}/travlr`
const db = mongoose.connection

// avoid 'current Server Discovery and Monitoring engine is deprecated'
// mongoose.set('useUnifiedTopology', true);

const connect = () => {
    setTimeout(() => mongoose.connect(dbURI, {
        useNewUrlParser: true,
        useCreateIndex: true, 
        useUnifiedTopology: true,
    }), 1000);
}

db.on('connected', () => {
  console.log(`Mongoose connected to ${dbURI}`);
});
db.on('error', err => {
  console.log(`Mongoose connection error: ${ err }`)
});
db.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

const gracefulShutdown = (msg, callback) => {
  mongoose.connection.close( () => {
    console.log(`Mongoose disconnected through ${msg}`);
    callback();
  });
};

// For nodemon restarts                                 
process.once('SIGUSR2', () => {
  gracefulShutdown('nodemon restart', () => {
    process.kill(process.pid, 'SIGUSR2');
  });
});
// For app termination
process.on('SIGINT', () => {
  gracefulShutdown('app termination', () => {
    process.exit(0);
  });
});
// For Heroku app termination
process.on('SIGTERM', () => {
  gracefulShutdown('Heroku app shutdown', () => {
    process.exit(0);
  });
});

// Bring in the mongoose schema
require('./travlr');