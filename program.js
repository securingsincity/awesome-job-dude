var execute = require('./execute'),
 _ = require('lodash'),
 text = require('./text.json'),
 program = require('commander'),
 randomFromList = require('./random')
var pjson = require('./package.json');


module.exports = function() {
  program
    .version(pjson.version)
    .option('-y, --ytmnd', 'You the man now dawg')
    .option('-k, --killinit', 'Killing it')
    .option('-a, --awesome', 'Awesome')
    .option('--hang', 'Hang In there')
    .option('--karate', 'The Karate Kid')
    .option('-b, --beef', 'BEEF')
    .option('-o, --otmop', 'On The Might Of Princes')
    .option('-c, --crushit', 'Crushing it')
    .option('-s, --stoked', 'STOKED')
    .parse(process.argv);

  var finalText = randomFromList(text);
  if (program.ytmnd) finalText  = _.where(text, { 'key': "ytmnd" })[0];
  if (program.awesome) finalText  = _.where(text, { 'key': "awesome" })[0];
  if (program.hang) finalText  = _.where(text, { 'key': "hang" })[0];
  if (program.killinit) finalText  = _.where(text, { 'key': "killinit" })[0];
  if (program.beef) finalText  = _.where(text, { 'key': "beef" })[0];
  if (program.otmop) finalText  = _.where(text, { 'key': "otmop" })[0];
  if (program.crushit) finalText  = _.where(text, { 'key': "crushingit" })[0];
  if (program.karate) finalText  = _.where(text, { 'key': "karatekid" })[0];
  if (program.stoked) finalText  = _.where(text, { 'key': "stoked" })[0];
  execute(finalText);
}
  