var multer = require('multer');
var uploadFile = require('../services/uploadFile')
var upload = multer({
    dest: 'uploads/'
})


var route = require('express').Router();
route.post('/upload', upload.single('avatar'), function (req, res, next) {
    if (req.file) {
        console.log('Uploaded: ', req.file)
        uploadFile.uploadToS3(req.file.path, 'file', req.file.originalname)
        // Homework: Upload file to S3
    }
    res.json({
        'msg': 'file uploaded'
    })
})

module.exports = {
    route
}