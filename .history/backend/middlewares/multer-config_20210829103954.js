const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, res, callb)
})