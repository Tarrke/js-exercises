console.log("Hello number");

var number = 'test';
while( isNaN( number )) {
    number = parseInt(prompt('Enter a number'), 10);
    if( number > 999 ) {
        alert("This is working with numbers < 1000 only.");
        number = 'test';
    }
    if( number < 1 ) {
        alert("This is working with number > 0 only.");
    }
}

console.log(number);

// Looking for units
units = number % 10;

// looking for tenth
tenth = ((number - units) % 100) / 10;

// looking for hundredth
hundredth = ((number - tenth*10 - units) % 1000) / 100;

var unitsToString = {
    0: 'zero',
    1: 'un',
    2: 'deux',
    3: 'trois',
    4: 'quatre',
    5: 'cinq',
    6: 'six',
    7: 'sept',
    8: 'huit',
    9: 'neuf',
    10: 'dix',
    11: 'onze',
    12: 'douze',
    13: 'treize',
    14: 'quatorze',
    15: 'quinze',
    16: 'seize',
    17: 'dix-sept',
    18: 'dix-huit',
    19: 'dix-neuf',
};

var tenthToString = {
    1: 'dix',
    2: 'vingt',
    3: 'trente',
    4: 'quarante',
    5: 'cinquante',
    6: 'soixante',
    7: 'soixante-dix',
    8: 'quatre-vingt',
    9: 'quatre-vingt-dix'
};

var hundred = 'cent';

console.log(units + ' - ' + tenth + ' - ' + hundredth);

rep = '';

if (hundredth > 0) {
    if(hundredth === 1) {
        rep += hundred;
    } else {
        rep += unitsToString[hundredth] + '-' + hundred;
    }
}

if( tenth > 0) {
    if( tenth === 1) {
        rep += '-' + unitsToString[tenth*10+units]
    } else {
        rep += '-' + tenthToString[tenth];
        if( units > 0) {
            if( units === 1) {
                rep += '-et';
            }
            rep += '-' + unitsToString[units];
        }
    }
}

console.log(rep);

alert(rep);