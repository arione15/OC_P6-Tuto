const multer = require('multer');

const MIME_TYPES = {
    'images/'
}

const storage = multer.diskStorage({
    destination: (req, res, callback) => {
        callback(null, 'images');
    },
    filename: (req, file, callback) => {
        const name = file.originalname.split(' ').join('_');
        const extension = MIME_TYPES[]

    }
})