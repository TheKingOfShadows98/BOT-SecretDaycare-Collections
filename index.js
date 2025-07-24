import { setupClient } from './discord_connection.js'

const client = setupClient()
client.login(process.env.DISCORD_TOKEN)

client.once('ready', () => {
    console.log('¡Bot is online!')
})

