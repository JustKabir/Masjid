const {google} = require('googleapis');
const path = require('path');
const fs = require('fs');
var async = require('async');
const { oauth2 } = require('googleapis/build/src/apis/oauth2');
// const { oauth2 } = require('googleapis/build/src/apis/oauth2');
// const { OAuth2Client } = require('google-auth-library');

const CLIENT_ID = '53911429631-dufaosuassij3qkjfm33fuci2ehcj986.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';

const REFRESH_TOKEN = '1//04F6pNODN6v16CgYIARAAGAQSNwF-L9IrWtDbzMSrtgWEjldWbCWP73XzCDXQ3Enx6D8PtbKhOP3p_w7dF_LDR6qLIHYHXP0NfMk';

const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
);

oauth2Client.setCredentials({refresh_token: REFRESH_TOKEN});

const drive = google.drive({
    version: 'v3',
    auth: oauth2Client
});
const filePath = path.join(__dirname, '/homeUploads/2021-12-10T17-49-37.749ZScreenshot 2021-12-10 001232.png')

async function uploadFile(){
    try {
        
        const response = await drive.files.create({
            requestBody: {
             name:'image.png',
            mimeType: 'image/png'
            },
            media:{
                mimeType: 'image/png',
                body: fs.createReadStream(filePath)
            }
        })
        console.log(response.data)
    } catch (error) {
        
        console.log(error.message)
    }
}
// var pageToken = null;
// // Using the NPM module 'async'
// async.doWhilst(function (callback) {
//   drive.files.list( function (err, res) {
//     if (err) {
//       // Handle error
//       console.error(err);
//       callback(err)
//     } else {
//       res.files.forEach(function (file) {
//         console.log('Found file: ', file.name, file.id);
//       });
//     //   pageToken = res.nextPageToken; conco
//       callback();
//     }
//   });
// }, function () {
//   return !!pageToken;
// }, function (err) {
//   if (err) {
//     // Handle error
//     console.error(err);
//   } else {
//     // All pages fetched
//   }
// })

drive.files.list(function(err, res){;
    if(err){
        console.log(err);
    }else{
        console.log(res.files)
        // res.files.forEach(function(file){
            // console.log("found File", file.name);
        // })
    }
});