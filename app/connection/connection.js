var amqp = require('amqplib/callback_api')

module.exports = (callback) => {
  amqp.connect("amqp://guest:172.18.0.16/guest"  ,
    (error, conection) => {
    if (error) {
      throw new Error(error);
    }
    callback(conection);
  })
}
