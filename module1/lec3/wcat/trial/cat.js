const fs = require('fs');

let f1data = fs.readFileSync('./f1.txt', 'utf-8');

//removing redundant lines
function dashS(f1data){
    let splittedData = f1data.split('\n');
    let removedSpace = [];
    let spaceCounted = false;
    for(let i = 0; i < splittedData.length; i++){
        if(splittedData[i] == '' && spaceCounted == false){
            removedSpace.push(splittedData[i]);
            spaceCounted = true;
        } else if(splittedData[i] != ''){
            removedSpace.push(splittedData[i]);
            spaceCounted = false;
        }
    }
    removedSpace = removedSpace.join('\n');
    console.log(removedSpace);
}

dashS(f1data);

// implementing -n i.e. numbering every line irrespective of its content

function dashN(f1data){
    let splittedData = f1data.split('\n');
    for(let i = 0; i < splittedData.length; i++){
        splittedData[i] = (i+1) + '.' + splittedData[i];
    }
    splittedData = splittedData.join('\n');
    console.log(splittedData);
}

dashN(f1data);


// implementing dash b i.e. numbering lines that contain some data
function dashB(f1data){
    let splitted = f1data.split('\n');
    let number = 1;
    for(let i = 0; i < splitted.length; i++){
        if(splitted[i] != ''){
            splitted[i] = number + '. ' + splitted[i];
            number++;
        }
    }
    splitted = splitted.join('\n');
    console.log(splitted);

}

dashB(f1data);