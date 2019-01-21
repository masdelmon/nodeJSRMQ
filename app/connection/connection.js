var amqp = require('amqplib/callback_api')

module.exports = (callback) => {
  amqp.connect("amqp://guezt:bh331g49_bh34d4gv0j3g00aqhjsg@ip172-18-0-16-bh331g49cs9g00eamsdg-8080.direct.labs.play-with-docker.com/guest"  ,
    (error, conection) => {
    if (error) {
      throw new Error(error);
    }
    callback(conection);
  })
}
