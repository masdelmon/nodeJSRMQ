var amqp = require('amqplib/callback_api')

module.exports = (callback) => {
  amqp.connect('amqp://guest:guest@ip172-18-0-12-bh2u278v0j3g00aqh9j0-8080.direct.labs.play-with-docker.com:15672',
    (error, conection) => {
    if (error) {
      throw new Error(error);
    }
    callback(conection);
  })
}
