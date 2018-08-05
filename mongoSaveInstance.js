const db = require('./mongoConnection');

const User = require('./mongoSchema/user');
const colby = new User({
  name: 'Colby'
});

colby.save()
  .then(user => {
    console.log(user);
  })
  .then(() => {
    db.connection.close()
  });
