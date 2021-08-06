//first taking input from user and slicing it to remove first few useless parts
let inputArr = process.argv.slice(2);

// importing other files
let helpObj = require("./help");
let treeObj = require("./tree");
let organizeObj = require("./organize");

if(inputArr[0]==undefined)
{
    console.log(`Enter node main.js help for viewing commands`);
}
//deciding what to do
switch(inputArr[0])
{
    case "help" :
        helpObj.helpfn();
        break;
    
    case "organize" :
        organizeObj.organizefn(inputArr[1]);
        break;
    
    case "tree" :
        treeObj.treefn(inputArr[1],"     ","      ");


}