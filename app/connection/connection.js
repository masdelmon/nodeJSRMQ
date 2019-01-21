var amqp = require('amqplib/callback_api')

module.exports = (callback) => {
  amqp.connect('amqp://guest:guest@:http://ip172-18-0-47-bh2qa70v0j3g00foa5ag-8080.direct.labs.play-with-docker.com:15672',
    (error, conection) => {
    if (error) {
      throw new Error(error);
    }
    callback(conection);
  })
}
