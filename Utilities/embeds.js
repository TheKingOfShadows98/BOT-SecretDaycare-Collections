import { EmbedBuilder } from "@discordjs/builders";


export const blank_embed = () => {
    return new EmbedBuilder()
    .setTitle('Blank')
    .setColor(0xffd476)
    .setAuthor({name:'Zoe Andy'})
    .setTimestamp()
    .setFooter({text:'seamos siempre bebitos'})
}