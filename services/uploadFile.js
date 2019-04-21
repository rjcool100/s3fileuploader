const AWS = require('aws-sdk');
var fs = require('fs');
var path = require("path");
const IAM_USER_KEY = '';
const IAM_USER_SECRET = '';
const REGION = '';
const BUCKET = '';

function uploadToS3(file, type, key) {
    var absolutePath = path.resolve(file);

    var body = fs.createReadStream(absolutePath);
    var s3obj = new AWS.S3({
        accessKeyId: IAM_USER_KEY,
        secretAccessKey: IAM_USER_SECRET,
        region: REGION
    });
    s3obj.upload({
        Bucket: BUCKET,
        Key: `${type}/` + key,
        Body: body,
        ACL: 'public-read'
    }).
    on('httpUploadProgress', function (evt) {
        console.log(evt);
    }).
    send(function (err, data) {
        console.log(err, data)
    });
}

function streamUploadToS3(filestream, type, key) {
    var s3obj = new AWS.S3({
        accessKeyId: IAM_USER_KEY,
        secretAccessKey: IAM_USER_SECRET,
        region: REGION
    });
    s3obj.upload({
        Bucket: BUCKET,
        Key: `${type}/` + key,
        Body: filestream,
        ACL: 'public-read'
    }, (err, data) => {
        if (err)
            console.log(err);
        else
            console.log("done")
    })
    // on('httpUploadProgress', function (evt) {
    //     console.log(evt);
    // }).
    // send(function (err, data) {
    //     console.log(err, data)
    // });
}


module.exports = {
    uploadToS3,
    streamUploadToS3
}