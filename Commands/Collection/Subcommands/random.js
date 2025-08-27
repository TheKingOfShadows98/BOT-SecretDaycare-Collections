import { SlashCommandSubcommandBuilder , EmbedBuilder} from "discord.js";
import { getRandomInt, Dice } from "../../../Utilities/maths.js";
import { Diaper } from "../../../data/diapers.js";
import { addNewItem } from "../../../data/users.js";
import { diaper_Names, getQualityname} from "../../../data/names.js";

export const subCommand = new SlashCommandSubcommandBuilder()
.setName('random')
.setDescription('Get a random Collection')


export const execute = async (interaction) => {
    
    const embed = new EmbedBuilder()
    .setColor('#ffd476')
    const diaper = new Diaper();
    console.log(diaper);
    addNewItem(interaction.user.id, diaper);
    const message = `${diaper.show()}`;

    let quality_label = getQualityname(diaper.calidad);
    embed.setTitle(`${quality_label} ${diaper.nombre}`);
    embed.setDescription(message);
    interaction.reply({embeds:[embed]});

}

