const path = require('path');
const fs = require('fs');

let mimeStr;
fs.readFile(path.join(__dirname, './mime.json'), 'utf8', (err, data) => {
    // console.log(data);
    mimeStr = data;

    const patt = /".[a-z,0-9,A-Z,-, ]+"/g;
    let results = mimeStr.match(patt);


    // const pattr = /"[a-z,0-9,A-Z,//,--,.,+]+" /g;
    const pattr = /"[^.]\S+"/g;
    let results2 = mimeStr.match(pattr);

    // console.log(results[1],results2[1]);
    let strpwd ='';
    for(let i = 0;i<results.length;i++){
        if(i==0){
            var newStr ='{' + results[i] + ':' + results2[i] + ',' ; 
            strpwd += newStr;
        }else if(i == results.length-1){
            var newStr = results[i] + ':' + results2[i] + '}' ; 
            strpwd += newStr;
        }else{
            var newStr = results[i] + ':' + results2[i] + ',' ; 
            strpwd += newStr;}
        
    }
    // console.log(strpwd);
    fs.writeFile(path.join(__dirname,'mimeok.json'),strpwd,(err)=>{
        console.log(err); 
    });
    
});


