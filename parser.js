const download = require('image-downloader');


const options = {
    url: '',
    dest: '../../photo/img.svg',
}
let errCode = 0;
download.image(options)
    .then(({ filename }) => {
        console.log('Saved to', filename)
    })
    .catch((err) => {
        errCode = (err.message.split("Status Code: ").pop())
    });
