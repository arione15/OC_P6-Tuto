const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, res, callback)=>{
        callback(null, 'images');
    },
    filename: (req, res, callback) => {
        
    }
})