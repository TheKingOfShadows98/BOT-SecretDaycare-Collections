import { saveToJsonDb,readJsonDb } from "./database.js";
import { User } from "./user.js";
let database = {}

export function addNewItem(user_id, item){
    if(database.users == undefined) database.users = [];
    if(database.users[user_id] == undefined) database.users.push(new User(user_id));
    let user_index = database.users.findIndex(user => user.user_id === user_id);
    database.users[user_index].diapers.push(item);
    saveToJsonDb(database);
}



export function GetItems(user_id){
    if(database.users == undefined) database.users = [];
    if(database.users[user_id] == undefined) database.users.push(new User(user_id));
    let user_index = database.users.findIndex(user => user.user_id === user_id);
    return database.users[user_index].diapers;
}

export function RemoveItem(user_id, item){
    if(database.users == undefined) database.users = [];
    if(database.users[user_id] == undefined) database.users.push(new User(user_id));
    let user_index = database.users.findIndex(user => user.user_id === user_id);
    let index = database.users[user_index].diapers.findIndex(x => x.uid == item.uid);
    if(index < 0) return false;
    database.users[user_index].diapers = database.users[user_index].diapers.splice(index, 1);
}
export async function init(){
   database = await readJsonDb();
   console.log(database);
}