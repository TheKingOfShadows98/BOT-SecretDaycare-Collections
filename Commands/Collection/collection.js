import { SlashCommandBuilder } from "discord.js";
import { getAllSubcommands, getAllSubcommandsExecuters } from "../CommandReaders.js";

export const command = (await getCommand());

async function  getCommand(){
    const subCommandsData = await getAllSubcommands('./Collection');
    const command = new SlashCommandBuilder()
    .setName('collection')
    .setNameLocalization('es-ES', 'coleccion')
    .setDescription('Gacha command')
    .setDescriptionLocalization('es-ES', 'Comando para los vicios')
    for ( let i = 0; i < subCommandsData.length; i ++) {
        const subCommand = subCommandsData[i];
        command.addSubcommand(subCommand);
    }
    return command;   
}

export const execute = async (interaction) => {
    const subcommand = interaction.options.getSubcommand();
        if(subcommand != null){
            await subCommandsExecutes[subcommand](interaction);
            return;
        }
        
}
const subCommandsExecutes = (await getAllSubcommandsExecuters('./Collection'));
