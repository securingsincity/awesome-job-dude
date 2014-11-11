#!/usr/bin/env node
var say = require('say'),
 chalk = require('chalk'),
 _ = require('lodash'),
 text = require('./text.json'),
 figlet = require('figlet');


var finalText = randomFromList(text);
figlet(finalText.text, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(chalk.bgGreen(data));
});

say.speak('Alex',finalText.voiceText);

function randomFromList(list) {
  return list[_.random(list.length - 1)];
}