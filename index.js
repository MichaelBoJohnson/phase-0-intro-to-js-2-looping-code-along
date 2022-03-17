// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts){
    for (let i = 0; i < gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        
    }
    return gifts;
}

wrapGifts(gifts);

function writeCards(names, event){
    const newArr = [];
    for (let i = 0; i < names.length; i++){
        newArr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return newArr;
}

function countDown (number){
    let i = number;
    while (i > -1){
        console.log(i);
        i--;
    }
}