import { Client, Collection, Events, IntentsBitField, GatewayIntentBits, MessageFlags } from 'discord.js';
import dotenv from 'dotenv';
import { GetAllCommands } from './Commands/CommandReaders.js';

dotenv.config()
 
const setupClient = () => {
    // An instance of the Discord Client.
    const client = new Client ({
        intents: [
            IntentsBitField.Flags.Guilds,
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.MessageContent,
        ]
    })
    // COMMAND SECTION
    client.commands = new Collection();
    // Command Callback
    function command_handler(data, execute){
        if (data && execute){
        client.commands.set(data.name, {data,execute});
        } else {
        console.log(`[WARNING] The command is missing a required "data" or "execute" property.`);
        }
    }

    GetAllCommands(command_handler);
    // SUBSCRIVE FUNCTION OF COMMANDS
    client.on(Events.InteractionCreate, async interaction => {
        if (!interaction.isChatInputCommand()) return;
        const command = client.commands.get(interaction.commandName);
        if (!command) {
        console.error(`No command matching ${interaction.commandName} was found.`);
        return;
        }
        try {
            await command.execute(interaction);
        } catch (error) {
            console.error(error);
            if (interaction.replied || interaction.deferred) {
                await interaction.followUp({ content: 'There was an error while executing this command!', flags: MessageFlags.Ephemeral });
            } else {
                await interaction.reply({ content: 'There was an error while executing this command!', flags: MessageFlags.Ephemeral });
            }
        }
    });

    client.on('ready', () => {
        console.log(`Hola bebitos, ya esto conectado ${client.user.tag}`);
    });

    client.login(process.env.DISCORD_TOKEN);
    return client
}

export { setupClient}


