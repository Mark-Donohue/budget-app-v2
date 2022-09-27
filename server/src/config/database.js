// Credit to Gustavo Domaradzki 
module.exports = (mongoose, config) => {
  const database = mongoose.connection;
  mongoose.Promise = Promise;

  mongoose.connect(config.database, {
    useMongoClient: true,
    promiseLibrary: global.Promise
  });

  database.on('error', error => console.log(`Connection to budget-app database failed: ${error}`));
  database.on('connected', () => console.log('Connected to budget-app database.'));
  database.on('disconnected', () => console.log('Disconnected from budget-app database.'));

  process.on('SIGINT', () => {
    database.close(() => {
      console.log('budget-app database terminated, connection closed.');
      process.exit(0);
    })
  });
};
