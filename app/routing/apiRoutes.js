//Robert Zuniga - apiRoutes.js
var friends = require("../data/friends.js");
// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
module.exports = function (app) {

    // Displays all friends
    app.get("/api/friends", function (req, res) {
       return res.json(friends);
    });
    
    // Displays a single friend, or returns false
    app.get("/api/friends/:friend", function (req, res) {
        var chosen = req.params.friend;
    
        console.log(chosen);
        for (var i = 0; i < friends.length; i++) {
            if (chosen === friends[i].name) {
                return res.json(friends[i]);
            }
        }
    
        return res.json(false);
    });
    
    // Create New Friend - takes in JSON input
    app.post("/api/friends", function (req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        var newFriend = req.body;
    
        // Using a RegEx Pattern to remove spaces from newFriend
        // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
        //newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
    
        console.log("apiRoutes newFriend ==> ", newFriend);
    
        friends.push(newFriend);
    
        res.json(newFriend);
    });
         
}


