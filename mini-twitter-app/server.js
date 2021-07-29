const fs = require('fs');
const readline = require('readline');
const express = require('express');
const multer = require('multer');
var cors = require('cors')
const ProcessTweets = require('./tweet');

const app = express();
const upload = multer({
  dest: 'uploads/'
});

const port = process.env.PORT || 5000;

app.use(cors());
app.listen(port, () => console.log(`Welcome to the mini twitter server`));

app.post('/uploadTweets', upload.array(''), function (req, res) {
  if(req.files.length == 2){
    fs.readFile(req.files[0].path, 'utf8', (err,userData) => {
      fs.readFile(req.files[1].path,'utf8', (err,tweetData) => {
        var users = ProcessTweets(userData,tweetData);
        users.forEach(user => {
          console.log(user.name);
          user.userFeed.forEach(tweet => {
            console.log(`\t@${tweet.user}: ${tweet.message}`);
          });
        });
        res.send(users);
      });
    });
  }
});