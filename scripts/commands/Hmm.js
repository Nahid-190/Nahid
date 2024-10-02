const fs = require("fs");
module.exports.config = {
  name: "iloveu",
  version: "2.0.0",
  permission: 0,
  credits: "nahid",
  description: "",
  prefix: false,
  category: "user",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("হুম")==0 || (event.body.indexOf("Humm")==0 || (event.body.indexOf("hmm")==0 || (event.body.indexOf("Hmm")==0)))) {
		var msg = {
				body: "নাটক বুঝি, আবেগ বুঝি..!কিন্তু Hummm এর পর কি লিখবো সেইটা বুঝি না🙄🥀 :))"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
