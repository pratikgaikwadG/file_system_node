const fs = require('fs');

fs.writeFileSync("file.txt","hello from write file method \n",(err)=>{
    if(err) {
        console.log(err);
    }else {
        console.log("data written successfully");
    }
});

fs.readFile("file.txt","utf-8",(err,data)=>{
    if(err) {
        console.log(err);
    }else{
        console.log(data);
    }
});

fs.appendFileSync("file.txt","appending more data",(err)=>{
    if(err) {
        console.log(err);
    }else {
        console.log("append file successfully");
    }
});

fs.readFile("file.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});

fs.unlink("file.txt",(err)=>{
    if(err){
        console.log(err)
    }else {
        console.log("file is successfully deleted");
    }

});


if(fs.existsSync("file.txt")){
    console.log("file exists");
    fs.appendFileSync("file.txt",'added content',(err)=>{});




    
}else {
    console.log("file does not exists");
    fs.writeFileSync("file.txt","added more data",(err)=>{});
}