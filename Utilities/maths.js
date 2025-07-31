export const getRandomInt = (min, max) => {
    const average = max - min;
    const result = min +  Math.floor(Math.random() * average);
    return result;
}

export const Dice = (faces = 6) => getRandomInt(1, faces);