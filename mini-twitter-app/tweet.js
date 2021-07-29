const ProcessTweets = (userFileContent,tweetFileContent) => {
    var users = [];
    var tweets = [];

    var userFileLines = userFileContent.split(/\r?\n/);
    var tweetFileLines = tweetFileContent.split(/\r?\n/);

    userFileLines.forEach(element => {
        if(element.length == 0){
            return;
        }
        var data = element.split('follows');
        var user = { userFeed: []};
        user.name = data[0].trim();
        user.peopleThisUserFollows = [];
        var _peopleThisUserFollows = data[1].split(',');
        _peopleThisUserFollows.forEach(person => {
            user.peopleThisUserFollows.push(person.trim());
        });
        users.push(user);
    });

    var count = 1;

    tweetFileLines.forEach(element => {
        if(element.length == 0){
            return;
        }
        var data = element.split('>');
        var tweet = { id: count};
        tweet.user = data[0].trim();
        tweet.message = data[1].trim();
        if(tweet.message.length > 280){
            return;
        }
        tweets.push(tweet);
        count++;
    });
    users.forEach(user => {
        tweets.forEach(tweet => {
            if(
                user.peopleThisUserFollows.includes(tweet.user) ||
                tweet.user == user.name
            )
            {
                user.userFeed.push(tweet);
            }
        });
        user.userFeed.sort(function(a, b) {
            if (a.id.indexFound < b.id.indexFound) { return -1; }
            if (a.id.indexFound > b.id.indexFound) { return 1; }
            return 0;
          });;
    });
    users.sort(function(a, b) {
        return a.name.localeCompare(b.name);
     });
    return users;
}

module.exports = ProcessTweets;