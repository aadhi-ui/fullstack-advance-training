const fs=require('fs');
// console.log(fs);
// console.log(fs.exists("index.js"))
fs.writeFile("sample.txt","updated....",(err)=>{
    if(err) throw err;
    console.log("File created");
});

fs.appendFile("sample.txt","\n new data added",(err)=>{
    if(err) throw err;
    console.log("File appended");
});
// fs.unlink("sample.txt",(err)=>{
//     if(err) throw err;
//     console.log("File deleted");
// });
fs.readFile("sample.txt","utf-8",(err,data)=>{
    if(err) throw err;
    console.log(data);
});