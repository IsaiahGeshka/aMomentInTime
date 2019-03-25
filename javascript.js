const chalk = require('chalk');
 


var moment = require('moment');

var myDate = new Date();
var clD = moment(myDate).format("LL");

console.log(chalk.green.underline(clD));


greetText = () => {
    const now = moment()
    const currentHour = now.hour()
if ( currentHour < 12 ) {
    // Before 12PM
    return chalk.bold.red.underline('Good morning');
  } else if ( currentHour < 17 ) {
    // After 12pm, before 6PM
    return chalk.underline.blue('Good afternoon');
  } else {
    // After 6PM
    return chalk.italic.yellowgreen('Good evening');
  }
}
console.log(greetText(moment));