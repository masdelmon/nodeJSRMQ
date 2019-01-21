var amqp = require('amqplib/callback_api')

module.exports = (callback) => {
  amqp.connect("amqp://vdhanbyv:96X39wT3G1V8heUT5iCiL8XTWtIolvc0@crane.rmq.cloudamqp.com/vdhanbyv"  ,
    (error, conection) => {
    if (error) {
      throw new Error(error);
    }
    callback(conection);
  })
}
