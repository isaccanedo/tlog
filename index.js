var chalk = require('chalk');
var util = require('util');

var map = {
    '[E]': [ '', 'red' ],       // error
    '[W]': [ '', 'yellow' ],    // warning
    '[N]': [ 'cyan', '' ],    // notice
    '[I]': [ 'green', '' ],      // info
    '[D]': [ '', 'gray' ]       // debug
};

module.exports = function(){
    var msg = util.format.apply(util, arguments);
    var tag = msg.substring(0, 3);
    if(map.hasOwnProperty(tag)){
        var rest = msg.substring(3);
        var tagStyle = map[tag][0];
        var msgStyle = map[tag][1];
        if(tagStyle){
            tag = chalk[tagStyle](tag);
        }
        msg = tag + rest;
        if(msgStyle){
            msg = chalk[msgStyle](msg);
        }
    }
    console.error(msg);
};