import { Client, GatewayIntentBits, IntentsBitField } from "discord.js"
import dotenv from 'dotenv'

dotenv.config()
 
const setupClient = () => {
    // An instance of the Discord Client.
    const client = new Client ({
        intents: [
            IntentsBitField.Flags.Guilds,
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.MessageContent,
        ]
    })

    return client
}

export { setupClient }


