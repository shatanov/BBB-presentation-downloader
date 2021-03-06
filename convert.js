'use strict';

const sharp = require("sharp")
const fs = require('fs');

const testFolder = './photo/';

const convertToPng = (file) => {
    const svgFile = file;
    const pngFile = file.replace(".svg", ".png");
    sharp("photo/"+svgFile)
    .png()
    .toFile("photo_png/"+pngFile)
    .then(function(info) {
        console.log(info)
    })
    .catch(function(err) {
        console.log(err)
    })
};

fs.readdir(testFolder, (err, files) => {
    for(let file of files) {
        convertToPng(file);
    }
});

