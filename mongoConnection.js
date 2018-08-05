const mongoose = require('mongoose')

const MONGO_URI ='mongodb://localhost:27017/reactrelay'


mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI, { useNewUrlParser: true });
mongoose.connection
  .once('open', () => console.log('Connection is MongoDB is established'))
  .on('error', error => console.warn('Error connecting to mongodb'));

module.exports = mongoose;
