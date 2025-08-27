import { setupClient } from './discord_connection.js'
import { init } from './data/users.js'



(await runServer());

async function runServer(){
    setupClient();
    await init();
}