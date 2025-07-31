import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Obtenemos __dirname en un módulo ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * 
 * @param {string} main_command_path
 * @returns {Array[Object]} - Array of Object (Subcomand y Execute)
 */

export async function getAllSubcommands(main_command_path){

    const SubCommandsFolder = path.join(main_command_path,'SubCommands');

    const subCommandFiles = fs.readdirSync(path.join(__dirname,SubCommandsFolder)).filter(file => file.endsWith('.js'));
    const SubCommands = [];
    for (const file of subCommandFiles) {
        const filePath = path.join(SubCommandsFolder, file);
        const {subCommand} = await import(`./${filePath}`);
        SubCommands.push(subCommand);
    }
    return SubCommands;
}

export async function getAllSubcommandsExecuters(main_command_path){

    const SubCommandsFolder = path.join(main_command_path,'SubCommands');

    const subCommandFiles = fs.readdirSync(path.join(__dirname,SubCommandsFolder)).filter(file => file.endsWith('.js'));
    const SubCommands = [];
    for (const file of subCommandFiles) {
        const filePath = path.join(SubCommandsFolder, file);
        const {subCommand,execute} = await import(`./${filePath}`);
        SubCommands[subCommand.name] = execute;
    }
    return SubCommands;
}

export async function GetAllCommands(command_callback){
    const foldersPath = path.join('./Commands');
    const CommandsFolders = fs.readdirSync(foldersPath).filter(file => !file.endsWith('.js'));
    for (const folder of CommandsFolders) {
        const commandPath = path.join(foldersPath, folder);
        const mainCommands = fs.readdirSync(commandPath).filter(file => file.endsWith('.js'));
        
        const filePath = path.join(commandPath, mainCommands[0]);
        
        const {command,execute} = await import(`./${path.join(folder,mainCommands[0])}`);

        command_callback(command, execute);
        
    }
}
export async function GetAllCommandsData(){
    
}
