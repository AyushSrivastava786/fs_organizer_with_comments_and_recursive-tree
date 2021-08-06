
let fs=require("fs");
let path=require("path");

// writing function for viewing in a tree format 
function tree(pth,fileIndent,folderIndent)
{   
    if(fs.existsSync(pth)==false){
        pth=process.cwd();
    }
  //reding files and folders
    let allfilesfolders = fs.readdirSync(pth)

    for(let i=0;i<allfilesfolders.length;i++)
    {  // making content path
        let contentPath=path.join(pth,allfilesfolders[i]);
        // checking whether it is file or folder 
        if(fs.lstatSync(contentPath).isFile()==true)
        {
           console.log(fileIndent+"|___ "+allfilesfolders[i]);
        }
        else
         {  //recursively calling tree again  
            console.log();
            console.log(folderIndent+allfilesfolders[i]);
            tree(contentPath,folderIndent+fileIndent+"  ",folderIndent+"   ");
        }
    }

}

module.exports={
    treefn:tree
}


