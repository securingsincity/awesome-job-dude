#!/usr/bin/env node
var say = require('say'),
 chalk = require('chalk'),
 _ = require('lodash'),
 text = require('./text.json'),
 figlet = require('figlet');
 exec = require('child_process').exec;

var finalText = randomFromList(text);
figlet(finalText.text, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(chalk.bgGreen(data));
});

if (finalText.text === 'You\'re the best') {
	exec('open https://www.youtube.com/watch?v=oomCIXGzsR0');
} else {
	say.speak('Alex',finalText.voiceText);
}

function randomFromList(list) {
  return list[_.random(list.length - 1)];
}