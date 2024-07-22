require("dotenv/config");
const { REST, Routes } = require("discord.js");

const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
  {
    name: "create",
    description: "Creates a QR code",
    options: [
      {
        name: "message",
        type: 3, // STRING type
        description: "Message to convert to QR code",
        required: true,
      },
    ],
  },
];

const token = process.env.TOKEN;

const clientId = process.env.CLIENTID;

const rest = new REST({ version: "10" }).setToken(token);

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    const data = await rest.put(Routes.applicationCommands(clientId), {
      body: commands,
    });

    console.log("Successfully reloaded application (/) commands.");
    console.log(data);
  } catch (error) {
    console.error("Error reloading application (/) commands:", error);
  }
})();
