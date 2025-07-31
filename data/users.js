const temporal_users = []

export function addNewItem(user_id, item){
    if(temporal_users[user_id] == undefined) temporal_users[user_id] = [];
    temporal_users[user_id].push(item);
}

export function GetItems(user_id){
    if(temporal_users[user_id] == undefined) temporal_users[user_id] = [];
    return temporal_users[user_id];
}

export function RemoveItem(user_id, item){
    if(temporal_users[user_id] == undefined) temporal_users[user_id] = [];
    let index = temporal_users[user_id].findIndex(x => x.uid == item.uid);
    if(index < 0) return false;
}
