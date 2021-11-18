const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

const amqp = require("amqplib/callback_api");

amqp.connect("amqp://localhost", (error0, connection) => {
  if (error0) console.log(error0);
  connection.createChannel((error1, channel) => {
    if (error1) console.log(error1);

    app.get("/dialogs", (req, res, next) => {
      channel.assertQueue(
        "",
        {
          exclusive: true,
        },
        (error2, q) => {
          if (error2) console.log(error2);
          const correlationId = "112";
          channel.consume(
            q.queue,
            (msg) => {
              if (msg.properties.correlationId == correlationId) {
                res.json(JSON.parse(msg.content));
              }
            },
            {
              noAck: true,
            }
          );
          channel.sendToQueue("dialogs__get", Buffer.from("get dialogs"), {
            correlationId: correlationId,
            replyTo: q.queue,
          });
        }
      );
    });

    app.post("/dialogs", (req, res) => {
      channel.assertQueue(
        "",
        {
          exclusive: true,
        },
        (error2, q) => {
          if (error2) console.log(error2);

          const correlationId = "111";

          channel.consume(
            q.queue,
            (msg) => {
              if (msg.properties.correlationId == correlationId) {
                res.send(msg.content);
              }
            },
            {
              noAck: true,
            }
          );
          channel.sendToQueue(
            "dialogs__post",
            Buffer.from(JSON.stringify(req.body)),
            {
              correlationId: correlationId,
              replyTo: q.queue,
            }
          );
        }
      );
    });
    app.listen(8080);
  });
});
