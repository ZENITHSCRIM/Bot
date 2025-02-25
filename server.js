const express = require("express");
const { Client, GatewayIntentBits } = require("discord.js");

const app = express();
const bot = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

const TOKEN = "MTM0Mzg0MzQ2ODk4Nzk5NDE0Mw.GuMdX_.1IpFPgnYPgFsdfb7e3ChJo4CfKQIiUnDg4pYr4";
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
