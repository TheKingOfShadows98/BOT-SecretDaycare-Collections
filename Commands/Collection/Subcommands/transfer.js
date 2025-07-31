import { SlashCommandSubcommandBuilder } from "discord.js";

const subCommand = new SlashCommandSubcommandBuilder()
.setName('transfer')
.setDescription('transfer item to other user')


const execute = async (interaction) => {
    
}

export {subCommand, execute}