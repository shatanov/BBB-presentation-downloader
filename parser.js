const download = require('image-downloader');


const options = {
    url: '',
    dest: '../../photo/img.svg',
}
download.image(options)
    .then(({ filename }) => {
        console.log('Saved to', filename)
    })
    .catch((err) => {
        (err.message.split("Status Code: ").pop())
    });
