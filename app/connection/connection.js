var amqp = require('amqplib/callback_api')

module.exports = (callback) => {
  amqp.connect("amqp://vdhanbyv:vdhanbyv@crane.rmq.cloudamqp.com:1883"  ,
    (error, conection) => {
    if (error) {
      throw new Error(error);
    }
    callback(conection);
  })
}
