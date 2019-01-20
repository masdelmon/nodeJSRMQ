var amqp = require('amqplib/callback_api')

module.exports = (callback) => {
  amqp.connect('amqp://guest:guest@http://ip172-18-0-20-bh1k7ek9cs9g00d1molg-8080.direct.labs.play-with-docker.com:15672',
    (error, conection) => {
    if (error) {
      throw new Error(error);
    }
    callback(conection);
  })
}
