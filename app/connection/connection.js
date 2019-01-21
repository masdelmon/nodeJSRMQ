var amqp = require('amqplib/callback_api')

module.exports = (callback) => {
  amqp.connect("amqp://guest:ip172-18-0-16-bh331g49cs9g00eamsdg@direct.labs.play-with-docker.com/guest"  ,
    (error, conection) => {
    if (error) {
      throw new Error(error);
    }
    callback(conection);
  })
}
