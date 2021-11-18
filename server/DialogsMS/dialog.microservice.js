const amqp = require("amqplib/callback_api");
const { fullDialog } = require("./DialogsModels/fullDialog.model");
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("Users", "postgres", "root", {
  host: "localhost",
  dialect: "postgres",
});

amqp.connect("amqp://localhost", (error0, connection) => {
  if (error0) console.log(error0);
  connection.createChannel((error1, channel) => {
    if (error1) console.log(error1);

    channel.assertQueue("dialogs__get", { durable: false });
    channel.assertQueue("dialogs__post", { durable: false });

    channel.prefetch(1);

    channel.consume("dialogs__get", async (msg) => {
      const Dialogs = await getDialogs();
      channel.sendToQueue(
        msg.properties.replyTo,
        Buffer.from(JSON.stringify(Dialogs)),
        {
          correlationId: msg.properties.correlationId,
        }
      );
      channel.ack(msg);
    });

    channel.consume("dialogs__post", async (msg) => {
      await postDialog(msg.content);
      console.log(msg.properties.correlationId);
      channel.sendToQueue(
        msg.properties.replyTo,
        Buffer.from("Dialog created succesfull"),
        {
          correlationId: msg.properties.correlationId,
        }
      );

      channel.ack(msg);
    });
  });
});

async function postDialog(user) {
  await sequelize.sync();
  const _user = JSON.parse(user);
  await fullDialog.create({
    user_name: _user.user_name,
    user_role: _user.user_role,
  });
}

async function getDialogs() {
  await sequelize.sync();
  const Dialogs = await fullDialog.findAll();
  return Dialogs;
}
