const express = require("express");
const { Client, GatewayIntentBits } = require("discord.js");

const app = express();
const bot = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

const TOKEN = "YOUR_BOT_TOKEN";
const CHANNEL_ID = "YOUR_CHANNEL_ID";

bot.once("ready", () => {
    console.log(`${bot.user.tag} is online!`);
});

bot.login(TOKEN);

app.use(express.static("public"));

app.post("/send-message", async (req, res) => {
    const channel = await bot.channels.fetch(CHANNEL_ID);
    if (channel) {
        channel.send("Hello from Glitch!");
        res.send("Message sent!");
    } else {
        res.send("Channel not found!");
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
