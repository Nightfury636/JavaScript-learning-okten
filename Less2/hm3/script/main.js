//- Логични разголуження (p.s очень не понятно )

let x = 1;

if (x !== 0) {
    console.log('true');
} else {
    console.log('false');
}

let time = 30;

if (time >= 0 && time < 15) {
    console.log('first');
} else if (time >= 15 && time < 30) {
    console.log('two');
} else if (time >= 30 && time < 45) {
    console.log('three');
} else {
    console.log('four');
}

let  day = 15;

if (day <= 10) {
    console.log('one');
} else if (day <= 20) {
    console.log('two');
} else {
    console.log('three');
}

let dayOfWeek = 3;

switch (dayOfWeek) {
    case 1:
        console.log('monday');
        break;
    case 2:
        console.log('tuesday');
        break;
    case 3:
        console.log('wednesday');
        break;
    case 4:
        console.log('thursday');
        break;
    case 5:
        console.log('friday');
        break;
    case 6:
        console.log('saturday');
        break;
    case 7:
        console.log('sunday');
        break;
    default:
        console.log('');
}

let num1 = 10;
let num2 = 15;

if (num1 > num2) {
    console.log('max.number: ' + num1);
} else if (num2 > num1) {
    console.log('max.number: ' + num2);
} else {
    console.log('number');
}