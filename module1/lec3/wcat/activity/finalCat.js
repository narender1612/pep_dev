// this is the final implementation of cat.js
const fs = require('fs');
let cmdArguments = process.argv.slice(2); //to get arguments from command line

let flags = [];
let files = [];

for(let i = 0; i < cmdArguments.length; i++){
    if(cmdArguments[i].startsWith('-')){
        flags.push(cmdArguments[i]);
    } else files.push(cmdArguments[i]);
}

let finalData;
for(let x in files){
    let data = fs.readFileSync('./' + files[x], 'utf-8');
    if(flags.includes('-s')){
        data = dashS(data); //remove unnecessary spaces
    }
    if(flags.includes('-n') && flags.includes('-b')){
        if(flags.indexOf('-n') < flags.indexOf('-b')) data = dashN(data);
        else data = dashB(data);
    } else {
        if(flags.includes('-n')) data = dashN(data);
        if(flags.includes('-b')) data = dashB(data);

    }
    finalData = data;
}

function dashS(data){
    data = data.split('\n');
    let removedSpaces = [];
    let includedSpace = false;
    for(let i = 0; i < data.length; i++){
        if(data[i] == '' && includedSpace == false){
            removedSpaces.push(data[i]);
            includedSpace = true;
        } else if(data[i] != ''){
            removedSpaces.push(data[i]);
            includedSpace = false;
        }
    }
    removedSpaces = removedSpaces.join('\n');
    return removedSpaces;
}

function dashB(data){
    data = data.split('\n');
    let count = 1;
    for(let i = 0; i < data.length; i++){
        if(data[i] != ''){
            data[i] = `${count}. ${data[i]}`;
            count++;
        }
    }
    data = data.join('\n');
    return data;
}

function dashN(data){
    data = data.split('\n');
    let count = 1;
    for(let i = 0; i < data.length; i++){
        data[i] = `${count}. ${data[i]}`;
        count++;
    }
    data = data.join('\n');
    return data;
}

console.log(finalData);