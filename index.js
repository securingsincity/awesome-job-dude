#!/usr/bin/env node
var say = require('say');
var chalk = require('chalk');
var figlet = require('figlet');

figlet('Awesome!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(chalk.bgGreen(data));
});

say.speak('Alex',"YOU'RE AWESOME DUDE");