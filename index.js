#!/usr/bin/env node
var say = require('say'),
 chalk = require('chalk'),
 _ = require('lodash'),
 text = require('./text.json'),
 program = require('commander'),
 figlet = require('figlet');
var pjson = require('./package.json');

  program
    .version(pjson.version)
    .option('-y, --ytmnd', 'You the man now dawg')
    .option('-k, --killinit', 'Killing it')
    .option('-a, --awesome', 'Awesome')
    .option('--hang', 'Hang In there')
    .option('-b, --beef', 'BEEF')
    .option('-o, --otmop', 'On The Might Of Princes')
    .option('-c, --crushit', 'Crushing it')
    .parse(process.argv);

  var finalText = randomFromList(text);

  if (program.ytmnd) finalText  = _.where(text, { 'key': "ytmnd" })[0];
  if (program.awesome) finalText  = _.where(text, { 'key': "awesome" })[0];
  if (program.hang) finalText  = _.where(text, { 'key': "hang" })[0];
  if (program.killinit) finalText  = _.where(text, { 'key': "killinit" })[0];
  if (program.beef) finalText  = _.where(text, { 'key': "beef" })[0];
  if (program.otmop) finalText  = _.where(text, { 'key': "otmop" })[0];
  if (program.crushit) finalText  = _.where(text, { 'key': "crushingit" })[0];

  execute(finalText);

  function execute(finalText) {
    figlet(finalText.text, function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(chalk.bgGreen(data));
    });

    say.speak('Alex',finalText.voiceText); 
  }

  function randomFromList(list) {
    return list[_.random(list.length - 1)];
  }
