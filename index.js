const { Client, GatewayIntentBits } = require("discord.js");
const QRCode = require("qrcode");
const fs = require("fs");
const path = require("path");
require("dotenv").config();
const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildVoiceStates,
  ],
});

client.on("ready", () => {
  console.log("Client is ready");
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;
  const { commandName } = interaction;

  if (commandName === "create") {
    const message = interaction.options.getString("message");
    try {
      const filepath = path.join(__dirname, `qrcode-${Date.now()}.png`);

      await QRCode.toFile(filepath, message);

      await interaction.reply({ files: [filepath] });

      fs.unlinkSync(filepath);
    } catch (err) {
      console.error(err);
      interaction.reply(
        "Oops, an error occurred while generating the QR code."
      );
    }
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (!message.content.startsWith("!")) {
    let convolog = [{ role: "system", content: "You are a sarcastic chatbot" }];
    convolog.push({
      role: "user",
      content: message.content,
    });

    await message.channel.sendTyping();

    try {
      const stream = await groq.chat.completions.create({
        messages: convolog,
        model: "llama3-8b-8192",
        stream: true,
      });

      let aiMessage = "";
      for await (const chunk of stream) {
        const content = chunk.choices[0]?.delta?.content || "";
        aiMessage += content;
        process.stdout.write(content);
      }

      message.reply(aiMessage);
    } catch (error) {
      console.error("Error generating AI response:", error);
      message.reply("Sorry, I couldn't process that.");
    }
  }
});

client.login(process.env.TOKEN);
