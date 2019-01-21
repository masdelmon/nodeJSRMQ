var amqp = require('amqplib/callback_api')

module.exports = (callback) => {
  amqp.connect('amqp://guest:guest@ip172-18-0-19-bh331g49cs9g00eamsdg-8080.direct.labs.play-with-docker.com:5672',
    (error, conection) => {
    if (error) {
      throw new Error(error);
    }
    callback(conection);
  })
}
