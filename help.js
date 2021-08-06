
// this is a function for writing help command 

function help()
{
    console.log(`  Enter node main.js help for help

  Enter node main.js tree "path" for viewing directory
  
  Enter node main.js organize "path" for organizing files`);

}

// this command helps in exporting here written variables and function to wherever required
module.exports={
    helpfn:help
}