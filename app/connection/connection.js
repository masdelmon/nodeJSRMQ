var amqp = require('amqplib/callback_api')

module.exports = (callback) => {
  amqp.connect('amqp://guest:guest@192.168.0.29',
    (error, conection) => {
    if (error) {
      throw new Error(error);
    }
    callback(conection);
  })
}
