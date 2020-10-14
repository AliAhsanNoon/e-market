const mongoose = require('mongoose');
const db = mongoose.connection;
mongoose.connect('mongodb://localhost:27017/e-market', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

db.on('error', console.error.bind(console, 'database connection error'));
db.once('open', function() {
  console.log('database connection is successful!');
});