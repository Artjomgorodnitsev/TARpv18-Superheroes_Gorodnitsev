var superheroes = require('superheroes');
var villians = require('supervillains');
var mySuperheroName = superheroes.random();
var RandomVillian = villians.random();
var AllVillian = villians.all;
console.log("Random hero:", mySuperheroName);
console.log("Random villain:", RandomVillian);
console.log("All Villain:", AllVillian);