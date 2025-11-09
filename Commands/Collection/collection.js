import { SlashCommandBuilder } from "discord.js";
import { getAllSubcommands, getAllSubcommandsExecuters } from "../CommandReaders.js";
import { curses } from "./Subcommands/curses.js";
import { view } from "./Subcommands/view.js";

const CollectionCommand = {}
const subcommands = {}
subcommands[curses.command.name] = curses;
subcommands[view.command.name] = view;

CollectionCommand.commandBuilder = new SlashCommandBuilder()
    .setName('collection')
    .setNameLocalization('es-ES', 'coleccion')
    .setDescription('Gacha command')
    .setDescriptionLocalization('es-ES', 'Comando para los vicios').addSubcommand(curses.command);


CollectionCommand.execute = async (interaction) => {
    const subcommand = interaction.options.getSubcommand();
    console.log(subcommands);
        if(subcommand != null){
            
            await subcommands[subcommand].execute(interaction);
            console.log("MIRA SPIRIT ESTAS");
            return;
        }
        
}
export{CollectionCommand};
