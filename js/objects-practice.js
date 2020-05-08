(function() {
    "use strict";

// var dogs is in an array to be able to use a for loop
var dogs = [
    {
        name: 'Bella',
        breed: 'German-Shepard',
        weightInPounds: 60,
        age: 3,
        color: 'Black',
        sterilized: true,
        shotRecords: {
            typeOfShot: 'De-wormer',
            date: '03-12-2018',
            }
    },
    {
        name: 'Tila',
        breed: 'Chi-Weenie',
        weightInPounds: 10,
        age: 9,
        color: 'Brown',
        sterilized: true,
        shotRecords: {
            typeOfShot: 'De-wormer',
            date: '04-14-2012',
        }
    },{
        name: 'Wasabi',
        breed: 'German-husky',
        weightInPounds: 20,
        age: 2,
        color: 'White-black',
        sterilized: false,
    }
];

for(var i = 0; i < dogs.length; i++) {
    console.log("Dog name: " + dogs[i].name + " Dog's age: " + dogs[i].age);
}

// below has var dog without it being in an array. I use console log w/o a
// for loop to display info that i want

    //
    // var dogs =
    //     {
    //         name: 'Bella',
    //         breed: 'German-Shepard',
    //         weightInPounds: 60,
    //         age: 3,
    //         color: 'Black',
    //         sterilized: true,
    //         shotRecords: {
    //             typeOfShot: 'De-wormer',
    //             date: '03-12-2018',
    //         }
    //     };
    //
    // console.log("Dog name: " + dogs.name + " Dog's age: " + dogs.age + " Date of shot: " + dogs.shotRecords.date)






dogs.bark = function() {
    return 'Woof!';
};

console.log(dogs.bark());


dogs.getOlder = function() {
    return dogs['age'];
    };

console.log(dogs.getOlder())

})();