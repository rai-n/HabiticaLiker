var Discord = require("discord.io");
var logger = require("winston");
var auth = require("./auth.json");
const fs = require('fs');
var group = "e184b286-b369-46c9-ab55-054c3368af33";

var Habitica = require("habitica");



console.log(bots);

var api = new Habitica({
  id: "",
  apiToken: "",
  endpoint: "", // defaults to https://habitica.com/
  platform: "" // defaults to Habitica-Node
});

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
  colorize: true
});
logger.level = "debug";
// Initialize Discord Bot
var bot = new Discord.Client({
 token: auth.token,
 autorun: true
});

bot.on("ready", function (evt) {
  logger.info("Connected");
  logger.info("Logged in as: ");
  logger.info(bot.username + " - (" + bot.id + ")");
});



bot.on("message", function (user, userID, channelID, message, evt) {

  if (message.substring(0, 1) == "!") {
    var args = message.substring(1).split(" ");
    var cmd = args[0];
    var max = args[2]
    switch(cmd) {
            // If habitica 
            case "Habitica":
                //If Habitica but not check 
                if (args[1] === "check"){
                //Check
                bot.sendMessage({
                  to: channelID,
                  message: "Check inititated"
                });

                //Process loop start
                for (var y = 0 ; y < 3; y++){
                  bots.forEach(o => {
                    if (o.id === y) {
                      var api = new Habitica({
                        id: o.user,
                        apiToken: o.api,
                              endpoint: "", // defaults to https://habitica.com/
                              platform: "" // defaults to Habitica-Node
                            });
                      console.log("o: " + o);
                      console.log("o user: " + o.user);
                      console.log("o apis: " + o.api);
                            //Process loop end
                            

                            api.get('/groups/e184b286-b369-46c9-ab55-054c3368af33/chat').then((res) => {
                              var data = res.data

                              for(let i = 0; i < 20 ; i++){
                                if (data[i].username === "AlTheGreat"){
                                  console.log(data[i]);


                        //Post start
                        chatID = data[i]._id; 

                        var postID = "/groups/e184b286-b369-46c9-ab55-054c3368af33/chat/" + chatID + "/like";
                        api.post(postID).then((res) => {
                          var chatMessage = res.data

                          console.log(chatMessage);

                          //Writing to file
                          fs.appendFile("Bot/voted.txt", ("Voted id: " + chatID + "\n"), function(err) {
                            if(err) {
                              return console.log(err);
                            }

                            console.log("The file was saved!");
                          }); 

                        });
                        // Post end

                      }
                    }


                  });
                          } else {
                            console.log("o: " + o);
                            console.log("o user: " + o.user);
                            console.log("o apis: " + o.api);
                          } 
                        });
                }
              } else {
               bot.sendMessage({
                to: channelID,
                message: "Invalid command. Try !Habitica check"
              });
             }

             break;
           }

          //cmd end 
        }
         //bot message event
       });







