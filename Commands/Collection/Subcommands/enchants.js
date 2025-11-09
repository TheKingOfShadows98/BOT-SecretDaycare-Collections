import { SlashCommandSubcommandBuilder, MessageFlags } from "discord.js";
import { blank_embed } from "../../../Utilities/embeds.js";
import { enchants } from "../../../data/enchants.js";
const enchant = {};

enchant.command = new SlashCommandSubcommandBuilder()
.setName('enchants')
.setDescription('View all enchants in the pool')

enchant.execute = async (interaction) => {

    let  embs = [];
    await interaction.deferReply({ flags: MessageFlags.Ephemeral });
    for (let i = 0; i < enchants.length && i < 10 ; i++) {
        const enchant = enchants[i];
        const embed = blank_embed();
        embed.setTitle(enchant.name);
        embed.setDescription(`> ${enchant.description}`);
        embs.push(embed);
    }
    await interaction.followUp({embeds:embs, flags: MessageFlags.Ephemeral});
}

export {enchant}