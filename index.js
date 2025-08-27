import { setupClient } from './discord_connection.js'
import { command } from './Commands/Collection/collection.js'
import { init } from './data/users.js'


(await init());
const client = setupClient();

