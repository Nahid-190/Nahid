const axios = require('axios');

module.exports.config = {
    name: "sms",
    version: "1.0.0",
    permission: 2,
    credits: "Rahad",
    description: "Send an SMS to the specified number",
    prefix: true,
    category: "sms send",
    usages: "sms <phone_number> <message>",
    cooldowns: 5,
    dependencies: {}
};

module.exports.run = async function({ api, event, args }) {
    const { threadID } = event;
    const phoneNumber = args[0];
    const message = args.slice(1).join(" ");

    if (!phoneNumber || !message) {
        api.sendMessage("Please provide both phone number and message in the format: sms <phone_number> <message>", threadID);
        return;
    }

    try {
        const response = await axios.get(`https://bd-custom-sms.vercel.app/send-sms`, {
            params: {
                key: 'Nahid', 
                number: phoneNumber,
                message: message
            }
        });

        if (response.data.success) {
            api.sendMessage(`SMS sent successfully! Remaining uses: ${response.data.remaining_uses}`, threadID);
        } else {
            api.sendMessage("Failed to send SMS. Please try again later.", threadID);
        }
    } catch (error) {
        console.error(error);
        api.sendMessage("An error occurred while sending SMS. Please try again later.", threadID);
    }
};
