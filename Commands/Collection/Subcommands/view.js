import { SlashCommandSubcommandBuilder } from "discord.js";
import { GetItems } from "../../../data/users.js";
import { blank_embed } from "../../../Utilities/embeds.js";
import { Diaper } from "../../../data/diapers.js";
const subCommand = new SlashCommandSubcommandBuilder()
.setName('view')
.setDescription('view all your collections')


const execute = async (interaction) => {
    const collection = GetItems(interaction.user.id);
    const embeds = [];
    console.log(collection);
    for (let index = 0; index < collection.length; index++) {
        const diaper = Diaper.objectFrom(collection[index]);
       
        const embed = blank_embed()
        .setTitle(diaper.nombre)
        .setDescription(diaper.show())
        embed.setColor(0xf7b9ff)
        embeds.push(embed);
    }
    await interaction.reply({embeds: embeds});
}

export {subCommand, execute}