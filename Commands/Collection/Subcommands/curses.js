import { SlashCommandSubcommandBuilder , MessageFlags} from "discord.js";
import { blank_embed } from "../../../Utilities/embeds.js";
import { CURSES } from "../../../data/curses.js";
 const curses ={}

curses.command = new SlashCommandSubcommandBuilder()
.setName('curses')
.setDescription('View all curses in the pool')


curses.execute = async (interaction) => {
    let  embs = [];
    await interaction.deferReply({ flags: MessageFlags.Ephemeral });
    for (let i = 0; i < CURSES.length && i < 10 ; i++) {
        const curse = CURSES[i];
        const embed = blank_embed();
        embed.setTitle(curse.name);
        embed.setDescription(`> ${curse.description}`);
        embs.push(embed);
    }
    const inicio = performance.now();
    await interaction.followUp({embeds:embs, flags: MessageFlags.Ephemeral});
    const fin = performance.now();
      const tiempo = fin - inicio;
    console.log(`El promise se resolvió en ${tiempo.toFixed(2)} ms`);
}
export {curses};