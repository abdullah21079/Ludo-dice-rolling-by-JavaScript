function rollDice(){
    let randomnumber = Math.floor(Math.random() * 6) + 1;
    let imagesource = 'img/' + randomnumber + '.png';
    document.getElementById('ludo').src=imagesource;
}