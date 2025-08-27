import { SlashCommandBuilder } from "discord.js";
import { getAllSubcommands, getAllSubcommandsExecuters } from "../CommandReaders.js";
import { curses } from "./Subcommands/curses.js";

const CollectionCommand = {}
const subcommand = {}
subcommand[curses.command.name] = curses;

CollectionCommand.commandBuilder = new SlashCommandBuilder()
    .setName('collection')
    .setNameLocalization('es-ES', 'coleccion')
    .setDescription('Gacha command')
    .setDescriptionLocalization('es-ES', 'Comando para los vicios').addSubcommand(curses.command);


CollectionCommand.execute = async (interaction) => {
    const subcommand = interaction.options.getSubcommand();
        if(subcommand != null){
            await subcommand[subcommand].execute(interaction);
            return;
        }
        
}
export{CollectionCommand};
