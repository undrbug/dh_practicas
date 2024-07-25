const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const folder = path.join(__dirname, '../public/images/avatar');
        cb(null, folder)
    },
    filename: function (req, file, cb) {
        cb(null, `avatar_` + Date.now() + path.extname(file.originalname))
    }
})

const fileupload = multer({ storage: storage });

module.exports = fileupload;