var amqp = require('amqplib/callback_api')

module.exports = (callback) => {
  amqp.connect('amqp://guest:guest@ip172-18-0-30-bh2qa70v0j3g00foa5ag-8080.direct.labs.play-with-docker.com:5672',
    (error, conection) => {
    if (error) {
      throw new Error(error);
    }
    callback(conection);
  })
}
