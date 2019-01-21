var amqp = require('amqplib/callback_api')

module.exports = (callback) => {
  amqp.connect('amqp://guest:guest@172.17.0.2:5672',
    (error, conection) => {
    if (error) {
      throw new Error(error);
    }
    callback(conection);
  })
}
