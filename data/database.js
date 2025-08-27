import fs from 'fs/promises';
import path from 'path';
import { json } from 'stream/consumers';
import { fileURLToPath } from 'url';

// Define __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the db.json file
const DB_PATH = path.join(__dirname, 'db.json');

/**
 * Saves an array of objects to db.json.
 * @param {Object} data - The array of objects to save.
 * @returns {Promise<{success: boolean, message: string}>} - Result of the save operation.
 */
export async function saveToJsonDb(data) {
  try {
    const jsonData = JSON.stringify(data, null, 2);
    
    console.log(jsonData);
    // Write updated data to db.json
    await fs.writeFile(DB_PATH, jsonData, 'utf-8');

    return {
      success: true,
      message: 'Data successfully saved to db.json',
    };
  } catch (error) {
    console.log(error);
    console.error('Error saving to db.json:', error);
    return {
      success: false,
      message: `Failed to save data: ${error.message}`,
    };
  }
}

/**
 * Reads the current data from db.json.
 * @returns {Promise<{success: boolean, data: Array<Object>, message: string}>} - Current data or error.
 */
export async function readJsonDb() {
  try {
    const fileContent = await fs.readFile(DB_PATH, 'utf-8');
    return JSON.parse(fileContent);
    
  } catch (error) {
    console.log(error);
    if (error.code === 'ENOENT') {
      
      return {
        success: true,
        data: [],
        message: 'db.json does not exist, returning empty array',
      };
    }
    console.error('Error reading db.json:', error);
    return {
      success: false,
      message: `Failed to read data: ${error.message}`,
    };
  }
}