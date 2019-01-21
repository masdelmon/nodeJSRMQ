var amqp = require('amqplib/callback_api')

module.exports = (callback) => {
  amqp.connect('amqp://' + process.env.CLOUDAMQP_URL + "?heartbeat=60"  ,
    (error, conection) => {
    if (error) {
      throw new Error(error);
    }
    callback(conection);
  })
}
