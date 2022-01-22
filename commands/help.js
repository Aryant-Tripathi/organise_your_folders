// Help implemennted 
let fs = require("fs");
let path = require("path");
function helpFn() 
{
    console.log(`
    List of All the commands are:
                node main.js tree "directorypath"
                node main.js organize "directorypath "
                node main.js help
                `);
}

module.exports={
    helpKey: helpFn
}