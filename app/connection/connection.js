var amqp = require('amqplib/callback_api')

module.exports = (callback) => {
  amqp.connect("amqp://guest:direct.labs.play-with-docker.com/guest"  ,
    (error, conection) => {
    if (error) {
      throw new Error(error);
    }
    callback(conection);
  })
}
