var amqp = require('amqplib/callback_api')

module.exports = (callback) => {
  amqp.connect("amqp://guest:bh331g49_bh34d4gv0j3g00aqhjsg@direct.labs.play-with-docker.com/guest"  ,
    (error, conection) => {
    if (error) {
      throw new Error(error);
    }
    callback(conection);
  })
}
