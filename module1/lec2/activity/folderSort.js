let fs = require("fs"); // to manage file systems

let extensionMapping = require("./util.js"); // this will import whatever util.js has put in it's exports object

let testFolderPath = "./Downloads";
let allFiles = fs.readdirSync(testFolderPath);

for(let i = 0; i < allFiles.length; i++){
    sortFile(allFiles[i]);
}

function getExtension(file){
    file = file.split(".");
    return file[1];
}

function checkExtensionFolder(extension){
    let extensionFolderName = testFolderPath;
    for(let key in extensionMapping){
        let extensions = extensionMapping[key];
        if(extensions.includes(extension)){
            extensionFolderName = extensionFolderName + "/" + key;
            break;
        }
    }

    let isFolderExist = fs.existsSync(extensionFolderName);
    if(!isFolderExist){
        fs.mkdirSync(extensionFolderName);
    }
    return extensionFolderName;
}

function moveFile(file, extensionFolderName){
    let source = testFolderPath + "/" + file;
    let destination = extensionFolderName + "/" + file;
    fs.copyFileSync(source, destination); // copy
    fs.unlinkSync(source); // delete
}

function sortFile(file){
    let extension = getExtension(file);
    let extensionFolderName = checkExtensionFolder(extension);
    moveFile(file, extensionFolderName);
}