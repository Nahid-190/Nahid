module.exports.config = {
  name: "goiadmin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    description: "mention",
    prefix: true,
    category: "user",
    usages: "tag",
    cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100075105758340") {
    var aid = ["100075105758340"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Mantion_দিস না _নাহিদ বস এর মন ভালো নেই আস্কে-!💔🥀", "-   নাহিদের সাথে কেউ সেক্স করে না থুক্কু টেক্স করে নাহ🫂💔"," Mantion_দিলে চুম্মাইয়া ঠুটের কালার change কইরা,লামু 💋😾😾🔨","নাহিদ বস এখন  বিজি জা বলার আমাকে বলতে পারেন_!!😼🥰","এতো মিনশন নাহ দিয়া সিংগেল নাহিদ রে একটা গফ দে 😒","চুমু খাওয়ার বয়স টা নাহিদ চকলেট🍫খেয়ে উড়িয়ে দিল🤗"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
