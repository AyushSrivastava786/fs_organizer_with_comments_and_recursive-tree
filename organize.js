// writing fuction for organizing files
let fs=require("fs");
let path=require("path");
let utilityObj = require("./filetypes");

function organize(pth)
{
  //checking whether the path exists or not
   let doesExist = fs.existsSync(pth);
   
   if(doesExist==false)
   {   //if not then work in current directory
       pth=process.cwd();
   }

   //reading all contents from pth
   let allfilesfolders = fs.readdirSync(pth);
   
   //iterating over all contents
   for(let i=0;i<allfilesfolders.length;i++)
   {   
    //  making full path   
      let file=path.join(pth,allfilesfolders[i]);
    
      //checking if it is file or not
      let isafile=fs.lstatSync(file);
      if(isafile.isFile())
      { //  matching it with utility 
       // console.log(path.basename(file));
          let ext=path.extname(file).slice(1);
          let state=0;
          let type="others";
         for(let j in utilityObj.utility)
         {
             for(let k in utilityObj.utility[j])
             {
                 if(ext== utilityObj.utility[j][k])
                 {  state=1;
                    type=j;
               //      console.log(utilityObj.utility[j][k]);
                     break;
                 }
             }
             if(state==1)
             {
                 break;
             }
         }
        
        //  now sending file to their deserving directory 
        sendFiles(pth,allfilesfolders[i],type,file);

      }

      
   }

}

function sendFiles(pth,fileBaseName,type,filesrc)
{  //making dest path
    let toPath = path.join(pth,"organized_files");
    //checking if "organized_files" already exists if not create it

    if(fs.existsSync(toPath)==false)
    {  console.log("creating organized_files directory");
        fs.mkdirSync(toPath);
    }

    //checking if type path already exists if not create
    toPath=path.join(toPath,type);

    if(fs.existsSync(toPath)==false)
    {   console.log("creating "+type+" directory");
        fs.mkdirSync(toPath);
    }
    
    //putting file in it
     let filedest = path.join(toPath,fileBaseName);
     
     console.log("copying "+fileBaseName+" to "+type);
     fs.copyFileSync(filesrc,filedest);


}

module.exports={
    organizefn:organize
}