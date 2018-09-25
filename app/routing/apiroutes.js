var path = require('path');

// Friend Entries
let friends = require('../data/friends.js');

// API routes
module.exports = function(app) {

app.get("/api/friends", function(req, res) {
    console.log(friends.length);
    if (friends.length === 0) {
      res.send(
        "Sorry, You don't have any friends yet. Get out and make some connections!"
      );
    } else {
      for (var i = 0; i < friends.length; i++) {
        res.json(friends);
      }
    }
  });

  app.post("/api/friends", function(req, res) {
    let newfriend = req.body;
    console.log("This is a new friend\n", newfriend);
    let newfriendAns = req.body.ans;
    console.log("This is friends", friends);
    let matchName = "";
    let matchImage = "";
    let totalDifference = 10000;

    for (let i = 0; i < friends.length; i++) {
      let diff = 0;
      for (var j = 0; j < newfriendAns.length; j++) {
        diff += Math.abs(friends[i].ans[j] - newfriendAns[j]);
      }
      if (diff < totalDifference) {
        console.log("Closest match found = " + diff);
        console.log("Friend name = " + friends[i].name);
        console.log("Friend image = " + friends[i].photo);
  
        totalDifference = diff;
        matchName = friends[i].name;
        matchImage = friends[i].photo;
  
        console.log("this is match name:", matchName);
        console.log("this is match image:", matchImage);
      }
    }

    friends.push(newfriend);
  
    console.log("this is match name:", matchName);
    console.log("this is match image:", matchImage);
    res.json({ matchName: matchName, matchImage: matchImage });
  });
};