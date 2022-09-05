
export function ArabicToRoman(num: number):string {
    let result: string ="";
    const Arabic: number []= [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const Roman: string[] = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];

    for (let i = 0; num  ; i++)
    while (num >= Arabic[i]){
        result += Roman[i];
        num -= Arabic[i];
    }

    return result
}