var say = require('say'),
chalk = require('chalk'),
exec = require('child_process').exec,
figlet = require('figlet');

module.exports = function(finalText) {
  figlet(finalText.text, function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return false;
      }
      console.log(chalk.bgGreen(data));
      return true;
  });
  if (finalText.link) {
    exec('open ' + finalText.link);
    return true;
  } else {
    say.speak('Alex',finalText.voiceText);   
    return true;
  }
  
}