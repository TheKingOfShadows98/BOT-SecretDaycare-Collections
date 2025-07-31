import { SlashCommandSubcommandBuilder , EmbedBuilder} from "discord.js";
import { getRandomInt, Dice } from "../../../Utilities/maths.js";
import { CURSES } from "../../../data/curses.js";
import { enchants } from "../../../data/enchants.js";
import { addNewItem } from "../../../data/users.js";
import { diaper_Names, getQualityname} from "../../../data/names.js";

export const subCommand = new SlashCommandSubcommandBuilder()
.setName('random')
.setDescription('Get a random Collection')


export const execute = async (interaction) => {
    const diaper = {};
    const embed = new EmbedBuilder()
    .setColor('#ffd476')
    diaper.name = diaper_Names[getRandomInt(0, diaper_Names.length - 1) ];
    diaper.uid = crypto.randomUUID();
    diaper.cuteness = getRandomInt(0,10);
    diaper.thickness = getRandomInt(0,10);
    diaper.absorbency = getRandomInt(0,10);
    
    const free_enchants = enchants.map( x => x);
    const free_curses = CURSES.map( x => x);
    diaper.enchants = [];
    diaper.curses = [];
    
    while (Dice(1000) <= 335){
        const enchant_amount = getRandomInt(0,2);
        for (let index = 0; index < enchant_amount; index++) {
            if(free_enchants.length == 0){continue};
            const enchant = free_enchants.splice(getRandomInt(0,free_enchants.length),1)[0];
            diaper.enchants.push(enchant.name);
        }
    }
    
    if(diaper.enchants.length > 1 && diaper.curses.length < diaper.enchants.length)
        while (Dice(100) <= 80){
        const curses_amount = getRandomInt(1,2);
        for (let index = 0; index < curses_amount; index++) {
            if(free_curses.length == 0){continue};
            const curse = free_curses.splice(getRandomInt(0,free_curses.length),1)[0];
            diaper.curses.push(curse.name);
        }
    }

    diaper.quality = ((diaper.cuteness + diaper.thickness + diaper.absorbency) / 10) + (3 * diaper.enchants.length - diaper.curses.length);
    addNewItem(interaction.user.id, diaper);
    let enchantsMessage = '';
    diaper.enchants.forEach(enchant => {
        enchantsMessage += `> ${enchant}\n`
    });
    let cursesMessage = '';
    diaper.curses.forEach(curse => {
        cursesMessage += `> ${curse}\n`
    });
    const message = 
    `
    **Attributes**
    
    > Cuteness: ${diaper.cuteness}
    > Thickness: ${diaper.thickness}
    > Absorbency: ${diaper.absorbency}

    **Enchants**
    ${enchantsMessage}

    **Curses**
    ${cursesMessage}
    `;
    let quality_label = getQualityname(diaper.quality);
    embed.setTitle(`${quality_label} ${diaper.name}`);
    embed.setDescription(message);
    interaction.reply({embeds:[embed]});

}

