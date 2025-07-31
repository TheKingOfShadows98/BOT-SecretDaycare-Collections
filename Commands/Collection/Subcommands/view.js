import { SlashCommandSubcommandBuilder } from "discord.js";
import { GetItems } from "../../../data/users.js";
import { blank_embed } from "../../../Utilities/embeds.js";
const subCommand = new SlashCommandSubcommandBuilder()
.setName('view')
.setDescription('view all your collections')


const execute = async (interaction) => {
    const collection = GetItems(interaction.user.id);
    let message = '';
    const embeds = [];
    for (let index = 0; index < collection.length; index++) {
        const item = collection[index];
        message += `**atributos**\n
        > lindura: ${item.cuteness}
        > grosor: ${item.thickness}
        > absorbencia: ${item.absorbency}\n`
        if(item.enchants.length > 0){
            message += `
            **encantamientos:**\n
            `
        }

        for(let i = 0; i < item.enchants; i ++){
            const enchant = item.enchants[i];
            message += `> ${enchant} \n`;
        }
        if(item.curses.length > 0){
            message+= `**maldiciones:** \n`;
        }

        for(let i = 0; i < item.curses; i ++){
            const curse = item.curses[i];
            message += `> ${curse} \n`;
        }
        const embed = blank_embed()
        .setTitle(item.name)
        .setDescription(message)
        embed.setColor(0xf7b9ff)
        embeds.push(embed);
    }
    await interaction.reply({embeds: embeds});
}

export {subCommand, execute}