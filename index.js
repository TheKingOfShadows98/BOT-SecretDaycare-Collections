import { setupClient } from './discord_connection.js'
import { init } from './data/users.js'


(await init());
const client = setupClient();

