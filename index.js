// Require the necessary discord.js classes

const { token, pathToModel } = require('./config.json');
const { Client, GatewayIntentBits, Partials } = require('discord.js');
const {exec} = require('child_process');

const client = new Client({ intents: [GatewayIntentBits.Guilds], partials: [Partials.Channel] });
botBusy = false;
// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'server') {
		await interaction.reply('Server info.');
	} else if (commandName === 'user') {
		await interaction.reply('User info.');
	}
});
client.login(token);