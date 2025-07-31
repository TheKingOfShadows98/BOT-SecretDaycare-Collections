export const diaper_Names= [
    "Support Gamming Gear",
    "Baby Banana split",
    "Little Cars Pilot",
    "Trainning Princess",
    "Little Magic Fairy",
    "Messy Painter",
    "Squishy Bomber"
]

export const diaper_quality = [
    {min: -1, name: 'Viejo'},
    {min: 0, name: 'Nuevito'},
    {min: 3, name: 'Magico'},
    {min: 6, name: 'Mitico'},
    {min: 9, name: 'Legendario'},
    {min: 12, name: 'Radiante'}
]

export function getQualityname(quality){
    let selected = {min: -0.1, name: 'Viejo'};
    for (let i = 0; i < diaper_quality.length; i++) {
        const element = diaper_quality[i];
        if(element.min > quality){
            continue;
        }
        if (element.min > selected.min){
            selected = element;
        }
    }
    return selected.name;
}