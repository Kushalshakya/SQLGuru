"use strict";
var fs = require('fs');
var path = require('path');

const folderName = [
    'Filtering Patients by Weight Range',
    'Finding Patients from Hamilton with Allergies',
    'Filtering and Sorting Customer Data',
    'Finding the Tallest Patients',
    'Filtering Patients by Specific IDs',
    'Counting Total Admissions'
];

function createFolder(){
    const getSpaces = /\s+/g;
    folderName.forEach((folder, index) => {
        const indexing = (`0${index + 1}_`) + folder.replace(getSpaces, "_");
        const getFolder = path.join(__dirname, indexing);
        try{
            if(!fs.existsSync(getFolder)){
                fs.mkdirSync(getFolder);
                fs.writeFileSync(path.join(getFolder, "questio.md"), "helllo");
            }
        } catch (err){
            console.error(err);
        }
    })
}
createFolder()