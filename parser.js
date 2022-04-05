'use strict';

const fs = require('fs');
const client = require('https');

const downloadImage = (url, filepath) => {
    return new Promise((resolve, reject) => {
        client.get(url, (res) => {
            if (res.statusCode === 200) {
                res.pipe(fs.createWriteStream(filepath))
                    .on('error', reject)
                    .once('close', () => resolve(filepath));
            } else {
                res.resume();
                console.log("h");
                reject(new Error(`Request Failed With a Status Code: ${res.statusCode}`));
            }
        });
    });
};



function findPhoto(options) {
    for (let i = 0; i < options.files; i++) {
        downloadImage(options.url, options.path)
    }
};



const options = {
    url: 'https://sun9-69.userapi.com/impf/UxOOwlwyxP1HyYKa1ysbLgWD5GVJBGXn_ErDuw/xU8LFOUu_Lg.jpg?size=1920x1080&quality=96&sign=8146b4d8831e1107dae73fb14542897c&type=album',
    path: 'photo/img.png',
    files: 10
};

findPhoto(options)

